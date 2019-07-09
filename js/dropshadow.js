function shadow(bool) {
if(bool) {
document.getElementById('nav').style.boxShadow = "0 0 10px rgba(0,0,0,0.4)";
} else {
document.getElementById('nav').style.boxShadow = "0 0 0px rgba(0,0,0,0.4)";
}
}

shadow(false);

function getIfScroll() {
return (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 || window.scrollY > 50);
}

window.addEventListener('scroll',function(){
shadow(getIfScroll());
});
