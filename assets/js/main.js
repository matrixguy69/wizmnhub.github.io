function toggleTheme(){
document.body.classList.toggle('light');
}

function checkInvite(){
const c=document.getElementById('code').value;
const msg=document.getElementById('msg');
if(c==='WIZMN-FOUNDING'){
msg.textContent='Request received. You will be contacted.';
}else{
msg.textContent='Invalid code.';
}
}

function savePost(){
const t=document.getElementById('anonText').value;
if(!t.trim())return;
let posts=JSON.parse(localStorage.getItem('wizmn_posts')||'[]');
posts.push({text:t,date:Date.now()});
localStorage.setItem('wizmn_posts',JSON.stringify(posts));
alert('Saved anonymously (local).');
document.getElementById('anonText').value='';
}
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = 'var(--text)';
  }
});
