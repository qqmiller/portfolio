/* ENTRANCE LOADER: show only on the first visit of the tab */
const loader = document.getElementById("loader");
const main = document.getElementById("main");

if (loader && main) {
    const hasSeenLoader = sessionStorage.getItem("portfolio-loader-seen");

    if (hasSeenLoader) {
        loader.style.display = "none";
        main.classList.add("show");
    } else {
        sessionStorage.setItem("portfolio-loader-seen", "true");
        setTimeout(() => {
            loader.classList.add("hide");
            main.classList.add("show");
        }, 1600);
        setTimeout(() => {
            loader.style.display = "none";
        }, 2500);
    }
} else if (main) {
    main.classList.add("show");
}

/* CURSOR LIGHT */
const cursorLight = document.querySelector(".cursor-light");
document.addEventListener("mousemove", (event) => {
    if (!cursorLight) return;
    cursorLight.style.left = `${event.clientX}px`;
    cursorLight.style.top = `${event.clientY}px`;
});

/* LANGUAGE */
const languageButtons = document.querySelectorAll(".language");
const translatableElements = document.querySelectorAll("[data-ru][data-en]");

function applyLanguage(language) {
    if (language !== "ru" && language !== "en") return;
    localStorage.setItem("language", language);
    document.documentElement.lang = language;

    translatableElements.forEach((element) => {
        const value = element.getAttribute(`data-${language}`);
        if (value !== null) element.innerHTML = value;
    });

    languageButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === language);
    });
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(localStorage.getItem("language") || "ru");

/* SMOOTH NAVIGATION */
document.querySelectorAll('.navigation a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* HERO PARALLAX */
const hero = document.querySelector(".hero");
document.addEventListener("mousemove", (event) => {
    if (!hero || window.innerWidth <= 700) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    hero.style.setProperty("--parallax-x", `${x}px`);
    hero.style.setProperty("--parallax-y", `${y}px`);
});

/* PROJECT REVEAL */
const projects = document.querySelectorAll(".project");
function revealProjects() {
    projects.forEach((project) => {
        if (project.getBoundingClientRect().top < window.innerHeight * 0.85) {
            project.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", revealProjects, { passive: true });
revealProjects();