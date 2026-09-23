(()=>{
 const btn=document.querySelector('.menuBtn'),nav=document.querySelector('#mainNav');
 const close=()=>{nav?.classList.remove('open');btn?.setAttribute('aria-expanded','false')};
 btn?.addEventListener('click',()=>{const on=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(on))});
 const go=(id)=>{if(id==='#home'){window.scrollTo({top:0,left:0,behavior:'smooth'});return true}const t=document.querySelector(id);if(!t)return false;const header=document.querySelector('.topbar');const y=t.getBoundingClientRect().top+window.scrollY-(header?.offsetHeight||0)-8;window.scrollTo({top:Math.max(0,y),left:0,behavior:'smooth'});return true};
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(!id||id==='#')return;if(go(id)){e.preventDefault();close();try{history.replaceState(null,'',id)}catch(_){}}}));
 document.addEventListener('click',e=>{if(nav?.classList.contains('open')&&!nav.contains(e.target)&&!btn.contains(e.target))close()});
 window.addEventListener('resize',close,{passive:true});
 const secs=[...document.querySelectorAll('main section[id],header[id]')],links=[...document.querySelectorAll('.mainNav a')];
 if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>{const v=es.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!v)return;links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+v.target.id))},{rootMargin:'-20% 0px -60%',threshold:[0,.2,.5]});secs.forEach(s=>io.observe(s))}
 const f=document.querySelector('#quoteForm');f?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f),s=`Richiesta preventivo NTSE - ${d.get('from')} > ${d.get('to')}`,b=`Partenza: ${d.get('from')}\nDestinazione: ${d.get('to')}\nMerce: ${d.get('goods')}\nData: ${d.get('date')||'-'}\n\nNote:\n${d.get('notes')||'-'}`;location.href=`mailto:traffico@transportserviceitalia.it?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`});
})();
