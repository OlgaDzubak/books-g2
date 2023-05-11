import Swiper from 'swiper'; // якщо прокрутка буде робитися через swiper
import { supportItems } from './support_ukraie_items';

const galleryItemsContainer = document.querySelector(
  '.support-ukraine-gallery'
);
const fundsMarkup = createFundsMarkup(supportItems);

galleryItemsContainer.insertAdjacentHTML('beforeend', fundsMarkup);

function createFundsMarkup(supportItems) {
  return supportItems
    .map(({ title, url, img }) => {
      return `
<li class="support_gallery_item">
  <a class="support_gallery_link link" href="${url}" title="${title}">  
     <svg class="support_gallery_link_svg" height="20">
      <use href="${img}"></use>
     </svg>
   
  </a>
</li>
    `;
    })
    .join('');
  console.log(title);
}
console.log(supportItems);
