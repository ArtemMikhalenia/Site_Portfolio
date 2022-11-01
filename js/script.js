let iconMenu = document.querySelector(".header__burger");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu-header__menu");
if (iconMenu) {
   iconMenu.addEventListener("click", function () {
      iconMenu.classList.toggle("active");
      body.classList.toggle("lock");
      menuBody.classList.toggle("active");
   });
}

console.log(menuBody);

//Скрипт для анимации сайта
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         } else {
            if (!animItem.classList.contains('_no-anim')) {
               animItem.classList.remove('active');
            }
         }
      }
   }
   //Функция позиции объекта относительно верха (кроссбраузерная)
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 100);
}