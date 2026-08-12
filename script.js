/* =================================
   LOADER
================================= */

const loader = document.getElementById("loader");
const main = document.getElementById("main");

setTimeout(() => {
    loader?.classList.add("hide");
    main?.classList.add("show");
}, 1600);

setTimeout(() => {
    if (loader) loader.style.display = "none";
}, 2500);


/* =================================
   CURSOR LIGHT
================================= */

const cursorLight = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (event) => {
    if (!cursorLight) return;
    cursorLight.style.left = `${event.clientX}px`;
    cursorLight.style.top = `${event.clientY}px`;
});


/* =================================
   LANGUAGE
   Supports the data-ru / data-en system
   used by the current index.html.
================================= */

const languageButtons = document.querySelectorAll(".language");
const translatableElements = document.querySelectorAll("[data-ru][data-en]");

function applyLanguage(language) {
    if (!["ru", "en"].includes(language)) return;

    localStorage.setItem("language", language);
    document.documentElement.lang = language;

    translatableElements.forEach((element) => {
        const value = element.getAttribute(`data-${language}`);
        if (value !== null) {
            element.innerHTML = value;
        }
    });

    languageButtons.forEach((button) => {
        const buttonLanguage =
            button.dataset.lang || button.dataset.language;

        button.classList.toggle("active", buttonLanguage === language);
    });
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const language =
            button.dataset.lang || button.dataset.language;

        applyLanguage(language);
    });
});

applyLanguage(localStorage.getItem("language") || "ru");


/* =================================
   SMOOTH NAVIGATION
================================= */

const navigationLinks = document.querySelectorAll('.navigation a[href^="#"]');

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});


/* =================================
   HERO PARALLAX
================================= */

const hero = document.querySelector(".hero");

if (hero) {
    document.addEventListener("mousemove", (event) => {
        if (window.innerWidth <= 700) return;

        const x = (event.clientX / window.innerWidth - 0.5) * 10;
        const y = (event.clientY / window.innerHeight - 0.5) * 10;

        hero.style.setProperty("--parallax-x", `${x}px`);
        hero.style.setProperty("--parallax-y", `${y}px`);
    });
}


/* =================================
   PROJECT REVEAL
================================= */

const projectElements = document.querySelectorAll(".project");

function revealProjects() {
    projectElements.forEach((project) => {
        const rect = project.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.85) {
            project.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealProjects, { passive: true });
revealProjects();
