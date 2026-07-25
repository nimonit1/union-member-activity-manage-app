/// <reference types="vite/client" />

/**
 * Vite の環境変数（import.meta.env）の型定義。
 * VITE_ プレフィックスの変数はクライアント側バンドルに埋め込まれるため、
 * 機密情報ではなく公開前提の値（OAuth Client ID 等）のみを格納すること。
 */
interface ImportMetaEnv {
    readonly VITE_GOOGLE_CLIENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
