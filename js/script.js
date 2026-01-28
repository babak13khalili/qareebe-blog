const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const htmlTag = document.documentElement;

langToggle.addEventListener("click", () => {
  const isRtl = htmlTag.dir === "rtl";

  if (isRtl) {
    htmlTag.dir = "ltr";
    htmlTag.lang = "en";
    langToggle.textContent = "فـا";
    updateText("en");
  } else {
    htmlTag.dir = "rtl";
    htmlTag.lang = "fa";
    langToggle.textContent = "En";
    updateText("fa");
  }
});

function updateText(lang) {
  const content = {
    en: {
      // حتما حروف کوچک
      title: "Thoughts & Memories",
      desc: "To record, review, and legacy",
      pageTitle: "Thoughts, Life & Daily Notes",
    },
    fa: {
      // حتما حروف کوچک
      title: "افکار، احوال و روزمرگی‌ها",
      desc: "برای ثبت، مرور و میراث",
      pageTitle: "افکار، احوال و روزمرگی‌ها",
    },
  };

  // چک کردن برای جلوگیری از ارور احتمالی
  if (content[lang]) {
    document.getElementById("main-title").textContent = content[lang].title;
    document.getElementById("main-desc").textContent = content[lang].desc;
    document.getElementById("page-title").textContent = content[lang].pageTitle;
  }
}

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlTag.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlTag.setAttribute("data-theme", newTheme);
});
