const transition = document.querySelector('.page-transition');
const word = document.querySelector('.transition-word');
const sub = document.querySelector('.transition-sub');
const links = document.querySelectorAll('a[href^="#"]');
const form = document.querySelector('.tattoo-form');
const contactScreen = document.querySelector('.contact-screen');
const contactClose = document.querySelector('.contact-close');

const sections = {
  '#services': 'services',
  '#process': 'process',
  '#works': 'works',
  '#sketches': 'sketches',
  '#contacts': 'contacts',
  '#home': 'studio'
};

function splitLetters(el){
  if(!el) return;
  const text = el.textContent.trim();
  el.textContent = '';
  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00a0' : char;
    span.style.setProperty('--i', i);
    el.appendChild(span);
  });
}

function buildTransition(){
  if(!transition) return;

  if(!transition.querySelector('.transition-noise')){
    const noise = document.createElement('div');
    noise.className = 'transition-noise';
    transition.appendChild(noise);
  }

  if(!transition.querySelector('.transition-corner')){
    const corner = document.createElement('div');
    corner.className = 'transition-corner';
    transition.appendChild(corner);

    const right = document.createElement('div');
    right.className = 'transition-corner right';
    transition.appendChild(right);
  }

  if(!transition.querySelector('.transition-mark')){
    const mark = document.createElement('div');
    mark.className = 'transition-mark';
    mark.textContent = 'INK / MEMORY / 01';
    transition.appendChild(mark);
  }

  splitLetters(word);
  splitLetters(sub);
}

buildTransition();

function forceReflow(){
  void transition.offsetWidth;
}

function startTransition(label = 'studio'){
  if(!transition) return;

  transition.dataset.section = label;

  if(sub){
    sub.textContent = label;
    splitLetters(sub);
  }

  transition.classList.remove('replay');
  transition.classList.remove('is-done');
  transition.style.visibility = 'visible';
  transition.style.pointerEvents = 'auto';

  // Two frames guarantee the browser paints the closed state before replaying.
  requestAnimationFrame(() => {
    forceReflow();
    requestAnimationFrame(() => {
      transition.classList.add('replay');
    });
  });
}

function endTransition(){
  if(!transition) return;
  transition.classList.remove('replay');
  transition.classList.add('is-done');
  transition.style.pointerEvents = 'none';
}

function openContacts(){
  startTransition('contacts');

  window.setTimeout(() => {
    contactScreen?.classList.add('is-open');
    contactScreen?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('contacts-open');
  }, 720);

  window.setTimeout(endTransition, 1500);
}

function closeContacts(){
  startTransition('studio');

  window.setTimeout(() => {
    contactScreen?.classList.remove('is-open');
    contactScreen?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('contacts-open');
    window.scrollTo({top: 0, behavior: 'auto'});
  }, 720);

  window.setTimeout(endTransition, 1500);
}

window.addEventListener('load', () => {
  // Intro animation on every fresh page load.
  startTransition('studio');
  window.setTimeout(endTransition, 1650);
});

links.forEach(link => {
  link.addEventListener('click', event => {
    const selector = link.getAttribute('href');

    if(selector === '#contacts'){
      event.preventDefault();
      openContacts();
      return;
    }

    const target = document.querySelector(selector);
    if(!target || !transition) return;

    event.preventDefault();
    startTransition(sections[selector] || 'studio');

    window.setTimeout(() => {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 720);

    window.setTimeout(endTransition, 1500);
  });
});

contactClose?.addEventListener('click', closeContacts);

form?.addEventListener('submit', event => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.classList.add('is-sent');
  button.innerHTML = 'ЗАПРОС ПОЛУЧЕН <span>✓</span>';
  button.disabled = true;
});

window.addEventListener('keydown', event => {
  if(event.key === 'Escape' && contactScreen?.classList.contains('is-open')){
    closeContacts();
  }
});

window.addEventListener('pageshow', event => {
  if(event.persisted) endTransition();
});
