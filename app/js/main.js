/// hamburger-menu
const hamburgerMenu = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list');
const menuItems = document.querySelector('.burger__lines')

hamburgerMenu.onclick = function () {

    menuList.classList.toggle('active')
    menuItems.classList.toggle('active')

}


// tabs

const tabItem = document.querySelectorAll('.tabs__item');
const tabContent = document.querySelectorAll('.tabs__content-item');



for (let item of tabItem) {

    item.addEventListener('click', function () {
  
      for (let element of tabContent) {
        element.classList.add('hidden');
     
      };
  
      const content = document.querySelector('#' + item.dataset.tab);
      content.classList.remove('hidden');
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
