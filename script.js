const config=window.SITE_CONFIG||{};
const grid=document.querySelector('#project-grid');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function validUrl(url){try{const u=new URL(url);return ['https:','http:'].includes(u.protocol)}catch{return false}}
function render(filter='all'){
 const items=(config.projects||[]).filter(p=>filter==='all'||p.type===filter);
 grid.innerHTML=items.map(p=>{const active=validUrl(p.url);return `<article class="project"><div class="art ${['rose','forest','amber','sky','plum'].includes(p.color)?p.color:''}" aria-hidden="true"><span>${esc(p.icon||'✦')}</span></div><div class="project-content"><h3>${esc(p.title)}</h3><div class="tags"><span class="tag">${esc(p.label||p.type)}</span><span class="tag">${active?'Free / Visit':esc(p.status||'Coming soon')}</span></div><p>${esc(p.description)}</p><div class="project-actions">${active?`<a class="btn primary" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">↗ Open / Download</a>`:`<span class="btn disabled" aria-disabled="true">✧ Coming soon</span>`}</div></div></article>`}).join('')||'<p>No treasures on this shelf yet. ✨</p>';
}
render();document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)}));
const kofi=document.querySelector('#kofi-link'),hint=document.querySelector('#kofi-hint');if(validUrl(config.kofiUrl)){kofi.href=config.kofiUrl;hint.hidden=true}else{kofi.classList.add('disabled');kofi.removeAttribute('href')}document.querySelector('#year').textContent=new Date().getFullYear();
