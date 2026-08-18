/* ENTRANCE LOADER */
const loader = document.getElementById("loader");
const main = document.getElementById("main");
if (loader && main) {
    const hasSeenLoader = sessionStorage.getItem("portfolio-loader-seen");
    if (hasSeenLoader) { loader.style.display = "none"; main.classList.add("show"); }
    else { sessionStorage.setItem("portfolio-loader-seen", "true"); setTimeout(() => { loader.classList.add("hide"); main.classList.add("show"); }, 1600); setTimeout(() => { loader.style.display = "none"; }, 2500); }
} else if (main) main.classList.add("show");

/* CURSOR LIGHT */
const cursorLight = document.querySelector(".cursor-light");
document.addEventListener("mousemove", (event) => { if (cursorLight) { cursorLight.style.left = `${event.clientX}px`; cursorLight.style.top = `${event.clientY}px`; } });

/* LANGUAGE: one source of truth, no duplicate hero switcher */
const languageButtons = document.querySelectorAll(".language");
const translatableElements = document.querySelectorAll("[data-ru][data-en]");
function applyLanguage(language) {
    if (!['ru','en'].includes(language)) language = 'ru';
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    translatableElements.forEach((element) => {
        const value = element.getAttribute(`data-${language}`);
        if (value !== null) element.innerHTML = value;
    });
    languageButtons.forEach((button) => button.classList.toggle('active', button.dataset.lang === language));
}
languageButtons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));

