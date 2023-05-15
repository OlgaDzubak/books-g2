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
    .map(({ title, url, img }) => {
      return `
            <li class="support_gallery_item swiper-slide">
              <a class="support_gallery_link link" href="${url}">
                <img class="support_gallery_link_img"  src="${img}" alt="${title}" height="32">  
            </a>
            </li>
            `;
    })
    .join('');
}

console.log(supportItems);

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  direction: 'vertical',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },
});
