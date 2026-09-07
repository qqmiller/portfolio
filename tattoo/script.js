const nav=document.querySelector('nav');
const transition=document.createElement('div');
transition.className='page-transition';
transition.innerHTML='<div class="transition-image"><img src="assets/time.webp" alt=""></div><div class="transition-word">TATTOO</div><div class="transition-line"></div>';
document.body.appendChild(transition);

requestAnimationFrame(()=>document.body.classList.add('page-ready'));

const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting) entry.target.classList.add('visible');
}),{threshold:.1});
document.querySelectorAll('section, .service-grid article, .gallery figure, .booking form').forEach(el=>io.observe(el));

document.querySelector('.hamb')?.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target)return;
    event.preventDefault();
    nav?.classList.remove('open');
    document.body.classList.add('transitioning');
    setTimeout(()=>{
      target.scrollIntoView({behavior:'instant',block:'start'});
      window.scrollBy(0,-10);
    },420);
    setTimeout(()=>document.body.classList.remove('transitioning'),1050);
  });
});

window.addEventListener('scroll',()=>{
  document.documentElement.style.setProperty('--scroll',window.scrollY+'px');
},{passive:true});

document.querySelector('form')?.addEventListener('submit',event=>{
  event.preventDefault();
  const button=event.currentTarget.querySelector('button');
  button.innerHTML='ЗАПРОС ПОЛУЧЕН <span>✓</span>';
  button.disabled=true;
});