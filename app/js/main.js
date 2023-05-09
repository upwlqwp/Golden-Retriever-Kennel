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


//// acordeion

document.querySelectorAll(".questions__item-title").forEach((el) => {
  el.addEventListener("click", () => {

    let content = el.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      document.querySelectorAll(".questions__item-text").forEach((el) => (el.style.maxHeight = null));
    } else {
      document.querySelectorAll(".questions__item-text").forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px"
    }
  });
});
