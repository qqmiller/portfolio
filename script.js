/* ================================
   LOADER
================================ */

const loader = document.getElementById("loader");
const main = document.getElementById("main");
const counter = document.getElementById("counter");

let progress = 0;

const counterTimer = setInterval(() => {
    progress += 5;

    if (progress >= 100) {
        progress = 100;
        clearInterval(counterTimer);
    }

    if (counter) {
        counter.textContent = progress;
    }
}, 70);


/* ================================
   SHOW MAIN
================================ */

setTimeout(() => {
    if (loader) {
        loader.classList.add("hide");
    }

    if (main) {
        main.classList.add("show");
    }
}, 1600);


setTimeout(() => {
    if (loader) {
        loader.style.display = "none";
    }
}, 2500);


/* ================================
   CURSOR LIGHT
================================ */

const cursorLight = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (event) => {
    if (!cursorLight) {
        return;
    }

    cursorLight.style.left = `${event.clientX}px`;
    cursorLight.style.top = `${event.clientY}px`;
});


/* ================================
   TRANSLATIONS
================================ */

const translations = {

    ru: {
        eyebrow: "CREATIVE DEVELOPER · DESIGNER",

        title: `
            <span>Привет,</span>
            <span>я <i>Ксения.</i></span>
        `,

        description: `
            Создаю цифровые вещи,<br>
            которые хочется запомнить.
        `,

        scroll: "SCROLL TO EXPLORE",

        navWorks: "Работы",
        navAbout: "Обо мне",
        navContact: "Контакты",

        worksLabel: "ИЗБРАННЫЕ РАБОТЫ",

        project01Category: "WEB · ДИЗАЙН",
        project02Category: "РАЗРАБОТКА",
        project03Category: "КРЕАТИВ",

        aboutLabel: "ОБО МНЕ",

        aboutTitle: `
            Создаю сайты,<br>
            которые <i>чувствуются.</i>
        `,

        aboutText: `
            Я занимаюсь веб-разработкой и дизайном,
            люблю визуальные истории и хочу создавать
            цифровые проекты, в которых есть характер.
        `,

        contactLabel: "КОНТАКТЫ",

        contactTitle: `
            Давайте создадим<br>
            что-нибудь <i>интересное.</i>
        `
    },


    en: {
        eyebrow: "CREATIVE DEVELOPER · DESIGNER",

        title: `
            <span>Hello,</span>
            <span>I'm <i>Ksenia.</i></span>
        `,

        description: `
            I create digital things<br>
            worth remembering.
        `,

        scroll: "SCROLL TO EXPLORE",

        navWorks: "Works",
        navAbout: "About",
        navContact: "Contact",

        worksLabel: "SELECTED WORKS",

        project01Category: "WEB · DESIGN",
        project02Category: "DEVELOPMENT",
        project03Category: "CREATIVE",

        aboutLabel: "ABOUT ME",

        aboutTitle: `
            I create websites<br>
            that <i>feel.</i>
        `,

        aboutText: `
            I work with web development and design.
            I love visual storytelling and creating
            digital projects with character.
        `,

        contactLabel: "CONTACT",

        contactTitle: `
            Let's create<br>
            something <i>interesting.</i>
        `
    }

};


/* ================================
   APPLY LANGUAGE
================================ */

function applyLanguage(language) {

    const data = translations[language];

    if (!data) {
        return;
    }


    localStorage.setItem("language", language);


    /* Text content */

    const textElements =
        document.querySelectorAll("[data-i18n]");

    textElements.forEach((element) => {

        const key =
            element.getAttribute("data-i18n");

        if (data[key] !== undefined) {
            element.textContent = data[key];
        }

    });


    /* HTML content */

    const htmlElements =
        document.querySelectorAll("[data-i18n-html]");

    htmlElements.forEach((element) => {

        const key =
            element.getAttribute("data-i18n-html");

        if (data[key] !== undefined) {
            element.innerHTML = data[key];
        }

    });


    /* Language buttons */

    const languageButtons =
        document.querySelectorAll(".language");

    languageButtons.forEach((button) => {

        const buttonLanguage =
            button.getAttribute("data-language");

        if (buttonLanguage === language) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

    });


    document.documentElement.lang = language;
}


/* ================================
   LANGUAGE BUTTONS
================================ */

const languageButtons =
    document.querySelectorAll(".language");

languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const language =
            button.getAttribute("data-language");

        if (!language) {
            return;
        }

        applyLanguage(language);

    });

});


/* ================================
   INITIAL LANGUAGE
================================ */

const savedLanguage =
    localStorage.getItem("language");

const initialLanguage =
    savedLanguage || "ru";

applyLanguage(initialLanguage);


/* ================================
   NAVIGATION
================================ */

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (!targetId) {
            return;
        }

        if (!targetId.startsWith("#")) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ================================
   PROJECT HOVER
================================ */

const projects =
    document.querySelectorAll(".project");

projects.forEach((project) => {

    project.addEventListener("mouseenter", () => {
        project.classList.add("is-hovered");
    });

    project.addEventListener("mouseleave", () => {
        project.classList.remove("is-hovered");
    });

});
/* ================================
   HERO PARALLAX
================================ */

const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (event) => {

    if (!hero || window.innerWidth <= 700) {
        return;
    }

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    hero.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* ================================
   PROJECT REVEAL
================================ */

const projectElements =
    document.querySelectorAll(".project");

const revealProjects = () => {

    projectElements.forEach((project) => {

        const rect =
            project.getBoundingClientRect();

        const isVisible =
            rect.top < window.innerHeight * 0.85;

        if (isVisible) {
            project.classList.add("visible");
        }

    });

};

window.addEventListener(
    "scroll",
    revealProjects
);

revealProjects();