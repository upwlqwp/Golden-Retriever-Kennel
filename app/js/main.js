// tabs

const tabItem = document.querySelectorAll('.tabs__item');
const tabContent = document.querySelectorAll('.tabs__content-item');



for (let item of tabItem) {

    item.addEventListener('click', function () {
  
      for (let element of tabContent) {
        element.classList.add('hidden');
        item.classList.remove('active');
      };
  
      const content = document.querySelector('#' + item.dataset.tab);
      content.classList.remove('hidden');
      item.classList.add('active');
    });
  };

// swiper 

const swiper = new Swiper('.swiper', {
    effect: "fade",
    pagination: {
        el: '.swiper-plagination',
    },
    autoplay: {
        delay: 2500,
        disable0nInteraction: false,
    },
})



