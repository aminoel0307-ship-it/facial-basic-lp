# Facial Basic & Skill Up LP

フェイシャル基礎・スキルアップ講習（STEP1〜STEP3、対面実技）の申込み増加を目的とした、
独立ランディングページです。

- 公開URL（日本語版）：https://aminoel0307-ship-it.github.io/facial-basic-lp/
- 公開URL（英語版）：https://aminoel0307-ship-it.github.io/facial-basic-lp/en/
- 公開方法：GitHub Pages（`main` ブランチへのpushで自動デプロイ）

`amy-1p` / `tenku-sleep-lp` / `stress-relieve-lp` / `neck-shoulder-lp` とは完全に独立したプロジェクトで、
コード・デザイン・文章の共有や依存関係はありません。

## 構成

- `index.html` - LP本体（日本語版）
- `en/index.html` - 英語版LP（海外受講者向け。CSS・JS・写真・OGP画像は日本語版と共用）
- `css/style.css` - スタイルシート（黒×アイボリー×ゴールド、スマートフォン最優先）
- `js/config.js` - 申込み・相談先URLの一元管理（CTA種別ごとにLINEプリフィルメッセージを分離）
- `js/script.js` - `js/config.js` のURLを各CTAボタンへ適用するスクリプト
- `FACIAL_BASIC_BRAND_RULES.md` - 基本情報・料金・表現ルール・禁止事項（文言や料金表記はこちらを正とする）
- `amy-profile.jpg` - 講師紹介写真（`neck-shoulder-lp` と同一ファイルをコピー使用）
- `favicon.svg` - ファビコン
- `assets/facial/process/` - 施術工程セクションで使用している写真（WebP、9工程・計28枚）
- `assets/overseas/` - 海外展開セクションの写真
- `assets/ogp/` - SNSシェア用のOGP画像

## コンセプト

- 日本語版：基礎を超えて、触れた瞬間に伝わるサロン技術へ。
- 英語版：Knowing the steps is not enough. ／ Learn the touch clients can feel from the very first second.
- 「マニュアルを覚える講習」ではなく「触れ方まで直接指導するサロン実践フェイシャル講習」。
  美容学校や他スクールを否定せず、「基礎のその先にあるサロン実践技術を教える」立ち位置で統一（詳細は `FACIAL_BASIC_BRAND_RULES.md`）。

## ページ構成（日本語版・上から順）

1. ファーストビュー（基礎を超えて、触れた瞬間に伝わるサロン技術へ。）
2. こんな状態でサロンを始めようとしていませんか？（PROBLEM）
3. 中間CTA A
4. 基礎は大切。そのうえで、サロン現場で求められるもの。（BEYOND THE BASICS）
5. 触れた瞬間に伝わる、9つのサロン技術（TOUCH TECHNIQUE）
6. マニュアルを覚える講習ではなく、触れ方まで直接指導する講習。（HOW WE TEACH）
7. 美容機器を導入しただけで、フェイシャルは完成していますか？（FOR DEVICE USERS）
8. 機器を使えるだけでは、プロの施術にはなりません。（WHY BASIC MATTERS）
9. 必要な技術から、段階的に学べる3STEP（3 STEP PROGRAM）
10. STEP1 Facial Basic（フェイシャル基礎講習）
11. STEP2 Facial Massage（フェイシャルマッサージ講習）
12. 中間CTA B
13. STEP3 Facial Pack & Mask（パック・特殊マスク講習）
14. 手順の先にある「触れ方」まで、実践で学ぶ（TECHNIQUE：施術工程01〜09）
15. こんな方におすすめです（RECOMMENDED FOR）
16. 受講後、「なんとなく施術」から卒業する。（AFTER THE COURSE）
17. 中間CTA C
18. 講師紹介＋Amyからのメッセージ（INSTRUCTOR）
19. 日本で培ったフェイシャル技術を、世界へ。（OVERSEAS・英語版への導線）
20. 受講料（PRICE）
21. どのSTEPから受講すればいいか迷っている方へ（STEP選びのご相談）
22. よくあるご質問（FAQ：13問）
23. 基礎を超えて、触れた瞬間に伝わるサロン技術へ。（最終CTA）

## ページ構成（英語版・上から順）

1. Hero（Knowing the steps is not enough.）
2. Why Japan（Travel to Japan／Learn directly from Amy／Japanese salon technique／International students welcome）
3. Beyond the Basics
4. For Device Users
5. The Touch（9 salon techniques）
6. How We Teach（hands-on correction）
7. 3-Step Program と STEP 1〜3 の学べる内容
8. Technique（施術工程01〜09）
9. Who It's For
10. 中間CTA
11. Your Instructor＋A Message from Amy
12. Going Global（Italy 2027）
13. Course Fees（JPY・税込、GMWBA Member Rate）
14. Training in Japan（開催地・言語サポート・渡航）
15. FAQ（9問）
16. Final CTA

日本語版のヘッダー「EN」・海外展開セクション・FAQから英語版へ、英語版のヘッダー「日本語」・フッターから日本語版へ移動できます。

## 受講料

