//ハンバーガーメニューの定義
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menuButton').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('menuList').classList.toggle('active');
    document.getElementById('mask').classList.toggle('active');
  })
});

//swiperの定義
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  speed: 4000,
  autoplay:{
    delay: 2000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//mainのアニメーション定義
const animationTarget = document.querySelectorAll('.animationTarget');
document.addEventListener('scroll', () => {
  for (let i=0; i < animationTarget.length; i++) {
    const target = animationTarget[i].getBoundingClientRect().top
    + animationTarget[i].clientHeight *.6
    if (window.innerHeight > target) {
      animationTarget[i].classList.add('show');
    }
  }
});