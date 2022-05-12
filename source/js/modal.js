let weeksBtn = document.querySelector('.top-product__button')
let headerBtn = document.querySelector('.header__user-item')
let modalWindow = document.querySelector('.modal')

weeksBtn.addEventListener('click', function() {
  if (modalWindow.classList.toggle('modal--open')) {
    modalWindow.classList.remove('modal--close')
  } else {
    modalWindow.classList.add('modal--close');
  }
})



// headerBtn.addEventListener('click', function() {
//   if (modalWindow.classList.toggle('modal--open')) {
//     modalWindow.classList.remove('modal--close')
//   } else {
//     modalWindow.classList.add('modal--close');
//   }
// })

