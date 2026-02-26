# TeraQ (役員活動管理アプリ)

労働組合の役員活動を効率化するためのタスク・スケジュール管理アプリケーションです。

## 主な機能

- **ダッシュボード**: 今日の予定や未完了タスクを一目で確認。
- **タスク管理**: カテゴリ別のタスク管理と、組合員対応状況（回答率）の可視化。
- **スケジュール管理**: 会議や出張の予定管理。
- **旅費計算**: 出張経路に基づいた簡便な旅費・交通費の集計。
- **クラウド同期 (Google Drive)**: PCとスマホ間でのデータ共有機能。
  - Google Driveのアプリ専用領域 (`appDataFolder`) を使用し、安全にデータを同期します。
  - ページ更新時の自動再接続機能を搭載。
- **モバイル対応**: スマートフォンでの操作に最適化されたヘッダーとナビゲーション。

## 技術スタック

- **Frontend**: React, TypeScript, Vite
- **Styling**: CSS (バニラCSS), Lucide React (アイコン)
- **External API**: Google Drive API (Google Identity Services)
- **Deployment**: GitHub Pages

## 使い方

1. `npm install` で依存関係をインストール。
2. `npm run dev` でローカル開発サーバーを起動。
3. クラウド同期を利用するには、Google Cloud ConsoleでOAuth 2.0 クライアントIDを取得し、`src/utils/googleDrive.ts` に設定してください。
