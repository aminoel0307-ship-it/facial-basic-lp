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

実画像へ差し替え済みです（`index.html` の `overseas__photo-frame` 内）。

- `assets/overseas/overseas-01-noemi-profile.webp` - イタリア現地パートナー Noemi のプロフィール写真
- `assets/overseas/overseas-02-italy-announcement.webp` - イタリア講習開催予定の告知画像

写真を変更する場合は、上記ファイルの差し替え、または `<img>` タグの `src` / `alt` を書き換えてください。

## OGP（SNSシェア）画像について

- `assets/ogp/ogp-facial-vinophis-lesson.jpg`（1200×630）
- 施術工程写真 `assets/facial/process/facial-07-vinophis-massage-04.webp` を横長に切り出してJPG化したもの（文字入れ・加工なし）
- 差し替える場合は同じファイル名で上書きするか、`index.html` の `og:image` / `twitter:image` を書き換えてください

## ローカル確認

```
python3 -m http.server 8000
```
