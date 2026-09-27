const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='72px';nav.style.left='0';nav.style.right='0';nav.style.padding='18px 4vw';nav.style.background='#031512';nav.style.flexDirection='column'});

document.querySelectorAll('[data-credential-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.credentialTab;
    document.querySelectorAll('[data-credential-tab]').forEach((btn) => {
      const active = btn === tab;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    document.querySelectorAll('[data-credential-panel]').forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.credentialPanel === target);
    });
  });
});


const credentialsTarget = document.querySelector('#achievements');
function scrollToCredentials(){
  credentialsTarget?.scrollIntoView({behavior:'smooth', block:'start'});
}
document.querySelectorAll('[data-scroll-to-credentials]').forEach((badge)=>{
  badge.addEventListener('click', scrollToCredentials);
  badge.addEventListener('keydown',(event)=>{
    if(event.key==='Enter' || event.key===' '){ event.preventDefault(); scrollToCredentials(); }
  });
});
