# 設計 (DESIGN.md)

## システム概要

本アプリは、ユーザーのデバイスローカル（`localStorage`）およびクラウド（Google Drive）の両方にデータを保持するハイブリッドなデータ管理モデルを採用しています。

## 構成要素

### 1. プレゼンテーション層 (UI)
- **Layout / Header / BottomNav**: 画面の骨格とモバイル対応ナビゲーション。
- **Dashboard / TaskList / Calendar**: 各機能のメイン画面。
- **SyncStatus**: Google連携の認証・同期状態を管理するUI。

### 2. ビジネスロジック / ユーティリティ層
- **storage.ts**: データの読み書きと同期のオーケストレーション。
- **googleDrive.ts**: Google APIとの低レベル通信。
- **migrations.ts**: データ構造変更時の安全な移行処理。

### 3. データ層
- **localStorage**: ネットワークオフライン時や高速な読み込みのための一次保存先。
- **Google Drive (appDataFolder)**: 複数デバイス間での同期、およびバックアップのための保存先。

## 静的修造 (クラス / コンポーネント図)

主要なステート管理とコンポーネントの依存関係を以下に示します。

```mermaid
classDiagram
    class AppState {
        +string version
        +Task[] tasks
        +ScheduleEvent[] events
        +TravelExpenseItem[] travelExpenses
        +MemoItem[] memos
        +MemoTemplate[] memoTemplates
        +Role[] roles
        +TaskDefinition[] taskDefinitions
        +MeetingDefinition[] meetingDefinitions
        +string currentRoleId
        +boolean showAllItems
        +string lastSyncedAt
    }
    
    class Storage {
        +getTasks()
        +saveTasks()
        +getMemos()
        +saveMemos()
        +syncWithCloud()
    }
    
    class GoogleDrive {
        +init()
        +getFileContent()
        +updateFileContent()
    }
    
    Storage --> AppState : manages
    Storage ..> GoogleDrive : syncs via
    
    class Dashboard {
        +visibleTasks
        +todayEvents
    }
    class Settings {
        +roles
        +definitions
    }
    
    Dashboard ..> Storage : reads
    Settings ..> Storage : writes
    TaskList ..> Storage : reads/writes
    Calendar ..> Storage : reads/writes
```

## データ構造 (AppState)

全てのデータは一つのJSONオブジェクトとして管理されます。

- `version`: データ構造のバージョン（現在: 6）。
- `tasks`: タスクの配列（役職に応じたフィルタリング、サブタスク対応。メモは外部参照）。
- `events`: スケジュールの配列（会議体からのインポート対応。メモは外部参照）。
- `travelExpenses`: 独立した旅費精算データの配列。
- `memos`: グローバルに集約されたメモデータの配列（IDによる紐付け）。
- `memoTemplates`: メモ作成時に利用する定型文テンプレートの配列。
- `roles`: 役職定義の配列。
- `taskDefinitions`: 定型タスク（テンプレート）の定義配列。
- `meetingDefinitions`: 会議体（定例会議）の定義配列。
- `currentRoleId`: ユーザー自身の現在の役職ID。
- `showAllItems`: 全表示モードのフラグ。
- `lastSyncedAt`: 最終同期日時。

## 動的構造

### クラウド同期フロー
ユーザーがブラウザを起動してからデータが同期されるまでの流れです。

```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser (Local)
    participant G as Google Drive (Cloud)
    
    U->>B: ページ読み込み
    B->>B: storage.init() / localStorageから旧データ読込
    B->>G: auth.init() サイレントサインイン
    alt 認証成功
        B->>G: storage.syncWithCloud() 最新ファイル取得
        G-->>B: union_app_data.json
        B->>B: migrations.migrateData() 必要なら移行
        B->>B: UI状態更新
    else 認証失敗/初回
        B-->>U: ログインボタン表示
    end
    
    U->>B: データの変更 (タスク完了等)
    B->>B: save to localStorage
    B->>G: updateFileContent (Background)
```

### 同期状態の遷移
アプリ内の同期ステータスの管理フローです。

```mermaid
stateDiagram-v2
    [*] --> Disconnected
    Disconnected --> Connecting: ログインボタン押下
    Connecting --> Synced: 認証成功 & データ取得完了
    Connecting --> Disconnected: エラー
    
    Synced --> Saving: ローカル変更発生
    Saving --> Synced: アップロード完了
    Saving --> Error: ネットワーク切断等
    Error --> Saving: 自動/手動リトライ
```

## クラウド同期フロー (詳細)

設計の詳細やエラーハンドリングの検討事項については、 [DESIGN_DETAILS.md](./DESIGN_DETAILS.md) を参照してください。
