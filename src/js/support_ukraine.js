import { supportItems } from './support_ukraie_items';

const galleryItemsContainer = document.querySelector('.swiper-wrapper');
const fundsMarkup = createFundsMarkup(supportItems);

galleryItemsContainer.insertAdjacentHTML('beforeend', fundsMarkup);

function createFundsMarkup(supportItems) {
  return supportItems
    .map(({ title, url, img, id }) => {
      return `            
            <li class="support_gallery_item swiper-slide">
            <span class="support_gallery_number">${pad(id)}</span>
              <a class="support_gallery_link link" href="${url}">
                <img class="support_gallery_link_img"  src="${img}" alt="${title}" height="32">  
            </a>
            </li>
            `;
    })
    .join('');
}

function pad(value) {
  return String(value).padStart(2, '0');
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
    prevEl: '.swiper-button-prev',
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
