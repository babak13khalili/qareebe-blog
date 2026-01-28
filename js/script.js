const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle"); // اضافه شد
const htmlTag = document.documentElement;

// --- منطق تغییر زبان ---
langToggle.addEventListener("click", () => {
  const isRtl = htmlTag.dir === "rtl";

  const headerEls = [
    document.getElementById("main-title"),
    document.getElementById("main-desc"),
  ];
  const postItems = document.querySelectorAll(".post-link, .post-date");

  headerEls.forEach((el) => {
    el.classList.remove("morph-header");
    el.style.opacity = "0";
  });
  postItems.forEach((el) => {
    el.classList.remove("simple-fade");
    el.style.opacity = "0";
  });

  setTimeout(() => {
    if (isRtl) {
      htmlTag.dir = "ltr";
      htmlTag.setAttribute("lang", "en");
      langToggle.textContent = "فـا";
      updateTexts("en");
    } else {
      htmlTag.dir = "rtl";
      htmlTag.setAttribute("lang", "fa");
      langToggle.textContent = "En";
      updateTexts("fa");
    }

    headerEls.forEach((el) => {
      el.style.opacity = "";
      void el.offsetWidth;
      el.classList.add("morph-header");
    });

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

  document.querySelectorAll("[data-" + lang + "]").forEach((el) => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}

// --- منطق تغییر تم (اصلاح شد) ---
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlTag.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlTag.setAttribute("data-theme", newTheme);
});
