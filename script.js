/* ENTRANCE LOADER */
const loader = document.getElementById("loader");
const main = document.getElementById("main");
if (loader && main) {
    const hasSeenLoader = sessionStorage.getItem("portfolio-loader-seen");
    if (hasSeenLoader) {
        loader.style.display = "none";
        main.classList.add("show");
    } else {
        sessionStorage.setItem("portfolio-loader-seen", "true");
        setTimeout(() => { loader.classList.add("hide"); main.classList.add("show"); }, 1600);
        setTimeout(() => { loader.style.display = "none"; }, 2500);
    }
} else if (main) main.classList.add("show");

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
    languageButtons.forEach((button) => button.classList.toggle("active", button.dataset.lang === language));
}
languageButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));

/* SMOOTH NAVIGATION */
document.querySelectorAll('.navigation a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* PROJECT REVEAL */
const projects = document.querySelectorAll(".project");
function revealProjects() {
    projects.forEach((project) => {
        if (project.getBoundingClientRect().top < window.innerHeight * 0.85) project.classList.add("visible");
    });
}
window.addEventListener("scroll", revealProjects, { passive: true });
revealProjects();

/* ABOUT EDITORIAL */
const aboutStyle = document.createElement("style");
aboutStyle.textContent = `
.about{min-height:100svh!important;padding:120px 7vw 110px!important;display:grid!important;grid-template-columns:.55fr 1.55fr .9fr!important;gap:5vw!important;align-items:center!important;background:#efede8!important;color:#241e1e!important;position:relative!important;overflow:hidden!important}
.about>div:first-child{align-self:start!important;padding-top:8px!important}.about>div:nth-child(2){align-self:center!important;min-width:0!important}.about-label{display:block!important;font:500 9px/1 Arial,sans-serif!important;letter-spacing:3px!important;color:rgba(36,30,30,.45)!important;white-space:nowrap!important}.about h2{margin:0!important;font-family:Georgia,'Times New Roman',serif!important;font-size:clamp(62px,7vw,112px)!important;font-weight:400!important;line-height:.88!important;letter-spacing:-5px!important;color:#241e1e!important;white-space:nowrap!important}.about h2 span,.about h2 i{display:block!important;margin:0!important;font-family:Georgia,'Times New Roman',serif!important;font-weight:400!important;font-style:normal!important}.about h2 i{margin-left:4.2vw!important}.about-text{max-width:470px!important;margin:38px 0 0!important;font:400 14px/1.75 Arial,Helvetica,sans-serif!important;color:rgba(36,30,30,.62)!important}.about-facts{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:18px!important;max-width:690px!important;margin:34px 0 0!important}.about-facts div{padding-top:13px!important;border-top:1px solid rgba(36,30,30,.18)!important}.about-facts span{display:block!important;margin-bottom:8px!important;font:500 7px/1 Arial,sans-serif!important;letter-spacing:1.8px!important;color:rgba(36,30,30,.43)!important}.about-facts strong{display:block!important;font:500 8px/1.7 Arial,sans-serif!important;letter-spacing:1px!important;color:rgba(36,30,30,.68)!important}.about>div:nth-child(2)::after{display:none!important}.about::after{content:"YOUR PORTRAIT\\A\\A4 : 5"!important;white-space:pre!important;display:flex!important;align-items:flex-end!important;justify-content:flex-start!important;align-self:center!important;justify-self:end!important;width:min(100%,360px)!important;aspect-ratio:4/5!important;max-height:560px!important;padding:0 0 28px 26px!important;box-sizing:border-box!important;border:1px solid rgba(36,30,30,.14)!important;border-radius:3px!important;background:linear-gradient(145deg,#ddd6ce 0%,#b9afa6 47%,#403635 100%)!important;box-shadow:16px 16px 0 rgba(86,65,60,.08),0 25px 55px rgba(40,30,25,.11)!important;color:rgba(255,255,255,.78)!important;font:9px/1.7 Arial,sans-serif!important;letter-spacing:3px!important;position:relative!important;z-index:1!important}.about::before{content:"KSENIA  —  VISUAL DESIGNER  —  CREATIVE DIRECTION  —  EDITORIAL  —  DIGITAL  —  KSENIA  —  VISUAL DESIGNER  —"!important;position:absolute!important;left:0!important;right:0!important;bottom:17px!important;white-space:nowrap!important;overflow:hidden!important;font:8px/1 Arial,sans-serif!important;letter-spacing:2px!important;color:rgba(36,30,30,.38)!important;border-top:1px solid rgba(36,30,30,.13)!important;padding-top:12px!important}
@media(max-width:850px){.about{min-height:auto!important;padding:90px 24px 105px!important;grid-template-columns:1fr!important;gap:34px!important}.about>div:first-child{padding-top:0!important}.about h2{font-size:clamp(54px,15vw,88px)!important;letter-spacing:-4px!important;white-space:normal!important}.about h2 i{margin-left:12vw!important}.about-text{max-width:100%!important;margin-top:28px!important}.about-facts{grid-template-columns:1fr!important;gap:14px!important;margin-top:28px!important}.about::after{width:min(78vw,330px)!important;justify-self:center!important;max-height:none!important}}
`;
document.head.appendChild(aboutStyle);

/* HOME — minimal editorial cover */
const homeStyle = document.createElement("style");
homeStyle.textContent = `
#main{min-height:100svh!important;height:100svh!important;padding:28px 52px 32px!important;background:#090909!important;color:#f4f0e9!important;overflow:hidden!important;position:relative!important}
#main>.header,#main>.hero{position:relative!important;z-index:3!important}.header{position:relative!important;z-index:20!important}.logo{font-size:10px!important;letter-spacing:3px!important}.navigation{gap:30px!important}.navigation a{font-size:9px!important;letter-spacing:1.8px!important}
#main:after{content:"SAMARA / RUSSIA     2026"!important;position:absolute!important;right:52px!important;bottom:29px!important;font:8px Arial,sans-serif!important;letter-spacing:2px!important;color:rgba(255,255,255,.3)!important;z-index:3!important}
#main:before{content:""!important;position:absolute!important;inset:0!important;z-index:0!important;pointer-events:none!important;background:radial-gradient(circle at 67% 53%,rgba(94,44,42,.22),transparent 27%),radial-gradient(circle at 15% 80%,rgba(255,255,255,.035),transparent 26%),linear-gradient(112deg,#070707 0%,#0d0d0d 48%,#080808 100%)!important}
#main .hero{height:calc(100svh - 82px)!important;width:100%!important;max-width:1240px!important;margin:0 auto!important;display:flex!important;flex-direction:column!important;justify-content:center!important;position:relative!important;z-index:2!important}
.hero .eyebrow,.hero-language,.hero-scroll-mark,.availability,.footer{display:none!important}
.hero h1{margin:-25px 0 0!important;display:block!important;font-family:Georgia,'Times New Roman',serif!important;font-weight:400!important;font-size:clamp(62px,7.5vw,116px)!important;line-height:.86!important;letter-spacing:-4px!important;max-width:1000px!important;color:#f4f0e9!important}
.hero h1 span{display:block!important;margin:0!important;font-family:Georgia,'Times New Roman',serif!important;font-style:normal!important;font-weight:400!important;letter-spacing:-4px!important}
.hero h1 span:nth-child(1){font-size:1em!important}.hero h1 span:nth-child(2){font-size:.86em!important;margin-left:7vw!important}.hero h1 span:nth-child(3){font:500 9px/1.2 Arial,Helvetica,sans-serif!important;letter-spacing:3px!important;margin:32px 0 0 7.2vw!important;color:rgba(255,255,255,.47)!important}
.description{max-width:360px!important;margin:30px 0 0 7.2vw!important;font:400 12px/1.7 Arial,Helvetica,sans-serif!important;color:rgba(255,255,255,.48)!important}
.hero:before{content:"53.1956° N, 50.1001° E"!important;position:absolute!important;left:0!important;bottom:0!important;font:8px Arial,sans-serif!important;letter-spacing:2px!important;color:rgba(255,255,255,.25)!important}
.hero:after{content:""!important;position:absolute!important;left:50%!important;top:48%!important;width:1px!important;height:135px!important;background:linear-gradient(transparent,rgba(124,47,47,.8),transparent)!important;opacity:.55!important}
.manifesto{display:none!important}
@media(max-width:850px){#main{padding:22px 22px 26px!important}.navigation{gap:16px!important}.navigation a{font-size:8px!important}.hero{height:calc(100svh - 70px)!important}.hero h1{font-size:clamp(50px,13vw,82px)!important;letter-spacing:-3px!important}.hero h1 span{letter-spacing:-3px!important}.hero h1 span:nth-child(2){font-size:.86em!important;margin-left:8vw!important}.hero h1 span:nth-child(3){font-size:7px!important;margin:25px 0 0 8vw!important}.description{margin:24px 0 0 8vw!important;max-width:280px!important;font-size:10px!important}.hero:before{font-size:7px!important}#main:after{right:22px!important;bottom:26px!important;font-size:7px!important}.hero:after{left:50%!important;height:100px!important}}
`;
document.head.appendChild(homeStyle);

/* HOME COPY — always editorial/English, so the visual identity stays consistent in RU mode too. */
const homeTitle = document.querySelector(".hero h1");
if (homeTitle) {
    homeTitle.innerHTML = `<span data-ru="VISUAL STORIES" data-en="VISUAL STORIES">VISUAL STORIES</span><span data-ru="WITH A POINT OF VIEW." data-en="WITH A POINT OF VIEW.">WITH A POINT OF VIEW.</span><span data-ru="DIGITAL · EDITORIAL · ART DIRECTION" data-en="DIGITAL · EDITORIAL · ART DIRECTION">DIGITAL · EDITORIAL · ART DIRECTION</span>`;
}
const homeDescription = document.querySelector(".hero .description");
if (homeDescription) {
    homeDescription.setAttribute("data-ru", "Designing images, identities and digital experiences where ideas become visual language.");
    homeDescription.setAttribute("data-en", "Designing images, identities and digital experiences where ideas become visual language.");
}

/* Clean navigation order */
const nav = document.querySelector(".navigation");
if (nav) {
    const links = [...nav.querySelectorAll("a")];
    ["#about","#works","#contact"].forEach((href) => {
        const link = links.find((item) => item.getAttribute("href") === href);
        if (link) nav.appendChild(link);
    });
}
applyLanguage(localStorage.getItem("language") || "ru");
