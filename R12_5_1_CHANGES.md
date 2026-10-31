# R12.5.1｜首頁自然銜接小修補

適用：已安裝 R12.5 的網站。只更動 `index.html` 和 `style.css`。

## 修改
- 移除 R12.5 的 `hero-paper-wave` SVG 波浪紙片造型。
- 封面底部改成約 21px 的極淡漸層，和米白文字區自然銜接；不使用不規則曲線或大圓角。
- 保留 R12.5 的較高封面、標題字型、九天行程總覽、日期列及今日行程樣式。
- HTML 唯一其他差異：CSS 載入參數改為 `r1251-soft-straight-20261031`，讓瀏覽器載入更新後的樣式。

## 完全未修改
`app.js`、`trip-overview.js`、`firebase-config.js`、`sw.js`、`manifest.json`、行程 JSON、網站圖片。

## 安裝
1. 先備份現有 `index.html` 和 `style.css`。
2. 用本包同名檔覆蓋後部署。
3. 用一般 Chrome 打開頁面，確認新版樣式與 Google 登入；登入完成後才測試 PWA。
4. 若不喜歡可直接還原 R12.5 的上述兩個檔案。

此為靜態修改；未對線上網站部署，也未能在實際 Google 帳號登入流程中驗證。
