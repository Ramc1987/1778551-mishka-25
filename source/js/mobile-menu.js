let btn = document.querySelector('.header__toggle-menu');
let siteList = document.querySelector('.header__site-list');
let userList = document.querySelector('.header__user-list')
// siteList.classList.remove('.header__site-list--open')

btn.addEventListener('click', function() {
  if (siteList.classList.toggle('header__site-list--open')) {
    siteList.classList.remove('header__site-list--close')
  } else {
    siteList.classList.add('header__site-list--close');
  }
  if (userList.classList.toggle('header__user-list--open')) {
    userList.classList.remove('header__user-list--close')
  } else {
    userList.classList.add('header__user-list--close');
  }
})
