const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const htmlTag = document.documentElement;

// --- ۱. مدیریت زبان ---
langToggle.addEventListener("click", () => {
  const isRtl = htmlTag.dir === "rtl";
  const faSpan = langToggle.querySelector(".lang-fa");
  const enSpan = langToggle.querySelector(".lang-en");

  if (isRtl) {
    htmlTag.dir = "ltr";
    htmlTag.lang = "en";
    faSpan.classList.remove("active");
    enSpan.classList.add("active");
    updateText("en");
  } else {
    htmlTag.dir = "rtl";
    htmlTag.lang = "fa";
    enSpan.classList.remove("active");
    faSpan.classList.add("active");
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

// --- ۲. مدیریت تم ---
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlTag.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlTag.setAttribute("data-theme", newTheme);
});
