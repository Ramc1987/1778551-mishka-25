let btn=document.querySelector(".header__toggle-menu"),siteList=document.querySelector(".header__site-list"),userList=document.querySelector(".header__user-list");btn.addEventListener("click",(function(){siteList.classList.toggle("header__site-list--open")?siteList.classList.remove("header__site-list--close"):siteList.classList.add("header__site-list--close"),userList.classList.toggle("header__user-list--open")?userList.classList.remove("header__user-list--close"):userList.classList.add("header__user-list--close")}));