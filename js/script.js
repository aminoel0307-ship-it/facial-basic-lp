(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var cfg = window.SITE_CONFIG || {};
    var fallback = cfg.applyUrl || "#apply";

    function setCtaHref(el, url) {
      el.setAttribute("href", url);
      if (url.charAt(0) !== "#") {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    }

    var ctaMap = {
      "js-cta-apply": cfg.applyUrl || fallback,
      "js-cta-consult": cfg.consultUrl || fallback,
      "js-cta-step1": cfg.step1Url || fallback,
      "js-cta-step2": cfg.step2Url || fallback,
      "js-cta-step3": cfg.step3Url || fallback
    };

    Object.keys(ctaMap).forEach(function (cls) {
      document.querySelectorAll("." + cls).forEach(function (el) {
        setCtaHref(el, ctaMap[cls]);
      });
    });

    var yearEl = document.getElementById("js-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
})();
