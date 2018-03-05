var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");

function parallax () {
  f1.style.left = ((window.pageYOffset/10) - 300) + "px";
  f2.style.left = (window.pageYOffset/5) + "px";
  f3.style.left = ((window.pageYOffset/8) + 85) + "px";

  f4.style.right = ((window.pageYOffset/10) - 200) + "px";
  f4.style.bottom = (window.pageYOffset/20) + "px";

  f5.style.left = ((window.pageYOffset/15) - 500) + "px";
  f6.style.right = ((window.pageYOffset/8) - 800) + "px";
}

window.addEventListener("scroll", parallax);
