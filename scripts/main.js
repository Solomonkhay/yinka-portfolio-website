 /*loader script*/
 const loader = document.querySelector(".loader");
 const main = document.querySelector(".main");

 loading();
 function loading() {
   setTimeout(() => {
     loader.style.opacity = 0;
     loader.style.display = "none";

     main.style.display = "block";
     setTimeout(() => (main.style.opacity = 1), 50);
   }, 3000);
 }

//  menu icon script
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height){
          navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
          })
    }
  })
}         




menuIcon.oneclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}