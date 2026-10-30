/* R12.3 itinerary overview — standalone. No Firebase or authentication hooks. */
(() => {
  'use strict';
  const byId = id => document.getElementById(id);
  const dialog = byId('tripOverviewDialog');
  const stage = byId('tripOverviewStage');
  const img = byId('tripOverviewImage');
  const open = byId('tripOverviewOpen');
  if (!dialog || !stage || !img || !open) return;
  const FILE = './kyushu-family-overview-2026.png?v=r123';
  let zoom = 1;
  let touchPinch = null;
  let lastFocused = null;
  let preparedShareFile = null;
  let preparingShareFile = null;
  function prepareShareFile() {
    if (preparedShareFile || preparingShareFile) return preparingShareFile;
    preparingShareFile = fetch(FILE).then(r => { if (!r.ok) throw new Error('image_fetch_failed'); return r.blob(); })
      .then(blob => { preparedShareFile = new File([blob], '2026九州家族紅葉旅_九天行程圖.png', {type:'image/png'}); })
      .catch(() => { preparedShareFile = null; })
      .finally(() => { preparingShareFile = null; });
    return preparingShareFile;
  }

  function baseline() { return Math.min(760, Math.max(240, stage.clientWidth - 24)); }
  function setZoom(next, x, y) {
    const previous = zoom;
    zoom = Math.min(4, Math.max(1, Math.round(next * 100) / 100));
    const left = stage.scrollLeft, top = stage.scrollTop;
    const px = Number.isFinite(x) ? x : stage.clientWidth / 2;
    const py = Number.isFinite(y) ? y : stage.clientHeight / 2;
    img.style.width = Math.round(baseline() * zoom) + 'px';
    byId('tripOverviewZoomPercent').textContent = Math.round(zoom * 100) + '%';
    if (previous !== zoom) {
      const scale = zoom / previous;
      stage.scrollLeft = Math.max(0, (left + px) * scale - px);
      stage.scrollTop = Math.max(0, (top + py) * scale - py);
    }
  }
  function launch() {
    if (dialog.open) return;
    lastFocused = document.activeElement;
    dialog.showModal();
    prepareShareFile(); // Prepare image before user taps Share; Web Share requires active click.
    zoom = 1;
    setZoom(1);
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
    byId('tripOverviewClose').focus();
  }
  function dismiss() {
    if (!dialog.open) return;
    dialog.close();
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }
  open.addEventListener('click', launch);
  byId('tripOverviewClose').addEventListener('click', dismiss);
  dialog.addEventListener('close', () => { touchPinch = null; });
  byId('tripOverviewZoomIn').addEventListener('click', () => setZoom(zoom + .5));
  byId('tripOverviewZoomOut').addEventListener('click', () => setZoom(zoom - .5));
  byId('tripOverviewZoomReset').addEventListener('click', () => { zoom = 1; setZoom(1); stage.scrollLeft = 0; stage.scrollTop = 0; });
  img.addEventListener('load', () => { if(dialog.open) setZoom(zoom); });
  window.addEventListener('resize', () => { if(dialog.open) setZoom(zoom); });
  stage.addEventListener('touchstart', e => {
    if (e.touches.length !== 2) { touchPinch = null; return; }
    const [a, b] = e.touches;
    touchPinch = { dist: Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY) || 1, initial: zoom };
  }, { passive: true });
  stage.addEventListener('touchmove', e => {
    if (e.touches.length !== 2 || !touchPinch) return;
    e.preventDefault();
    const [a, b] = e.touches;
    const rect = stage.getBoundingClientRect();
    const x = (a.clientX + b.clientX)/2 - rect.left;
    const y = (a.clientY + b.clientY)/2 - rect.top;
    const dist = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
    setZoom(touchPinch.initial * dist / touchPinch.dist, x, y);
  }, { passive: false });
  stage.addEventListener('touchend', e => { if (e.touches.length < 2) touchPinch = null; }, { passive: true });
  stage.addEventListener('touchcancel', () => { touchPinch = null; }, { passive: true });

  byId('tripOverviewShare').addEventListener('click', async () => {
    const button = byId('tripOverviewShare');
    if (button.disabled) return;
    button.disabled = true;
    try {
      const url = new URL(FILE, location.href).href;
      // Start share synchronously in the click gesture; no await before navigator.share().
      if (navigator.share) {
        const payload = preparedShareFile && navigator.canShare?.({files:[preparedShareFile]})
          ? {files:[preparedShareFile], title:'2026 九州家族紅葉旅'}
          : {title:'2026 九州家族紅葉旅・九天行程圖',url};
        await navigator.share(payload);
      } else {
        await navigator.clipboard.writeText(url);
        alert('已複製行程圖連結，可以貼到家人 LINE 群組。');
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return;
      alert('這台裝置暫時無法直接分享，可改按「儲存圖片」。');
    } finally { button.disabled = false; }
  });
})();
