# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

```bash
npm run dev      # 開発サーバー起動 (http://localhost:5173)
npm run build    # TypeScriptコンパイル + Viteビルド
npm run lint     # ESLint実行（警告ゼロ必須）
npm run preview  # ビルド成果物のローカルプレビュー
```

テストランナーは存在しない。

## アーキテクチャ概要

React + TypeScript + Vite 製の SPA（PWA）。GitHub Pages にデプロイされる。

```
Pages (UI/状態) → utils/ (ビジネスロジック) → localStorage + IndexedDB + Google Drive
```

### ルーティング

`HashRouter` を使用（GitHub Pages のクライアントサイドルーティング対応のため必須）。

| パス | ページ |
|---|---|
| `/` | Dashboard |
| `/tasks` | TaskList |
| `/calendar` | Calendar |
| `/memos` | MemoList |
| `/settings` | Settings |

### 状態管理

グローバル状態管理ライブラリ（Redux, Zustand, Context API）は使用していない。  
各ページコンポーネントが `useState` でローカル状態を保持し、変更時に `src/utils/storage.ts` 経由で localStorage に直接保存する。

### ストレージ層

| 層 | 用途 | ファイル |
|---|---|---|
| localStorage | 全アプリデータ（`AppState`）の一次保存先 | `src/utils/storage.ts` |
| IndexedDB | 音声メモの blob データ | `src/utils/db.ts` |
| Google Drive `appDataFolder` | クロスデバイス同期用のフルスナップショット | `src/utils/googleDrive.ts` |

同期フロー：`storage.syncWithCloud()` が Drive から取得 → マイグレーション適用 → localStorage 更新。保存は `storage.uploadToCloud()` 経由。

### データモデルとマイグレーション

`AppState`（`src/types.ts`）が全データを保持する。現在のデータバージョンは **v9**。

データ構造を変更した場合は必ず `src/utils/migrations.ts` に前方互換のマイグレーション処理を追加し、バージョンを上げること。

### Google Drive OAuth

- Client ID は `src/utils/googleDrive.ts` の `CLIENT_ID` に直書き
- アクセストークン → `sessionStorage`（ページリフレッシュ後の自動再認証に利用）
- 同期有効フラグ → `localStorage`
- スコープ: `drive.appdata`（アプリ専用フォルダのみアクセス）

Google Cloud Console で承認済み JavaScript 生成元に `http://localhost:5173` と `https://[username].github.io` を登録する必要がある。

### スタイリング

- グローバルスタイル: `src/index.css`（CSS 変数定義含む）
- コンポーネントごとにインラインスタイルを使用（CSS Modules・Tailwind クラスは不使用）
- パスエイリアス: `@/` → `src/`（`vite.config.ts` と `tsconfig.json` 両方で設定済み）

#### デザイントークン（`src/index.css` 定義）

本アプリはダークテーマを採用している。`public/` 配下の静的ページ（`privacy.html` 等）を含め、
アプリ全体でこの配色・フォントに統一すること。**個人の CLAUDE.md にある資料作成用のブランドカラー（白背景・青 `#00809E` 等）はこのアプリの UI には適用しない。**

| 用途 | 変数名 | 値 |
|---|---|---|
| プライマリカラー | `--primary` | `#3b82f6` |
| プライマリ（濃） | `--primary-dark` | `#1d4ed8` |
| 背景（ページ全体） | `--bg-dark` | `#0f172a` |
| 背景（カード） | `--bg-card` | `#1e293b` |
| テキスト（メイン） | `--text-main` | `#f8fafc` |
| テキスト（補助） | `--text-muted` | `#94a3b8` |
| 危険・エラー | `--danger` | `#ef4444` |
| 警告 | `--warning` | `#f59e0b` |
| 成功 | `--success` | `#10b981` |
| ボーダー | `--border` | `#334155` |
| ボーダー（hover） | `--border-hover` | `#475569` |
| 角丸 | `--radius-sm` / `md` / `lg` / `xl` | `6px` / `10px` / `12px` / `16px` |

- フォント: `'Inter', 'Noto Sans JP', sans-serif`
- カードコンポーネントの典型パターン: `background-color: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;`
- ボタンの典型パターン: `background-color: var(--primary); color: white; border-radius: 6px〜10px;`

### デプロイ

- `vite.config.ts` の `base: './'` は GitHub Pages の相対パス対応に必須
- GitHub Pages は SPA のルーティングを直接サポートしないため HashRouter を使用