金額・表記ルールの詳細は `FACIAL_BASIC_BRAND_RULES.md` を参照してください（金額はルール文書を正とする）。

| STEP | 一般（税込） | GMWBA会員（税込） |
|---|---|---|
| STEP1｜Facial Basic | 220,000円 | 200,000円 |
| STEP2｜Facial Massage | 220,000円 | 200,000円 |
| STEP3｜Facial Pack & Mask | 110,000円 | 88,000円 |

料金はページ内の3か所（各STEPの説明、受講料セクション、FAQ）に表示しています。
変更する場合は3か所すべてを同じ金額にそろえてください。

## 申込み・相談リンクについて

Neck & Shoulder LPと同じ公式LINE（`@161uzomr`）を使用していますが、フェイシャル講習専用と
判別できるよう、CTAごとにプリフィルメッセージを分けています。

| CTAクラス | 主なボタン文言 | LINE送信文言 |
|---|---|---|
| `.js-cta-consult` | 受講について相談する／相談する（ヘッダー） | フェイシャル講習個別相談希望 |
| `.js-cta-apply` | 受講を希望する | フェイシャル講習受講希望 |
| `.js-cta-step1` | STEP1 基礎講習に申し込む／STEP1を受講する | STEP1 基礎講習受講希望 |
| `.js-cta-step2` | STEP2 マッサージ講習に申し込む／STEP2を受講する | STEP2 マッサージ講習受講希望 |
| `.js-cta-step3` | STEP3 パック講習に申し込む／STEP3を受講する | STEP3 パック講習受講希望 |
| `.js-cta-intl`（英語版） | Ask About Facial Training in Japan／International Facial Training Inquiry | International Facial Training Inquiry |

- URLを変更する場合は `js/config.js` の値のみを書き換えてください（各ボタンへ自動反映、新しいタブで開きます）。
- GMWBA関連リンク（公式サイト `https://gmwba.jp`、入会・お問い合わせLINE `https://lin.ee/LNtKbCK`）は
  `index.html` に直接記載しています。

## SEO・SNSシェア設定

- `canonical` / `og:url`：日本語版 `https://aminoel0307-ship-it.github.io/facial-basic-lp/`、英語版 `…/facial-basic-lp/en/`
- `hreflang`：日本語版と英語版を相互に関連付け（x-default は日本語版）
- OGP画像は日本語版・英語版で同じ既存画像を使用
- `og:title` / `og:description`：`<title>` と `meta description` と同じ文言
- `twitter:card`：`summary_large_image`

### OGP（SNSシェア）画像

- `assets/ogp/ogp-facial-vinophis-lesson.jpg`（1200×630）
- 施術工程写真 `assets/facial/process/facial-07-vinophis-massage-04.webp` を、講師と受講生の顔が入る位置で
  横長に切り出してJPG化したもの（文字入れ・加工なし）
- 差し替える場合は同じファイル名で上書きするか、`index.html` の `og:image` / `twitter:image` を書き換えてください
- 差し替え後、既にシェア済みのURLはSNS側のキャッシュが残るため、各SNSのシェアデバッガーで再取得してください

## 海外展開セクションの写真について

実画像へ差し替え済みです（`index.html` の `overseas__photo-frame` 内）。

- `assets/overseas/overseas-01-noemi-profile.webp` - イタリア現地パートナー Noemi のプロフィール写真
- `assets/overseas/overseas-02-italy-announcement.webp` - イタリア講習開催予定の告知画像

写真を変更する場合は、上記ファイルの差し替え、または `<img>` タグの `src` / `alt` を書き換えてください。

## 現在LPで使用していない素材

以下はリポジトリ内に保管されていますが、現在のLPでは表示していません（削除せず素材として保管）。

- `assets/facial/gallery/` - 講習時の写真素材（93枚）
- `assets/overseas/7A356010-E346-41B7-A3C3-A1C6059A0FDF.PNG`、`assets/overseas/ACF3053E-FBF3-40B9-9B2D-5E45074F2402.JPG` - 海外展開写真の元画像

## スマートフォン表示の調整について

スマートフォン表示を最優先しています（375px／390px／430pxで確認）。

- 固定ヘッダーがあるため、ページ内リンクの移動先は `scroll-padding-top`（72px）で見出しが隠れないようにしています
- 見出しは `<span class="phrase">` で語句単位に折り返し、不自然な改行を防いでいます
  （改行位置を変える場合は文言はそのままに、`phrase` の区切りを調整してください）
- 本文・リスト・FAQ質問は `word-break: auto-phrase` と `text-wrap: pretty` で、末尾1〜2文字だけの改行を防いでいます
  （対応ブラウザのみ。非対応ブラウザでは通常の改行になります）

## 更新・公開の流れ

1. `main` ブランチで修正する
2. ローカルでスマートフォン幅（390px）の表示を、日本語版・英語版の両方で確認する
3. `main` へpushすると GitHub Pages（pages build and deployment）が自動で公開する

## ローカル確認

```
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開き、開発者ツールでスマートフォン幅（390px）を指定して確認してください。
