const langBtn = document.getElementById("lang-toggle");
const themeBtn = document.getElementById("theme-toggle");
const htmlTag = document.documentElement;

// --- ۱. مدیریت تغییر زبان و جهت صفحه ---
langBtn.addEventListener("click", () => {
  const isRtl = htmlTag.dir === "rtl";

  if (isRtl) {
    // تغییر به انگلیسی
    htmlTag.dir = "ltr";
    htmlTag.lang = "en";
    langBtn.textContent = "فا";
    updateText("en");
  } else {
    // تغییر به فارسی
    htmlTag.dir = "rtl";
    htmlTag.lang = "fa";
    langBtn.textContent = "EN";
    updateText("fa");
  }
});

function updateText(lang) {
  const content = {
    en: {
      title: "Thoughts & Memories",
      desc: "To record, review, and legacy",
      footer: "By Babak",
      pageTitle: "Thoughts, Life & Daily Notes",
    },
    fa: {
      title: "افکار، احوال و روزمرگی‌ها",
      desc: "برای ثبت، مرور و میراث",
      footer: "ساخت بابک",
      pageTitle: "افکار، احوال و روزمرگی‌ها",
    },
  };

  document.getElementById("main-title").textContent = content[lang].title;
  document.getElementById("main-desc").textContent = content[lang].desc;
  document.getElementById("footer-text").textContent = content[lang].footer;
  document.getElementById("page-title").textContent = content[lang].pageTitle;
}

// --- ۲. مدیریت تغییر تم (روشن/تاریک) ---
themeBtn.addEventListener("click", () => {
  const currentTheme = htmlTag.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlTag.setAttribute("data-theme", newTheme);
  themeBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});
