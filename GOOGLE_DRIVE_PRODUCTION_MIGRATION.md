# Google Drive 同期：テストモード解除・本番移行 提案書

作成日: 2026-07-25
対象: `src/utils/googleDrive.ts` を中心とした Google Drive 同期機能

## 1. 背景・課題

現在の Google Drive OAuth 連携は Google Cloud Console 上で **「テスト」ステータス**のまま運用されている。この状態には以下の制約があり、実用上の手間になっている。

| 制約 | 内容 |
|---|---|
| 同意画面の毎回表示 | `googleDrive.ts:77` の `prompt: silent ? '' : 'consent'` により、手動サインイン時は毎回 Google の同意確認画面が表示される |
| テストユーザー上限 | External アプリの「テスト」ステータスでは登録できるテストユーザーが最大 100 人まで |
| リフレッシュトークンの短命化 | テストステータスのリフレッシュトークンは **7日で失効**し、以後は再ログインが必要になる場合がある |
| 「確認されていないアプリ」警告 | 未登録ユーザーが認証しようとすると警告画面が挟まる |

## 2. 移行先の調査・比較

「テストモードの手間をなくす」というゴールに対し、以下の選択肢を調査した。

| 選択肢 | 概要 | 承認/審査の要否 | 移行コスト | プライバシー面 | 総合評価 |
|---|---|---|---|---|---|
| **① Google Drive 本番(未審査)モード** | 現状の実装を維持し、OAuth同意画面を「公開」に切り替えるのみ | **不要**（`drive.appdata` は Google 公式分類で **非機密(non-sensitive) スコープ**のため審査対象外） | 極小（設定変更＋数行のコード修正） | ◎ ユーザー自身のGoogleアカウント内に保存。開発者はデータに一切触れない | **推奨** |
| ② Firebase (Firestore + Auth) | Google製BaaS。開発者が管理するクラウドDBにデータを保存 | Firebase自体はOAuth審査と無関係だが、Google Sign-In用に別途OAuthクライアントが必要 | 中〜大（同期ロジックの全面書き換え、DBスキーマ設計） | △ 開発者がデータを預かる形になり、現行の「ユーザー自身の領域に保存する」という設計方針（`DESIGN_DETAILS.md`記載）と矛盾 | 不採用 |
| ③ Supabase | OSSのBaaS。Postgresベース | 同上（認証方式次第） | 中〜大（同上） | △ 同上。加えて無料枠は組織アカウントが必要になる場合あり | 不採用 |
| ④ 自前バックエンドAPI | Node/Express等でAPIサーバーを構築 | 不要だがサーバー運用が必要 | 大（サーバー構築・ホスティング費用・保守） | △ 開発者がデータを預かる | 不採用 |
| ⑤ Microsoft OneDrive / Dropbox API | 他社クラウドストレージへの乗り換え | 各社のOAuth審査が別途必要（同様の「テスト/本番」概念が存在し、同じ課題が再発する可能性） | 大（認証・API連携をゼロから実装） | ◎ 方式としては同等 | 不採用 |

### 結論
現状の実装・設計方針（ユーザー自身のGoogleアカウントにデータを保持し、開発者はデータに関与しない）を大きく崩す理由がなく、**Google Drive の「本番(未審査)モード」へ移行するのが最善**という結論に至った。`drive.appdata` は Google が定める「非機密スコープ」であり、審査を受けずに「テスト」→「本番」へ移行できる。

