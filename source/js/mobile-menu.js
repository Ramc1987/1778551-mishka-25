let btn = document.querySelector('.header__toggle-menu');
let siteList = document.querySelector('.header__site-list');
let userList = document.querySelector('.header__user-list');

btn.classList.remove('header__toggle-menu--nojs');
siteList.classList.add('header__site-list--close');
userList.classList.add('header__user-list--close')

btn.addEventListener('click', function () {
  if (btn.classList.toggle('header__toggle-menu--open')) {
    btn.classList.remove('header__toggle-menu--close')
  } else {
    btn.classList.add('header__toggle-menu--close');
  }
})

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
