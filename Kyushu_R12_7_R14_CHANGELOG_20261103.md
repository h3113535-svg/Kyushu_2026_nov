# 九州家族旅 App R12.7 / Firebase R14 (2026-11-03)

## 檔案
- R12.7 更新 ZIP：僅 `app.js`、`style.css`（覆蓋網站同名檔）
- R14 Firebase JSON：僅匯入 `trips/kyushu-nov-2026/content`；切勿蓋掉其他登入／使用者節點。
- 全備份 ZIP：原 R12.6 + 本版增量；`index.html`、`firebase-config.js`、`sw.js`、登入 JS 均原樣保留。

## 修改
D2 正式使用方案B：公園→計程車回The CATAN午休→計程車到天神中央公園咖啡擇一→PARCO本館B1Fザ天神福岡努努雞（先問保冷）、新館4F FREAK’S STORE（可取消）→MINA約15:15–17:15完整2小時→計程車至Canal City，17:40晚餐、試鞋、19:00暫定鋼彈水舞、之後再買鞋並搭車回住宿。DACOMECCA選配，不再強制博多站採買。

D3 由布院選逛店家依 **2026/10 旅遊 App 計畫清單**（不是旅遊後真實評價）：telato、Milch、鞠智、金賞可樂餅、橡子之森、5toku、花卉村、SNOOPY茶屋。湯之坪行程卡直接顯示前4間，展開可看8間與獨立Google Maps導航。

D4 African Safari、海地獄行程卡的長按指南加入官方開園／價格、停留動線、長輩少走路方式、自駕安全、足湯／溫泉蛋。手機長按（約750ms後鬆手）開攻略，另外設有「長按看攻略・也可點此開啟」直接開啟按鈕。

所有其他天、登入、首頁設計和Firebase資料結構不變。D4 Safari自駕：園方提醒動物碰車可能造成車損，需向租車公司確認保險排除範圍。Canal City鋼彈11/22時刻仍待官方公告。冷凍努努雞需向店員確認可安全攜帶時間／保冷方式。

## 參考資料
- 2026/10 自製App 行程資料 `Kyushu_2026_oct_Firebase_Content_v5.3.52-r11.9_ParcoKiddyLand.json` 第4天商店清單
- Safari官方：https://africansafari.co.jp/information/ 、 https://africansafari.co.jp/mycar/ 、 https://africansafari.co.jp/faq/
- 海地獄官方：https://www.umijigoku.co.jp/fee/ 、 https://www.umijigoku.co.jp/info/ashiyu/index.html
- 由布院店家官方例：https://www.milch-japan.co.jp/shops/ 、 https://cucuchi.jp/access/ 、 https://yufuin.gr.jp/spot/spot-1218/

## 部署備註
更新網站靜態 `app.js`、`style.css` 後如看不到新內容，請重新整理或重新開啟PWA以重抓快取；R14 JSON匯入前應先備份現有 `content`。尚未在線上正式網站完成端到端登入、Firebase匯入及iOS長按測試。
