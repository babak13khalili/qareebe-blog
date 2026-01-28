const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const htmlTag = document.documentElement;

// --- ۱. مدیریت زبان (ساده و دایره‌ای) ---
langToggle.addEventListener("click", () => {
  const isRtl = htmlTag.dir === "rtl";
  const langText = document.getElementById("lang-text");

  if (isRtl) {
    htmlTag.dir = "ltr";
    htmlTag.lang = "en";
    langText.textContent = "FA";
    updateText("en");
  } else {
    htmlTag.dir = "rtl";
    htmlTag.lang = "fa";
    langText.textContent = "EN";
    updateText("fa");
  }
});

function updateText(lang) {
  const content = {
    en: {
      title: "Thoughts & Memories",
      desc: "To record, review, and legacy",
      pageTitle: "Thoughts, Life & Daily Notes",
    },
    fa: {
      title: "افکار، احوال و روزمرگی‌ها",
      desc: "برای ثبت، مرور و میراث",
      pageTitle: "افکار، احوال و روزمرگی‌ها",
    },
  };

  document.getElementById("main-title").textContent = content[lang].title;
  document.getElementById("main-desc").textContent = content[lang].desc;
  document.getElementById("page-title").textContent = content[lang].pageTitle;
}

// --- ۲. مدیریت تم ---
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlTag.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlTag.setAttribute("data-theme", newTheme);
});
