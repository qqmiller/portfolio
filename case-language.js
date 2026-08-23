(() => {
  const isClassic = document.title.includes('CLASSIC');
  const isGrunge = document.title.includes('GRUNGE');
  if (!isClassic && !isGrunge) return;

  const copy = {
    ru: {
      grunge: {
        topBack: '← ВСЕ РАБОТЫ', page: '01 / 03', eyebrow: 'СЫРОЙ · РЕДАКЦИОННЫЙ · ЭКСПЕРИМЕНТАЛЬНЫЙ', title: 'ГРАНЖ', intro: 'Жёсткая типографика, фактура, шум и визуальный хаос. Направление для проектов, которым нужны характер, напряжение и выразительная визуальная подача.',
        studies: 'Избранные кейсы', meta: '07 ПРОЕКТОВ · ЛИСТАЙТЕ НИЖЕ',
        cases: [
          ['ВЕБ · ЛЕНДИНГ', 'НОИР ФЕСТИВАЛЬ', 'Одностраничный сайт музыкального фестиваля. Полноценный desktop и mobile опыт с лайнапом, информацией о событии и призывом к действию.'],
          ['ВЕБ · Э-КОММЕРС', 'ИНТЕРНЕТ-МАГАЗИН', 'Интернет-магазин с выразительной визуальной системой, каталогом, карточками товаров и понятным пользовательским путём от выбора до покупки.'],
          ['ВЕБ · Э-КОММЕРС', 'ИНТЕРНЕТ-МАГАЗИН', 'Каталог или интернет-магазин с товарами, категориями и понятным пользовательским путём от выбора до заказа.'],
          ['UI/UX · ВЕБ-ПРИЛОЖЕНИЕ', 'WEB APP / UI/UX', 'Сложные веб-интерфейсы, личные кабинеты и панели управления: логика, сценарии пользователя и визуальная система.'],
          ['ВЕБ · РЕДИЗАЙН', 'РЕДИЗАЙН / WEB', 'Формат «было / стало»: анализ проблем существующего сайта, новая структура и более выразительное визуальное решение.'],
          ['UI · СИСТЕМА', 'UI SYSTEM', 'Компоненты, типографика, цвета и состояния интерфейса, собранные в единую систему для цифрового продукта.'],
          ['ВЕБ · РЕДИЗАЙН', 'EDITORIAL / WEB', 'Концептуальный многостраничный сайт с акцентом на типографику и визуальную подачу.']
        ],
        ctaMeta: 'НРАВИТСЯ ЭТОТ СТИЛЬ?', cta: 'Обсудим ваш проект.', contact: 'КОНТАКТЫ →', back: '← НАЗАД К РАБОТАМ', next: 'СЛЕДУЮЩИЙ СТИЛЬ', nextName: 'КЛАССИКА →', footer: '© 2026 КСЕНИЯ · ВИЗУАЛЬНЫЙ ДИЗАЙН'
      },
      classic: {
        topBack: '← ВСЕ РАБОТЫ', page: '02 / 03', eyebrow: 'ЭЛЕГАНТНЫЙ · РЕДАКЦИОННЫЙ · ВНЕ ВРЕМЕНИ', title: 'КЛАССИКА', intro: 'Спокойная композиция, выразительная типографика и выверенная визуальная иерархия. Направление для брендов и digital-продуктов, которым важны элегантность и ясность.',
        studies: 'Избранные кейсы', meta: '07 ПРОЕКТОВ · ЛИСТАЙТЕ НИЖЕ',
        cases: [
          ['ВЕБ · ЛЕНДИНГ', 'VÉRONA HOUSE', 'Лендинг бутикового отеля с классической эстетикой, редакционной типографикой и акцентом на атмосферу пространства.'],
          ['ВЕБ · Э-КОММЕРС', 'ИНТЕРНЕТ-МАГАЗИН', 'Интернет-магазин в классической эстетике: каталог, карточки товаров и понятный пользовательский путь от выбора до покупки.'],
          ['ВЕБ · Э-КОММЕРС', 'ИНТЕРНЕТ-МАГАЗИН', 'Каталог или интернет-магазин с понятной системой категорий, карточками товаров и удобным пользовательским сценарием.'],
          ['UI/UX · ВЕБ-ПРИЛОЖЕНИЕ', 'WEB APP / UI/UX', 'Интерфейсы веб-сервисов, личных кабинетов и dashboard-систем. Работа со сценариями, информационной архитектурой и состояниями интерфейса.'],
          ['ВЕБ · РЕДИЗАЙН', 'РЕДИЗАЙН / WEB', 'Формат «было / стало»: анализ существующего сайта, устранение проблем структуры и визуала, создание более понятного решения.'],
          ['UI · СИСТЕМА', 'UI SYSTEM', 'Система компонентов, типографики, цветов и состояний, которая помогает сохранять единый стиль цифрового продукта.'],
          ['ВЕБ · РЕДИЗАЙН', 'EDITORIAL / WEB', 'Концептуальный сайт с акцентом на классическую типографику, композицию и визуальную подачу.']
        ],
        ctaMeta: 'НРАВИТСЯ ЭТОТ СТИЛЬ?', cta: 'Обсудим ваш проект.', contact: 'КОНТАКТЫ →', back: '← НАЗАД К РАБОТАМ', next: 'СЛЕДУЮЩИЙ СТИЛЬ', nextName: 'АРТИСТИК →', footer: '© 2026 КСЕНИЯ · ВИЗУАЛЬНЫЙ ДИЗАЙН'
      }
    },
    en: {
      grunge: {
        topBack: '← ALL WORKS', page: '01 / 03', eyebrow: 'RAW · EDITORIAL · EXPERIMENTAL', title: 'GRUNGE', intro: 'Жёсткая типографика, фактура, шум и визуальный хаос. Направление для проектов, которым нужен характер, напряжение и выразительная визуальная подача.', studies: 'Selected case studies', meta: '07 PROJECTS · SCROLL TO EXPLORE',
        cases: [
          ['WEB · LANDING PAGE', 'NOIR FESTIVAL', 'Одностраничный сайт музыкального фестиваля. Полноценный desktop и mobile опыт с лайнапом, информацией о событии и CTA.'],
          ['WEB · E-COMMERCE', 'E-COMMERCE / CATALOG', 'Интернет-магазин с выразительной визуальной системой, каталогом, карточками товаров и понятным пользовательским путём от выбора до покупки.'],
          ['WEB · E-COMMERCE', 'E-COMMERCE / CATALOG', 'Каталог или интернет-магазин с товарами, категориями и понятным пользовательским путём от выбора до заказа.'],
          ['UI/UX · WEB APP', 'WEB APP UI/UX', 'Сложные веб-интерфейсы, личные кабинеты и dashboard: логика, сценарии пользователя и визуальная система.'],
          ['WEB · REDESIGN', 'WEBSITE REDESIGN', 'Кейс «было / стало»: анализ проблем существующего сайта, новая структура и более выразительное визуальное решение.'],
          ['UI · SYSTEM', 'DESIGN SYSTEM / UI KIT', 'Компоненты, типографика, цвета и состояния интерфейса, собранные в единую систему для цифрового продукта.'],
          ['WEB · REDESIGN', 'EDITORIAL WEBSITE', 'Концептуальный многостраничный сайт с акцентом на типографику и визуальную подачу.']
        ], ctaMeta: 'INTERESTED IN THIS STYLE?', cta: 'Обсудим ваш проект.', contact: 'CONTACT →', back: '← BACK TO WORKS', next: 'NEXT STYLE', nextName: 'CLASSIC →', footer: '© 2026 KSENIA · VISUAL DESIGN'
      },
      classic: {
        topBack: '← ALL WORKS', page: '02 / 03', eyebrow: 'ELEGANT · EDITORIAL · TIMELESS', title: 'CLASSIC', intro: 'Спокойная композиция, выразительная типографика и выверенная визуальная иерархия. Направление для брендов и digital-продуктов, которым важны элегантность и ясность.', studies: 'Selected case studies', meta: '07 PROJECTS · SCROLL TO EXPLORE',
        cases: [
          ['WEB · LANDING PAGE', 'VÉRONA HOUSE', 'Лендинг бутикового отеля с классической эстетикой, редакционной типографикой и акцентом на атмосферу пространства.'],
          ['WEB · E-COMMERCE', 'E-COMMERCE / CATALOG', 'Интернет-магазин в классической эстетике: каталог, карточки товаров и понятный пользовательский путь от выбора до покупки.'],
          ['WEB · E-COMMERCE', 'E-COMMERCE / CATALOG', 'Каталог или интернет-магазин с понятной системой категорий, карточками товаров и удобным пользовательским сценарием.'],
          ['UI/UX · WEB APP', 'WEB APP UI/UX', 'Интерфейсы веб-сервисов, личных кабинетов и dashboard-систем. Работа со сценариями, информационной архитектурой и состояниями интерфейса.'],
          ['WEB · REDESIGN', 'WEBSITE REDESIGN', 'Формат «было / стало»: анализ существующего сайта, устранение проблем структуры и визуала, создание более понятного решения.'],
          ['UI · SYSTEM', 'DESIGN SYSTEM / UI KIT', 'Система компонентов, типографики, цветов и состояний, которая помогает сохранять единый стиль цифрового продукта.'],
          ['WEB · REDESIGN', 'EDITORIAL WEBSITE', 'Концептуальный сайт с акцентом на классическую типографику, композицию и визуальную подачу.']
        ], ctaMeta: 'INTERESTED IN THIS STYLE?', cta: 'Обсудим ваш проект.', contact: 'CONTACT →', back: '← BACK TO WORKS', next: 'NEXT STYLE', nextName: 'ARTISTIC →', footer: '© 2026 KSENIA · VISUAL DESIGN'
      }
    }
  };

  const key = isClassic ? 'classic' : 'grunge';
  const getNodes = () => ({
    top: document.querySelector('.top'),
    eyebrow: document.querySelector('.hero .eyebrow'),
    title: document.querySelector('.hero h1'),
    intro: document.querySelector('.hero .intro'),
    studies: document.querySelector('.case-head h2'),
    meta: document.querySelector('.case-head .meta'),
    cases: [...document.querySelectorAll('.case')],
    ctaMeta: document.querySelector('.case-cta .meta'),
    cta: document.querySelector('.case-cta strong'),
    contact: document.querySelector('.case-cta > a'),
    next: document.querySelector('.next'),
    footer: document.querySelector('.footer')
  });

  const addSwitcher = () => {
    if (document.querySelector('.case-language')) return;
    const top = document.querySelector('.top');
    if (!top) return;
    const switcher = document.createElement('div');
    switcher.className = 'case-language';
    switcher.innerHTML = '<button data-lang="ru">RU</button><span>/</span><button data-lang="en">EN</button>';
    top.appendChild(switcher);
    const style = document.createElement('style');
    style.textContent = '.case-language{display:flex;gap:7px;align-items:center;margin-left:auto;margin-right:22px}.case-language button{border:0;background:none;color:inherit;font:inherit;letter-spacing:2px;opacity:.45;cursor:pointer;padding:0}.case-language button.active{opacity:1}.case-language span{opacity:.25}.top{gap:18px}@media(max-width:600px){.case-language{margin-right:8px}}';
    document.head.appendChild(style);
    switcher.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => apply(btn.dataset.lang)));
  };

  function apply(language) {
    language = language === 'en' ? 'en' : 'ru';
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    const d = copy[language][key];
    const n = getNodes();
    if (n.top) { const a = n.top.querySelector('a'); const spans = n.top.querySelectorAll(':scope > span'); if(a) a.textContent=d.topBack; if(spans[0]) spans[0].textContent=d.page; }
    if(n.eyebrow) n.eyebrow.textContent=d.eyebrow;
    if(n.title) { const i=n.title.querySelector('i'); n.title.firstChild.textContent=d.title; if(i) i.remove(); }
    if(n.intro) n.intro.textContent=d.intro;
    if(n.studies) n.studies.textContent=d.studies;
    if(n.meta) n.meta.textContent=d.meta;
    n.cases.forEach((card,i)=>{ const row=d.cases[i]; if(!row) return; const small=card.querySelector('.case-copy small'); const h=card.querySelector('.case-copy h3'); const p=card.querySelector('.case-copy p'); if(small) small.textContent=row[0]; if(h) h.textContent=row[1]; if(p) p.textContent=row[2]; });
    if(n.ctaMeta) n.ctaMeta.textContent=d.ctaMeta;
    if(n.cta) n.cta.textContent=d.cta;
    if(n.contact) n.contact.textContent=d.contact;
    if(n.next){ const links=n.next.querySelectorAll('a'); if(links[0]) links[0].textContent=d.back; if(links[1]) { const strong=links[1].querySelector('strong'); links[1].firstChild.textContent=d.next+'\n'; if(strong) strong.textContent=d.nextName; } }
    if(n.footer) n.footer.textContent=d.footer;
    document.querySelectorAll('.case-language button').forEach(b=>b.classList.toggle('active',b.dataset.lang===language));
  }

  addSwitcher();
  apply(localStorage.getItem('language') || 'ru');
})();
