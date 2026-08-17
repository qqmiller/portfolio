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

/* ABOUT EDITORIAL FIX */
const aboutStyle = document.createElement("style");
aboutStyle.textContent = `
.about {
  min-height: 100svh !important;
  padding: 120px 7vw 110px !important;
  display: grid !important;
  grid-template-columns: 0.55fr 1.55fr 0.9fr !important;
  gap: 5vw !important;
  align-items: center !important;
  background: #efede8 !important;
  color: #241e1e !important;
  position: relative !important;
  overflow: hidden !important;
}
.about > div:first-child { align-self: start !important; padding-top: 8px !important; }
.about > div:nth-child(2) { align-self: center !important; min-width: 0 !important; }
.about-label {
  display: block !important;
  font: 500 9px/1 Arial, sans-serif !important;
  letter-spacing: 3px !important;
  color: rgba(36,30,30,.45) !important;
  white-space: nowrap !important;
}
.about h2 {
  margin: 0 !important;
  font-family: Georgia, 'Times New Roman', serif !important;
  font-size: clamp(62px, 7vw, 112px) !important;
  font-weight: 400 !important;
  line-height: .88 !important;
  letter-spacing: -5px !important;
  color: #241e1e !important;
  white-space: nowrap !important;
}
.about h2 span,
.about h2 i {
  display: block !important;
  margin: 0 !important;
  font-family: Georgia, 'Times New Roman', serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}
.about h2 span { margin-left: 0 !important; }
.about h2 i { margin-left: 4.2vw !important; color: #241e1e !important; }
.about-text {
  max-width: 470px !important;
  margin: 38px 0 0 !important;
  font: 400 14px/1.75 Arial, Helvetica, sans-serif !important;
  color: rgba(36,30,30,.62) !important;
}
.about-facts {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  gap: 18px !important;
  max-width: 690px !important;
  margin: 34px 0 0 !important;
}
.about-facts div {
  padding-top: 13px !important;
  border-top: 1px solid rgba(36,30,30,.18) !important;
}
.about-facts span {
  display: block !important;
  margin-bottom: 8px !important;
  font: 500 7px/1 Arial, sans-serif !important;
  letter-spacing: 1.8px !important;
  color: rgba(36,30,30,.43) !important;
}
.about-facts strong {
  display: block !important;
  font: 500 8px/1.7 Arial, sans-serif !important;
  letter-spacing: 1px !important;
  color: rgba(36,30,30,.68) !important;
}
.about > div:nth-child(2)::after { display: none !important; }
.about::after {
  content: "YOUR PORTRAIT\\A\\A4 : 5" !important;
  white-space: pre !important;
  display: flex !important;
  align-items: flex-end !important;
  justify-content: flex-start !important;
  align-self: center !important;
  justify-self: end !important;
  width: min(100%, 360px) !important;
  aspect-ratio: 4 / 5 !important;
  max-height: 560px !important;
  padding: 0 0 28px 26px !important;
  box-sizing: border-box !important;
  border: 1px solid rgba(36,30,30,.14) !important;
  border-radius: 3px !important;
  background: linear-gradient(145deg,#ddd6ce 0%,#b9afa6 47%,#403635 100%) !important;
  box-shadow: 16px 16px 0 rgba(86,65,60,.08), 0 25px 55px rgba(40,30,25,.11) !important;
  color: rgba(255,255,255,.78) !important;
  font: 9px/1.7 Arial, sans-serif !important;
  letter-spacing: 3px !important;
  position: relative !important;
  z-index: 1 !important;
}
.about::before {
  content: "KSENIA  —  VISUAL DESIGNER  —  CREATIVE DIRECTION  —  EDITORIAL  —  DIGITAL  —  KSENIA  —  VISUAL DESIGNER  —" !important;
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 17px !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  font: 8px/1 Arial, sans-serif !important;
  letter-spacing: 2px !important;
  color: rgba(36,30,30,.38) !important;
  border-top: 1px solid rgba(36,30,30,.13) !important;
  padding-top: 12px !important;
}
@media (max-width: 850px) {
  .about {
    min-height: auto !important;
    padding: 90px 24px 105px !important;
    grid-template-columns: 1fr !important;
    gap: 34px !important;
  }
  .about > div:first-child { padding-top: 0 !important; }
  .about h2 { font-size: clamp(54px, 15vw, 88px) !important; letter-spacing: -4px !important; white-space: normal !important; }
  .about h2 i { margin-left: 12vw !important; }
  .about-text { max-width: 100% !important; margin-top: 28px !important; }
  .about-facts { grid-template-columns: 1fr !important; gap: 14px !important; margin-top: 28px !important; }
  .about::after { width: min(78vw, 330px) !important; justify-self: center !important; max-height: none !important; }
}
`;
document.head.appendChild(aboutStyle);