参考:
- [Sensitive scope verification | Google for Developers](https://developers.google.com/identity/protocols/oauth2/production-readiness/sensitive-scope-verification)
- [Store application-specific data | Google Drive API](https://developers.google.com/workspace/drive/api/guides/appdata)
- [Manage App Audience - Google Cloud Platform Console Help](https://support.google.com/cloud/answer/15549945?hl=en)
- [Unverified apps - Google Cloud Platform Console Help](https://support.google.com/cloud/answer/7454865?hl=en)

## 3. 移行手順（テスト環境の解除方法）

作業は「コード修正」と「Google Cloud Console 操作」の2トラックに分かれる。

### Track A: コード修正

#### A-1. 同意画面の毎回表示を解消

**ファイル:** `src/utils/googleDrive.ts` 77行目

```typescript
// 変更前
tokenClient.requestAccessToken({ prompt: silent ? '' : 'consent' });

// 変更後
tokenClient.requestAccessToken({ prompt: '' });
```

- `prompt: 'consent'` が毎回同意画面を強制表示している原因。
- `prompt: ''` に変更すると、初回のみ同意画面が表示され、以降は自動的にトークンが発行される（本番モードかつ既に許可済みのユーザーの場合）。

> 補足: この修正は本番モード移行の効果を最大化するための変更であり、テストモードのままでも一定の緩和は見込めるが、根本的な解決には Track B とのセット適用が必要。

#### A-2. CLIENT_ID の環境変数化（実施済み）

**ファイル:** `src/utils/googleDrive.ts` 5行目

```typescript
// 変更前
const CLIENT_ID = '541237405602-df30i3dm5eje25fl2thhhghp25erv2s6.apps.googleusercontent.com';

// 変更後
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
```

- ソースコードへの直書きをやめ、Vite の環境変数（`VITE_GOOGLE_CLIENT_ID`）から注入する方式に変更。
- CLIENT_ID自体は非機密情報（4章参照）だが、環境ごとの値の切り替えやコードからの分離という一般的なベストプラクティスに合わせた。
- 未設定時はコンソールにエラーを出力し、原因に気づきやすくしている。
- 型定義: `src/vite-env.d.ts` に `ImportMetaEnv` を追加。

**設定ファイル:**
| ファイル | 用途 | Git管理 |
|---|---|---|
| `.env.example` | 設定項目のテンプレート（値は空） | する |
| `.env.local` | ローカル開発用の実値 | **しない**（`.gitignore` 対象） |
| GitHub Actions Secrets（`VITE_GOOGLE_CLIENT_ID`） | GitHub Pages デプロイ時のビルドに注入 | - |

- `.github/workflows/deploy.yml` の `Build` ステップに `env: VITE_GOOGLE_CLIENT_ID: ${{ secrets.VITE_GOOGLE_CLIENT_ID }}` を追加済み。デプロイ前にリポジトリの Settings → Secrets and variables → Actions で `VITE_GOOGLE_CLIENT_ID` を登録する必要がある。
- `.gitignore` に `dist/` と `.env` 系ファイルを追加。

### Track B: Google Cloud Console 操作（ユーザー側で実施）

1. **プライバシーポリシーページの用意**
   - 「公開」には有効なプライバシーポリシーURLが必須。
   - 本アプリは `drive.appdata`（アプリ専用非公開領域）のみを扱うため、簡易な内容で問題ない。
   - GitHub Pages上に静的ページ（例: `https://[username].github.io/[repo]/privacy.html`）を用意し、以下を記載する。
     - 収集するデータの種類（アプリ内で入力した活動記録データ）
     - データの保存先（ユーザー自身のGoogleドライブのアプリ専用領域。開発者のサーバーには送信・保存されない）
     - 第三者提供の有無（なし）
     - 問い合わせ先

2. **OAuth同意画面の設定確認**
   - [Google Cloud Console](https://console.cloud.google.com/) → 対象プロジェクトを選択 → 「APIとサービス」→「OAuth同意画面」
   - 「アプリ情報」にプライバシーポリシーURLを入力
   - スコープ一覧に `../auth/drive.appdata` のみが含まれていることを確認（余分なスコープがあれば削除し、最小権限を維持）

3. **アプリを公開**
   - 「対象」タブ（または「公開ステータス」）にある **「アプリを公開」** ボタンをクリック
   - 確認ダイアログで「確認」を選択
   - ステータスが「テスト」→「本番」に変わる
   - `drive.appdata` は非機密スコープのため、この操作だけで完了し、Googleによる追加審査は発生しない

4. **動作確認**
   - シークレットウィンドウ等、未認証状態のブラウザで実際にサインインを行い、以下を確認する
     - 「確認されていないアプリ」警告が表示されないこと
     - 同意画面が初回のみ表示され、以後のリロード・再訪問では自動的に同期が再開されること
   - リフレッシュトークンの7日失効制限が解除されていること（本番モードでは長期間有効）

### 実施後のドキュメント反映

移行完了後は、CLAUDE.mdの規約に従い以下を更新すること。
- `DESIGN_DETAILS.md`: 「セキュリティ設計」章に本番モード移行の経緯を追記
- `README.md`: 初回セットアップ手順に「OAuth同意画面は本番公開済み」である旨を反映（開発者が別プロジェクトで再現する場合の手順として）

## 4. リスク・注意点

`drive.appdata` スコープの制約上、データ自体は「ユーザー自身のGoogleアカウント内のアプリ専用領域」からしか出入りしないため、致命的なリスクは小さい。ただし以下は考慮が必要。

### 実質的にほぼ問題にならない点
- **審査要求**: `drive.appdata` は非機密スコープのため、公開時にGoogleの追加審査（CASA等）は発生しない。
- **他人データへのアクセス**: appdataスコープはアプリが作成したファイルにしかアクセスできない。たとえ第三者がこのアプリで認証しても、その人自身のGoogleドライブ内にしかデータを書き込めず、他ユーザーのデータには到達できない。

### 考慮すべきリスク

| リスク | 内容 | 実害度 |
|---|---|---|
| **CLIENT_IDの公開範囲拡大** | テストモードでは「テストユーザー」として登録した人しか認証できないが、本番化すると誰でもこのCLIENT_IDで認証フローを開始できる。`googleDrive.ts` にCLIENT_IDが直書きされているため、第三者が同じIDを別サイトに埋め込み、本アプリになりすましてユーザーに同意を求める可能性はゼロではない | 低〜中（実害はappdataスコープの範囲に限定されるが、ユーザーの混乱を招く可能性はある） |
| **同意画面情報の一般公開** | アプリ名・ロゴ・サポートメールアドレスなど、OAuth同意画面に表示する情報が誰でも見られるようになる | 低（サポートメールに個人アドレスを設定している場合は要注意） |
| **将来のスコープ拡張時の制約** | 今後より広いスコープを追加する場合、分類によっては審査（数週間単位）が必要になる。詳細は下記「スコープ分類表」を参照。本番化済みだと審査中は既存機能も止まる可能性がある | 中（将来機能追加の計画がある場合） |
| **Google利用規約の遵守義務** | 「公開」は「Google API Services User Data Policy」への準拠を正式に宣言する行為になる。規約違反（虚偽のプライバシーポリシー等）があれば、Google判断でアプリが停止されるリスクがある | 低（個人〜組合内利用規模で規約通り運用していれば問題なし） |
| **組織Google Workspaceアカウントの場合の制約** | プロジェクトがGoogle Workspace組織配下にある場合、「External」公開に組織のポリシー制約がかかることがある（管理者承認が必要になるケース） | ユーザー環境依存（事前に組織のGoogle Workspace管理者設定を確認） |

- **「アプリを公開」は原則後戻り可能**: 再度「テストに戻す」こともできるが、通常は不要。
- **クライアントIDはコードに直書き（`CLIENT_ID`）**: 本番移行後も変更不要。OAuthクライアントID自体は公開情報として扱って問題ない（`CLIENT_SECRET`を使わないPKCE方式のため）。ただし上記のなりすましリスクを踏まえ、サポートメール等の個人情報公開範囲は事前に確認しておくこと。

### スコープ分類表（Google Drive API）

Drive APIのスコープは3段階に分類されており、どのスコープを追加するかで審査要否が変わる。

| 分類 | スコープ | 審査 |
|---|---|---|
| **Non-sensitive**（現状使用中） | `drive.appdata`（現在使用中）, `drive.file`, `drive.install` | 不要 |
| **Sensitive** | `drive.apps.readonly` | 基本審査が必要（数日〜1週間程度、CASA監査は不要） |
| **Restricted** | `drive`（フルアクセス）, `drive.readonly`, `drive.metadata`, `drive.metadata.readonly`, `drive.activity`, `drive.activity.readonly`, `drive.scripts`, `drive.meet.readonly` | **審査必須＋CASA（第三者セキュリティ監査）必須**。数週間〜数ヶ月、監査費用が発生する場合もある |

**境界線**: 「アプリ専用領域(appDataFolder)またはユーザーが明示的に選んだファイルの範囲を超えて、マイドライブ全体・他アプリのファイル・活動履歴にアクセスするかどうか」が審査要否の分かれ目。

- 現状維持で審査不要な拡張例: 「Googleドライブのファイルピッカーでユーザーに既存ファイルを選ばせて読み込む」機能 → `drive.file` を追加するだけで済み、non-sensitiveのまま審査不要。
- 審査（Restricted scope審査＋CASA監査）が必要になる拡張例:
  - 「アプリからユーザーのマイドライブ全体を検索・一覧表示したい」→ `drive.readonly` または `drive`
  - 「ユーザーが持つ既存のスプレッドシートやフォルダ構造を自動で読み取りたい」→ 同上
  - 「ファイルの編集履歴（誰が・いつ変更したか）を取得したい」→ `drive.activity` / `drive.activity.readonly`
  - 「アプリ以外が作成したファイルのメタデータ（更新日時など）を取得したい」→ `drive.metadata` 系

参考: [Choose Google Drive API scopes | Google for Developers](https://developers.google.com/workspace/drive/api/guides/api-specific-auth)

> 補足: ローカルPC上のファイル読み書き（エクスポート/インポート機能等）は、ブラウザ標準機能（`<input type="file">` や File System Access API）で実装するものであり、Googleサーバー上のリソースにアクセスするものではないため、この審査体系とは無関係。
