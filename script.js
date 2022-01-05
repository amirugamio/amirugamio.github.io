// panggil navbar
const navBar = document.getElementById("navbar");
const navCont = document.getElementById("navCont");

// buat function scroll
function scroll() {
  let calc = window.scrollY;
if(window.innerWidth >= 992) {
  if (calc > 540) {
    navBar.classList.replace("bg-transparent", "bg-dark");
    navBar.classList.replace("navbar-light", "navbar-dark");
    navCont.classList.replace("container-fluid", "container");
  } else if (calc <= 0) {
    navBar.classList.replace("bg-dark", "bg-transparent");
    navBar.classList.replace("navbar-dark", "navbar-light");
    navCont.classList.replace("container", "container-fluid");
  }
} else {
navBar.classList.replace("bg-transparent", "bg-dark");
    navBar.classList.replace("navbar-light", "navbar-dark");
    navCont.classList.replace("container-fluid", "container");
}
}

//panggil saat init
scroll();

// panggil saat discroll
window.onscroll = () => {
  scroll();
};
