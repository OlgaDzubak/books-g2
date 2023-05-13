// import Swiper from 'swiper';
// import saveTheChildren from './src/images/svg/ukrainian_gerb_icon.svg';

import { supportItems } from './support_ukraie_items';

// const galleryItemsContainer = document.querySelector(
//   '.support-ukraine-gallery'
// );

const galleryItemsContainer = document.querySelector('.swiper-wrapper');
const fundsMarkup = createFundsMarkup(supportItems);

galleryItemsContainer.insertAdjacentHTML('beforeend', fundsMarkup);

// function createFundsMarkup(supportItems) {
//   console.log('halo');
//   return supportItems
//     .map(({ title, url, img }) => {
//       return `
// <li class='support_gallery_item'>
//   <a class='support_gallery_link link' href='${url}' title='${title}'>
//      <svg class='support_gallery_link_svg' height="20">
//       <use href='${img}'></use>
//      </svg>

//   </a>
// </li>
//     `;
//     })
//     .join('');
// }
// console.log(supportItems);

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
    <a class="support_gallery_link link" href="${url}" title="${title}">
      <svg class="support_gallery_link_svg" height="20">
        <use href="${img}"></use>
      </svg>
        
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
