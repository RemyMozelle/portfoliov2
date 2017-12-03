/**
 * SMOOTH ANCRE
 */
$('a[href^="#"]').click(function () {
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop: $(the_id).offset().top
  }, 'slow');
  return false;
});

/**
 * SCROLL MENU FIXED
 */
let navbar = document.querySelector('.navbar-default');
let navbarBrand = document.querySelector('.nav-brand');
let header = document.querySelector('header');

window.addEventListener('scroll', (e) => {

  if (window.scrollY >= 200) {
    navbar.classList.add('navbar-fixed-top');
    navbar.setAttribute('style', 'background-color: rgba(40, 44, 52, 1');
    navbarBrand.setAttribute('style', 'display: block');
  }
  else {
    navbar.classList.remove('navbar-fixed-top');
    navbar.setAttribute('style', '');
    navbarBrand.setAttribute('style', 'display: none');
  }

})