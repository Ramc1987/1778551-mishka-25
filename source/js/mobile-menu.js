let btn = document.querySelector('.header__toggle-menu');
let siteList = document.querySelector('.header__site-list');

btn.addEventListener('click', function() {
  if (siteList.classList.toggle('.header__site-list--open')) {
    siteList.classList.remove('header__site-list--close')
  } else {
    siteList.classList.add('header__site-list--close');
  }
})