/* SMOOTH NAVIGATION */
document.querySelectorAll('.navigation a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));

/* PROJECT REVEAL */
const projects = document.querySelectorAll('.project');
function revealProjects() { projects.forEach((project) => { if (project.getBoundingClientRect().top < window.innerHeight * .85) project.classList.add('visible'); }); }
window.addEventListener('scroll', revealProjects, { passive: true });
revealProjects();

/* ABOUT: minimal information layout */
const aboutStyle = document.createElement('style');
aboutStyle.textContent = `
.about{min-height:100svh!important;padding:110px 7vw 95px!important;display:grid!important;grid-template-columns:.48fr 1.35fr .8fr!important;gap:6vw!important;align-items:center!important;background:#efede8!important;color:#241e1e!important;position:relative!important;overflow:hidden!important}
.about>div:first-child{align-self:start!important;padding-top:7px!important}.about>div:nth-child(2){align-self:center!important;min-width:0!important}.about-label{display:block!important;font:500 8px/1 Arial,sans-serif!important;letter-spacing:2.5px!important;color:rgba(36,30,30,.44)!important;white-space:nowrap!important}.about h2{margin:0!important;font:400 clamp(54px,6vw,92px)/.9 Georgia,'Times New Roman',serif!important;letter-spacing:-4px!important;color:#241e1e!important}.about h2 span{display:block!important}.about-text{max-width:600px!important;margin:30px 0 0!important;font:400 13px/1.8 Arial,Helvetica,sans-serif!important;color:rgba(36,30,30,.63)!important}.about-facts{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:18px!important;max-width:680px!important;margin:30px 0 0!important}.about-facts div{padding-top:11px!important;border-top:1px solid rgba(36,30,30,.16)!important}.about-facts span{display:block!important;margin-bottom:7px!important;font:500 7px/1 Arial,sans-serif!important;letter-spacing:1.6px!important;color:rgba(36,30,30,.4)!important}.about-facts strong{display:block!important;font:500 8px/1.65 Arial,sans-serif!important;letter-spacing:.8px!important;color:rgba(36,30,30,.66)!important}.about-portrait{width:min(100%,310px)!important;aspect-ratio:4/5!important;justify-self:end!important;position:relative!important;overflow:hidden!important;background:#d9d4ce!important}.about-portrait img{width:100%!important;height:100%!important;object-fit:cover!important;display:block!important}.about-portrait.photo-placeholder{background:linear-gradient(145deg,#ded8d1,#b7aea5 58%,#4a4140)!important}.photo-placeholder-label{position:absolute!important;left:18px!important;bottom:18px!important;color:rgba(255,255,255,.72)!important;font:8px Arial,sans-serif!important;letter-spacing:2px!important}.about::before,.about::after{display:none!important}
@media(max-width:850px){.about{min-height:auto!important;padding:88px 24px 90px!important;grid-template-columns:1fr!important;gap:30px!important}.about>div:first-child{padding-top:0!important}.about h2{font-size:clamp(52px,14vw,82px)!important;letter-spacing:-3px!important}.about-text{margin-top:24px!important;font-size:12px!important;line-height:1.75!important}.about-facts{grid-template-columns:1fr!important;gap:12px!important;margin-top:26px!important}.about-portrait{width:min(78vw,320px)!important;justify-self:center!important;order:3!important}}
`;
document.head.appendChild(aboutStyle);

/* HOME — minimal editorial cover */
const homeStyle = document.createElement('style');
homeStyle.textContent = `
#main{min-height:100svh!important;height:100svh!important;padding:28px 52px 32px!important;background:#090909!important;color:#f4f0e9!important;overflow:hidden!important;position:relative!important}#main>.header,#main>.hero{position:relative!important;z-index:3!important}.header{position:relative!important;z-index:20!important}.logo{font-size:10px!important;letter-spacing:3px!important}.navigation{gap:30px!important}.navigation a{font-size:9px!important;letter-spacing:1.8px!important}#main:after{content:'SAMARA / RUSSIA     2026'!important;position:absolute!important;right:52px!important;bottom:29px!important;font:8px Arial,sans-serif!important;letter-spacing:2px!important;color:rgba(255,255,255,.3)!important;z-index:3!important}#main:before{content:''!important;position:absolute!important;inset:0!important;z-index:0!important;pointer-events:none!important;background:radial-gradient(circle at 67% 53%,rgba(94,44,42,.22),transparent 27%),linear-gradient(112deg,#070707 0%,#0d0d0d 48%,#080808 100%)!important}#main .hero{height:calc(100svh - 82px)!important;width:100%!important;max-width:1240px!important;margin:0 auto!important;display:flex!important;flex-direction:column!important;justify-content:center!important;position:relative!important;z-index:2!important}.hero .eyebrow,.hero-language,.hero-scroll-mark,.availability,.footer{display:none!important}.hero h1{margin:-25px 0 0!important;font:400 clamp(62px,7.5vw,116px)/.86 Georgia,'Times New Roman',serif!important;letter-spacing:-4px!important;max-width:1000px!important;color:#f4f0e9!important}.hero h1 span{display:block!important;margin:0!important;font-family:Georgia,'Times New Roman',serif!important;font-style:normal!important;font-weight:400!important;letter-spacing:-4px!important}.hero h1 span:nth-child(2){font-size:.86em!important;margin-left:7vw!important}.hero h1 span:nth-child(3){font:500 9px/1.2 Arial,Helvetica,sans-serif!important;letter-spacing:3px!important;margin:32px 0 0 7.2vw!important;color:rgba(255,255,255,.47)!important}.description{max-width:360px!important;margin:30px 0 0 7.2vw!important;font:400 12px/1.7 Arial,Helvetica,sans-serif!important;color:rgba(255,255,255,.48)!important}.hero:before{content:'53.1956° N, 50.1001° E'!important;position:absolute!important;left:0!important;bottom:0!important;font:8px Arial,sans-serif!important;letter-spacing:2px!important;color:rgba(255,255,255,.25)!important}.hero:after{content:''!important;position:absolute!important;left:50%!important;top:48%!important;width:1px!important;height:135px!important;background:linear-gradient(transparent,rgba(124,47,47,.8),transparent)!important;opacity:.55!important}.manifesto{display:none!important}@media(max-width:850px){#main{padding:22px 22px 26px!important}.navigation{gap:16px!important}.navigation a{font-size:8px!important}.hero{height:calc(100svh - 70px)!important}.hero h1{font-size:clamp(50px,13vw,82px)!important;letter-spacing:-3px!important}.hero h1 span{letter-spacing:-3px!important}.hero h1 span:nth-child(2){font-size:.86em!important;margin-left:8vw!important}.hero h1 span:nth-child(3){font-size:7px!important;margin:25px 0 0 8vw!important}.description{margin:24px 0 0 8vw!important;max-width:280px!important;font-size:10px!important}.hero:before{font-size:7px!important}#main:after{right:22px!important;bottom:26px!important;font-size:7px!important}.hero:after{left:50%!important;height:100px!important}}
`;
document.head.appendChild(homeStyle);

/* Keep the visual hero in English, while every informational section follows RU/EN. */
applyLanguage(localStorage.getItem('language') || 'ru');
