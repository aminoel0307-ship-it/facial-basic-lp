/**
 * サイト共通設定
 *
 * 申込み・相談の連絡先URLをここで一元管理しています。
 * 技術スクールの申込み・相談導線は「aminoel beauty academy」公式LINE（@161uzomr）に統一しています。
 * Neck & Shoulder LPと同じ公式LINEですが、フェイシャル講習専用に判別できるよう、
 * LINEを開いた際のプリフィルメッセージをCTAの種類ごとに分けています。
 *
 * - applyUrl:   「受講を希望する」系CTA（.js-cta-apply）専用
 * - consultUrl: 「フェイシャル講習について相談する」系CTA（.js-cta-consult）専用
 * - step1Url:   STEP1（Facial Basic）専用CTA（.js-cta-step1）
 * - step2Url:   STEP2（Facial Massage）専用CTA（.js-cta-step2）
 * - step3Url:   STEP3（Facial Pack & Mask）専用CTA（.js-cta-step3）
 * - gmwbaInfoUrl / gmwbaJoinUrl: GMWBA関連リンク（通常のリンクとして直接設定、CTAクラスは使用しない）
 *
 * URLを変更する場合は、下記の値だけを書き換えてください。対象のCTAボタンに自動で反映されます（新しいタブで開きます）。
 * 他LP（Neck & Shoulder／TENKU Sleep／Stress Relieve）のLINE設定には一切影響しません。
 */
window.SITE_CONFIG = {
  applyUrl: "https://line.me/R/oaMessage/%40161uzomr/?%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B7%E3%83%A3%E3%83%AB%E8%AC%9B%E7%BF%92%E5%8F%97%E8%AC%9B%E5%B8%8C%E6%9C%9B",
  consultUrl: "https://line.me/R/oaMessage/%40161uzomr/?%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B7%E3%83%A3%E3%83%AB%E8%AC%9B%E7%BF%92%E7%9B%B8%E8%AB%87%E5%B8%8C%E6%9C%9B",
  step1Url: "https://line.me/R/oaMessage/%40161uzomr/?STEP1%20%E5%9F%BA%E7%A4%8E%E8%AC%9B%E7%BF%92%E5%8F%97%E8%AC%9B%E5%B8%8C%E6%9C%9B",
  step2Url: "https://line.me/R/oaMessage/%40161uzomr/?STEP2%20%E3%83%9E%E3%83%83%E3%82%B5%E3%83%BC%E3%82%B8%E8%AC%9B%E7%BF%92%E5%8F%97%E8%AC%9B%E5%B8%8C%E6%9C%9B",
  step3Url: "https://line.me/R/oaMessage/%40161uzomr/?STEP3%20%E3%83%91%E3%83%83%E3%82%AF%E8%AC%9B%E7%BF%92%E5%8F%97%E8%AC%9B%E5%B8%8C%E6%9C%9B",
  gmwbaInfoUrl: "https://gmwba.jp",
  gmwbaJoinUrl: "https://lin.ee/LNtKbCK"
};
