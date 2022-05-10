let btn = document.querySelector('.header__toggle-menu');
let siteList = document.querySelector('.header__site-list');
btn.addEventListener('click', function() {
  siteList.classList.toggle('.header__site-list--open');
})
