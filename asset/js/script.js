// const a = document.querySelectorAll(".nav-link");
// const src = document.querySelectorAll("section");

// function activeMenu(){
//     let len = sec.length;
//     while(--len && window.scrollY + 97 < sec[len].offsetTop){}
//     a.forEach(ltx => ltx.classList.remove("active"));
//     a[len].classList.add("active");
// }

// activeMenu();
// window.addEventListener("scroll", activeMenu);

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container a .collapse .navbar-nav .nav-link");
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute("id"); }
      });
    
      navLi.forEach((navLi) => {
        navLi.classList.remove("active");
        if (navLi.classList.contains(current)) {
            navLi.classList.add("active");
        }
      });
    };