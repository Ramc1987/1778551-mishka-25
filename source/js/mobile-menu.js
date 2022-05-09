let toggleBtn = document.getElementById('header__toggle-menu');
let siteList = document.getElementById('header__site-list');

if(siteList && siteList.classList.contains('header__site-item--close')) {
  siteList.classList.remove('header__site-item--close');
}
