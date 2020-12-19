//создвем переменную в которую ложим кнопку меню
let menuToggle= document.querySelector('#menu-toggle');
//создвем переменную в которую ложим меню
let menu = document.querySelector('.header-wrapper');
//отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function(event){
  //отменяем стандартное поведение ссылки
  event.preventDefault();
  //вешаем класс на меню, когда кликнули на кнопку меню
  menu.classList.toggle('visible');
});
var mySwiper = new Swiper ('.swiper-container', {
  slidesPerView:4,
  spaceBetween:25,
  loop: true,
  breakpoints:{
    992:{
      slidesPerView:4,
    },
    768:{
      slidesPerView:2,
    },
    320:{
      slidesPerView:1,
      slidesOffsetAfter:50,
      navigation:{
        nextEl:".button-next",
      }
    }
  }
});

