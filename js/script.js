const langToggle = document.getElementById("lang-toggle");
const htmlTag = document.documentElement;

langToggle.addEventListener("click", () => {
  const isRtl = htmlTag.dir === "rtl";

  // المان‌هایی که انیمیشن می‌گیرند
  const headerEls = [
    document.getElementById("main-title"),
    document.getElementById("main-desc"),
  ];
  // انتخاب لینک‌ها و تاریخ‌ها
  const postItems = document.querySelectorAll(".post-link, .post-date");

  // ۱. شروع فاز مخفی‌سازی
  headerEls.forEach((el) => {
    el.classList.remove("morph-header");
    el.style.opacity = "0";
  });
  postItems.forEach((el) => {
    el.classList.remove("simple-fade");
    el.style.opacity = "0";
  });

  setTimeout(() => {
    // ۲. تغییر تگ lang و جهت صفحه (این باعث تغییر فونت در CSS می‌شود)
    if (isRtl) {
      htmlTag.dir = "ltr";
      htmlTag.setAttribute("lang", "en"); // بسیار مهم برای تغییر فونت
      langToggle.textContent = "فـا";
      updateTexts("en");
    } else {
      htmlTag.dir = "rtl";
      htmlTag.setAttribute("lang", "fa");
      langToggle.textContent = "En";
      updateTexts("fa");
    }

    // ۳. اجرای انیمیشن مورف برای هدر
    headerEls.forEach((el) => {
      el.style.opacity = "";
      void el.offsetWidth; // ریست کردن انیمیشن
      el.classList.add("morph-header");
    });

    // ۴. اجرای انیمیشن فید برای پست‌ها (تاریخ و عنوان)
    postItems.forEach((el) => {
      el.style.opacity = "";
      void el.offsetWidth;
      el.classList.add("simple-fade");
    });
  }, 100);
});

function updateTexts(lang) {
  const content = {
    en: { title: "Thoughts & Memories", desc: "To record, review, and legacy" },
    fa: { title: "افکار، احوال و روزمرگی‌ها", desc: "برای ثبت، مرور و میراث" },
  };

  document.getElementById("main-title").textContent = content[lang].title;
  document.getElementById("main-desc").textContent = content[lang].desc;

  // تغییر تمام المان‌هایی که دارای ویژگی data-en و data-fa هستند
  document.querySelectorAll("[data-" + lang + "]").forEach((el) => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}
