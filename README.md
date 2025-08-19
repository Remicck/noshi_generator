# 熨斗ジェネレーター

![image](https://github.com/Remicck/noshi_generator/assets/3492320/0fc5ec5a-91d2-4686-a320-ba52b0972244)

熨斗ジェネレーターは、夏祭りなどで使用される熨斗（海老紙）を生成するための簡単なジェネレーターです。このアプリケーションはTauriを使用して構築されており、Windows、Mac、およびLinuxで動作します。

## 特徴

- クロスプラットフォーム: Windows、Mac、およびLinuxで動作します。
- 使いやすい: 必要な情報を入力し、印刷ボタンを押すだけで印刷プレビュー画面が表示されます。
- A4サイズ印刷: 生成された熨斗はA4サイズで印刷可能です。

## インストール

リリースページから環境に合わせたインストーラーをダウンロードしてください
[Releases · Remicck/noshi_generator](https://github.com/Remicck/noshi_generator/releases)

## 開発環境のセットアップ

### 必要な環境

- Node.js (v18以上推奨)
- pnpm (パッケージマネージャー)
- Rust (Tauriのビルドに必要)

### セットアップ手順

1. リポジトリをクローン

```bash
git clone https://github.com/Remicck/noshi_generator.git
cd noshi_generator
```

2. 依存関係をインストール

```bash
pnpm install
```

3. 開発サーバーを起動

```bash
pnpm run tauri dev
```

### ビルド方法

アプリケーションをビルドする場合:

```bash
pnpm run tauri build
```

### その他の開発コマンド

```bash
# フロントエンドのみの開発サーバー
pnpm run dev

# TypeScriptとViteのビルド
pnpm run build

# Lintの実行
pnpm run lint

# コードのフォーマット
pnpm run format
```
