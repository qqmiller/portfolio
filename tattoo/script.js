const transition = document.querySelector('.page-transition');
const word = document.querySelector('.transition-word');
const sub = document.querySelector('.transition-sub');
const links = document.querySelectorAll('a[href^="#"]');
const form = document.querySelector('.tattoo-form');
const contactScreen = document.querySelector('.contact-screen');
const contactClose = document.querySelector('.contact-close');
const sections = {'#services':'services','#process':'process','#works':'works','#sketches':'sketches','#contacts':'contacts','#home':'studio'};

function splitLetters(el){
  if(!el || el.dataset.split) return;
  const text=el.textContent.trim(); el.textContent='';
  [...text].forEach((char,i)=>{const span=document.createElement('span');span.textContent=char===' '?'\u00a0':char;span.style.setProperty('--i',i);el.appendChild(span);});
  el.dataset.split='true';
}
function buildTransitionDetails(){
  if(!transition)return;
  if(!transition.querySelector('.transition-noise')){const n=document.createElement('div');n.className='transition-noise';transition.appendChild(n);}
  if(!transition.querySelector('.transition-corner')){const c=document.createElement('div');c.className='transition-corner';transition.appendChild(c);const r=document.createElement('div');r.className='transition-corner right';transition.appendChild(r);}
  if(!transition.querySelector('.transition-mark')){const m=document.createElement('div');m.className='transition-mark';m.textContent='INK / MEMORY / 01';transition.appendChild(m);}
  splitLetters(word);splitLetters(sub);
}
buildTransitionDetails();

function replayAnimation(label='studio'){
  if(!transition)return;
  if(sub){sub.textContent=label;sub.dataset.split='';splitLetters(sub);}
  transition.classList.remove('is-done','replay');
  transition.style.pointerEvents='auto';
  void transition.offsetWidth;
  transition.classList.add('replay');
}
function finishTransition(){
  if(!transition)return;
  transition.classList.remove('replay');
  transition.classList.add('is-done');
  transition.style.pointerEvents='none';
}
function openContacts(){
  replayAnimation('contacts');
  window.setTimeout(()=>{
    contactScreen?.classList.add('is-open');
    contactScreen?.setAttribute('aria-hidden','false');
    document.body.classList.add('contacts-open');
  },1050);
  window.setTimeout(finishTransition,1650);
}
function closeContacts(){
  replayAnimation('studio');
  window.setTimeout(()=>{
    contactScreen?.classList.remove('is-open');
    contactScreen?.setAttribute('aria-hidden','true');
    document.body.classList.remove('contacts-open');
  },1050);
  window.setTimeout(finishTransition,1650);
}
window.addEventListener('load',()=>{replayAnimation('studio');window.setTimeout(finishTransition,1650);});

links.forEach(link=>link.addEventListener('click',event=>{
  const selector=link.getAttribute('href');
  if(selector==='#contacts'){event.preventDefault();openContacts();return;}
  const target=document.querySelector(selector);
  if(!target||!transition)return;
  event.preventDefault();replayAnimation(sections[selector]||'studio');
  window.setTimeout(()=>target.scrollIntoView({behavior:'smooth',block:'start'}),1050);
  window.setTimeout(finishTransition,1650);
}));
contactClose?.addEventListener('click',closeContacts);
form?.addEventListener('submit',event=>{event.preventDefault();const button=form.querySelector('button');button.classList.add('is-sent');button.innerHTML='ЗАПРОС ПОЛУЧЕН <span>✓</span>';button.disabled=true;});
window.addEventListener('keydown',event=>{if(event.key==='Escape'&&contactScreen?.classList.contains('is-open'))closeContacts();});
window.addEventListener('pageshow',event=>{if(event.persisted)finishTransition();});