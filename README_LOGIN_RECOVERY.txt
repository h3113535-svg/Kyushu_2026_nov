九州家族旅 - Google 登入緊急修復包（穩定 v1.11.24 基底 + CSS-only 隱藏 FAMILY DAY）

症狀：部署 v1.11.25 後卡在「正在開啟 Google 登入…」。
本修復採取最小變更：
- app.js：與已知上一版 v1.11.24 完全一致，Google 登入函式原封不動。
- sw.js、manifest.json：與 v1.11.24 完全一致，退回前一版 PWA 快取配置。
- index.html：回到 v1.11.24，唯一差異為 style.css 的查詢版本碼（強制載入新版 CSS）。
- style.css：在 v1.11.24 原版上只增加 #familyMetaCard{display:none!important}。
- firebase-config.js：不包含、不覆寫，沿用已部署的私人設定。

部署：
1. 請備份目前網站檔案。
2. 將 ZIP 內 app.js、index.html、style.css、sw.js、manifest.json 這 5 個檔案覆蓋同名檔案。
3. 等 GitHub Pages 完成部署後，關閉已開啟的 PWA 頁面，在普通 Chrome / Safari 中開網站原網址並重新整理。
4. 登入成功後再從主畫面打開 App。若頁面仍有舊畫面，請強制重新整理；不要清除網站資料，可能會刪掉本機 PDF 附件和未同步資料。

注意：這是根據 v1.11.24 穩定版做的保守回復，不是對 Google OAuth 真實帳號流程的保證。若回復後仍登入卡住，需進一步看瀏覽器 Console / Auth 授權網域與 Firebase 錯誤。
Firebase R10 行程資料、後端、紀錄均不需重匯、也不需清除。
