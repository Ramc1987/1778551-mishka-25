let weeksBtn = document.querySelector('.top-product__button')
let modalWindow = document.querySelector('.modal')
let modalForm = document.querySelector('.modal__window')
let headerBtn = document.querySelector('.header__user-item--basket');
let productBaskets = document.querySelectorAll('.card-list__wrapper-basket')
console.log(headerBtn);

weeksBtn?.addEventListener('click', function() {
  if (modalWindow.classList.toggle('modal--open')) {
    modalWindow.classList.remove('modal--close')
  } else {
    modalWindow.classList.add('modal--close');
  }
})

modalWindow.addEventListener('click', function() {
  modalWindow.classList.remove('modal--open');
  modalWindow.classList.add('modal--close');
})

modalForm.addEventListener('click', function(event) {
  event.stopPropagation();
})

headerBtn?.addEventListener('click', function () {
  if (modalWindow.classList.toggle('modal--open')) {
    modalWindow.classList.remove('modal--close')
  } else {
    modalWindow.classList.add('modal--close');
  }
})

productBaskets.forEach(basket => {
  basket.addEventListener('click', function (event) {
    event.preventDefault();
    if (modalWindow.classList.toggle('modal--open')) {
      modalWindow.classList.remove('modal--close')
    } else {
      modalWindow.classList.add('modal--close');
    }
  })
});
