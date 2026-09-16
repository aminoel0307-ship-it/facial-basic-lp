# Facial Basic & Skill Up LP

フェイシャル基礎・スキルアップ講習（STEP1〜STEP3、対面実技）の申込み増加を目的とした、
独立ランディングページです。

`amy-1p` / `tenku-sleep-lp` / `stress-relieve-lp` / `neck-shoulder-lp` とは完全に独立したプロジェクトで、
コード・デザイン・文章の共有や依存関係はありません。

## 構成

- `index.html` - LP本体（14セクション）
- `css/style.css` - スタイルシート（黒×アイボリー×ゴールド、スマートフォン最優先）
- `js/config.js` - 申込み・相談先URLの一元管理（CTA種別ごとにLINEプリフィルメッセージを分離）
- `js/script.js` - CTAへのリンク適用など共通スクリプト
- `FACIAL_BASIC_BRAND_RULES.md` - 基本情報・表現ルール・禁止事項
- `amy-profile.jpg` - 講師紹介写真（`neck-shoulder-lp` と同一ファイルをコピー使用）

## 申込み・相談リンクについて

Neck & Shoulder LPと同じ公式LINE（`@161uzomr`）を使用していますが、フェイシャル講習専用と
判別できるよう、CTAごとにプリフィルメッセージを分けています（詳細は `FACIAL_BASIC_BRAND_RULES.md` 参照）。
URLを変更する場合は `js/config.js` の値のみを書き換えてください。

## 海外展開セクションの写真について

現時点で写真が未確定のため、プレースホルダー表示にしています。写真が用意でき次第、
`index.html` の `overseas__photo-frame` 内を `<img>` タグに差し替えてください。

## ローカル確認

```
python3 -m http.server 8000
```
