var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");
var f7 = document.getElementById("f7");
var f8 = document.getElementById("f8");
var f9 = document.getElementById("f9");
var f10 = document.getElementById("f10");
var f11 = document.getElementById("f11");
var f12 = document.getElementById("f12");
var title = document.getElementById("title");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");

function parallax () {
  f1.style.left = ((window.pageYOffset/10) - 300) + "px";
  f2.style.left = (window.pageYOffset/5) + "px";
  f3.style.left = ((window.pageYOffset/8) + 85) + "px";

  f4.style.right = ((window.pageYOffset/10) - 200) + "px";
  f4.style.bottom = (window.pageYOffset/20) + "px";

  f5.style.left = ((window.pageYOffset/15) - 500) + "px";
  f6.style.right = ((window.pageYOffset/8) - 800) + "px";
  f7.style.left = ((window.pageYOffset/15) - 900) + "px";
  f8.style.right = ((window.pageYOffset/13) - 1000) + "px";
  f9.style.right = ((window.pageYOffset/20) - 1000) + "px";

  f10.style.left = ((window.pageYOffset/2) - 2500) + "px";
  f10.style.bottom = (window.pageYOffset/20) + "px";

  f11.style.left = ((window.pageYOffset/11) - 900) + "px";
  f12.style.left = ((window.pageYOffset/15) - 2000) + "px";

  title.style.bottom = ((window.pageYOffset/10) + 500) + "px";

  p1.style.bottom = ((window.pageYOffset/10) - 500) + "px";
  p2.style.bottom = ((window.pageYOffset/10) - 1500) + "px";
  p3.style.bottom = ((window.pageYOffset/10) - 2500) + "px";
  p4.style.bottom = ((window.pageYOffset/10) - 3500) + "px";
}

window.addEventListener("scroll", parallax);


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
