import { supportItems } from './support_ukraie_items';

const galleryItemsContainer = document.querySelector('.swiper-wrapper');
const fundsMarkup = createFundsMarkup(supportItems);

galleryItemsContainer.insertAdjacentHTML('beforeend', fundsMarkup);

function numberFounds(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
}
numberFounds(supportItems);

function createFundsMarkup(supportItems) {
  console.log(supportItems.children);

  return supportItems
    .map(({ title, url, img, id }) => {
      return `
            
            <li class="support_gallery_item swiper-slide"><span class="support_gallery_number">${id}</span>
              <a class="support_gallery_link link" href="${url}">
                <img class="support_gallery_link_img"  src="${img}" alt="${title}" height="32">  
            </a>
            </li>
            `;
    })
    .join('');
}

// console.log(supportItems);

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  direction: 'vertical',
  loop: true,
  mousewheel: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },

  // breakpoints: {
  //   // when window width is >= 768px
  //   768: {
  //     slidesPerView: 6,
  //     // spaceBetween: 20,

  //     // loop: true,
  //     // loopedSlides: 6,
  //   },
  // },
  // loopedSlides: 6,
});

document.querySelector('.scroll-up-btn').addEventListener('click', () => {
  swiper.next();
});
