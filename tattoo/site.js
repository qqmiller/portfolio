const transition=document.querySelector('.page-transition');
const word=document.querySelector('.transition-word');
const sub=document.querySelector('.transition-sub');
const NAV_KEY='tattoo-pending-transition';
function split(el){if(!el)return;el.textContent=el.textContent.split('').map(c=>c===' '?'\u00a0':c).join('');const text=el.textContent;el.textContent='';[...text].forEach((c,i)=>{const s=document.createElement('span');s.textContent=c;s.style.setProperty('--i',i);el.appendChild(s)})}
function setLabel(label){if(!sub)return;sub.innerHTML='';[...label].forEach((c,i)=>{const s=document.createElement('span');s.textContent=c===' '?'\u00a0':c;s.style.setProperty('--i',i);sub.appendChild(s)})}
function details(){if(!transition)return;if(!transition.querySelector('.transition-noise')){const n=document.createElement('div');n.className='transition-noise';transition.appendChild(n)}if(!transition.querySelector('.transition-corner')){const a=document.createElement('div');a.className='transition-corner';transition.appendChild(a);const b=document.createElement('div');b.className='transition-corner right';transition.appendChild(b)}if(!transition.querySelector('.transition-mark')){const m=document.createElement('div');m.className='transition-mark';m.textContent='INK / MEMORY / 01';transition.appendChild(m)}if(word&&!word.dataset.split){split(word);word.dataset.split='1'}}
function reveal(){transition?.classList.add('is-done')}
function playArrival(label){setLabel(label);transition.classList.remove('is-done','replay');void transition.offsetWidth;transition.classList.add('replay');setTimeout(reveal,1180)}
function go(href,label){if(!transition){location.href=href;return}sessionStorage.setItem(NAV_KEY,label);setLabel(label);transition.classList.remove('is-done','replay');void transition.offsetWidth;transition.classList.add('replay');setTimeout(()=>location.href=href,980)}
details();
window.addEventListener('load',()=>{const pending=sessionStorage.getItem(NAV_KEY);if(pending){sessionStorage.removeItem(NAV_KEY);playArrival(document.body.dataset.section||pending)}else{playArrival(document.body.dataset.section||'studio')}});
document.querySelectorAll('[data-page]').forEach(link=>link.addEventListener('click',e=>{const href=link.getAttribute('href');if(!href)return;e.preventDefault();go(href,link.dataset.page||'studio')}));
document.querySelector('[data-back]')?.addEventListener('click',e=>{e.preventDefault();go('index.html','studio')});
document.querySelector('.tattoo-form')?.addEventListener('submit',e=>{e.preventDefault();const b=e.currentTarget.querySelector('button');b.textContent='ЗАПРОС ПОЛУЧЕН ✓';b.disabled=true});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.dataset.section==='contacts')go('index.html','studio')});