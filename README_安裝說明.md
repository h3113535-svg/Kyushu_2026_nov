# R12.1 單一步驟更新包（從 v1.11.24／登入回復版升級）

本包把 R12 的程式功能與 R12.1 柔和字型合併：
- app.js = R12 的 Google Maps 多站導航與 Aa 字級切換。
- index.html / style.css = R12.1 柔和排版。

## 安裝
1. 先備份目前網站檔案與 Firebase Content。
2. 把本 ZIP 的 app.js、index.html、style.css 三個檔案放到原 App 網站根目錄，覆蓋同名檔。
3. 不要覆蓋 firebase-config.js、sw.js、manifest.json。若你目前登入仍有問題，先回復 v1.11.24 穩定版，再套用本包。
4. 重新部署，先在正常瀏覽器（非已安裝 PWA）測試 Google 登入；確認功能正常後再用 PWA。
5. 若要補齊 R12 所整理的完整 90 個分站地圖入口，需要另行備份後把 R12 的 Firebase JSON 匯入 `trips/kyushu-nov-2026/content`，不要覆蓋整個 trip 根節點。

## 注意
- 沒有更改登入函式、Firebase 設定、Service Worker 或 manifest。
- 靜態語法檢查已通過，但未在正式網站上驗證 Google 登入或 Firebase 資料同步。
- 如果線上 App 版本不是 v1.11.24／其 CSS-hotfix 回復版，請先核對既有檔案以免覆蓋之後的自訂改動。
