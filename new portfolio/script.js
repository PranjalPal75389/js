const menuBtn=document.getElementsByClassName("menu-bar")[0];
const navBar=document.getElementsByClassName("navbar")[0]

function toggleMenu() {
  navBar.classList.toggle("active");
  console.log("clicked");
}
menuBtn.addEventListener("click", toggleMenu );


const globalConfig = {
    "strokeBottom": 5,
    "round": true,
    "fontColor": "white",
    /* e.t.c */
  }
  
  const global = new CircularProgressBar('global', globalConfig);
  global.initial();

  var typed = new Typed('#typing', {
    strings: [ 'Pranjal Pal' ,'Student' , 'Curious'],
    typeSpeed: 50,
    backSpeed:50,
    loop:true
  });
