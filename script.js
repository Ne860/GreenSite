
(function(){
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.nav-toggle');
  if(btn){
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }
  const year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        history.pushState(null, '', '#'+id);
      }
    });
  });

  // Back to top
  const back = document.getElementById('back-to-top');
  if(back){
    back.addEventListener('click', (e)=>{
      e.preventDefault();
      document.getElementById('top').scrollIntoView({behavior:'smooth'});
      history.pushState(null, '', '#top');
    });
  }

  // Basic form validation
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const service = form.querySelector('#service').value;
      if(!name || !email || !service){
        e.preventDefault();
        alert('Пожалуйста, заполните обязательные поля.');
      }
    });
  }
})();
