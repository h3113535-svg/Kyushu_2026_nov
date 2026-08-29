Kyushu Nov PWA v1.7.0

更新重點
- D1–D9 每日主圖新增「中文 / 日本語」雙語系：預設中文，切換後全日圖與 Lightbox 會維持同一語系。
- 使用者提供的 D1–D9 中文 PNG 已全部轉成 WebP，尺寸保留 1448×1086。
- 修正每日 Header、Timeline 與多處標題在手機窄寬度下的亂分行／兩三字被擠到下一行問題。
- 新增三段 Chapter 章節導覽：D1–D3、D4–D6、D7–D9；章節縮圖會跟著主圖語系一起切換。
- 未進入 16 日正式天氣預報期時，可直接點天氣卡循環預覽晴／陰／雨／雷／雪，並明確標示「非實際預報」。
- 進入正式預報期後，自動回到 Open-Meteo 實際預報，天氣圖依真實 weather code 切換。
- 每日 Header 資訊層級重整，加入 Chapter、日期、目前主圖語系資訊。
- Service Worker / Cache / PWA start_url 統一更新為 v1.7。

部署
1. 平常 GitHub 更新使用 UPDATE ONLY，將檔案覆蓋 repo 根目錄。
2. FULL BACKUP 為完整可還原版本。
3. 不需重新匯入 Firebase Seed。
4. 已安裝 PWA 若仍顯示舊畫面，完全關閉 App 後重開一次。
