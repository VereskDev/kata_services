// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     slidesPerView: 'auto',
//     spaceBetween: 16,
//     allowTouchMove: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     type: "bullets",
//     clickable: true,
  
//   });


  
  

  let swiper;

  function initSwiper() {
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        allowTouchMove: true,

        pagination: {
          el: '.swiper-pagination',
        },
        type: "bullets",
        clickable: true,
    });
  }
  
  function destroySwiper() {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null; 
    }
  }
  
  function checkWidth() {
    if (window.innerWidth < 768) {
      if (!swiper) { 
        initSwiper();
      }
    } else {
      destroySwiper();
    }
  }

  window.addEventListener('resize', checkWidth);
  

  checkWidth();

  const buttonText = document.querySelector('.showmore-text');

  function show_more() {
    const menu = document.getElementById('menu__func');
    const show = document.getElementById('button');
    menu.classList.toggle('menu--expanded'); 
    show.classList.toggle('up');


if (menu.classList.contains('menu--expanded')) {
    buttonText.textContent = 'Скрыть'; 
} else {
    buttonText.textContent = 'Показать все'; 
}
}

