function toggleTheme(){document.body.classList.toggle('light')}
function checkInvite(){
const c=document.getElementById('code').value;
document.getElementById('msg').textContent=
c==='WIZMN-FOUNDING'?'Request received.':'Invalid code.';
}
function savePost(){
const t=document.getElementById('anonText').value;
localStorage.setItem('wizmn_post',t);
alert('Saved locally.');
}
