import { supportItems } from './support_ukraie_items';

const galleryItemsContainer = document.querySelector(
  '.support-ukraine-gallery'
);
const sliderLine = document.querySelector('.slider-line');
const scrollUp = document.querySelector('.scroll-up-btn');
const scrollDown = document.querySelector('.scroll-down-btn');

scrollUp.addEventListener('click', scrollDownslide);
scrollDown.addEventListener('click', scrollUpslide);



export function renderFundsMurkup(){
  const fundsMarkup = createFundsMarkup(supportItems);
  galleryItemsContainer.insertAdjacentHTML('beforeend', fundsMarkup);
}

function createFundsMarkup(supportItems) {
  return supportItems
    .map(({ title, url, img, id }) => {
      return `
            <li class="support_gallery_item ">
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

let offset = 0; //смещение

function scrollUpslide() {
  offset += 52;

  if (window.innerWidth < 767) {
    if (offset > 259) {
      scrollDown.style.display = 'none';
      scrollUp.style.removeProperty('display');
    }
  } else if (offset > 155) {
    scrollDown.style.display = 'none';
    scrollUp.style.removeProperty('display');
  }

  sliderLine.style.bottom = offset + 'px';
}

function scrollDownslide() {
  offset -= 52;
  if (offset < 1) {
    scrollUp.style.display = 'none';
    scrollDown.style.removeProperty('display');
  }
  sliderLine.style.bottom = offset + 'px';
}

console.log(window.innerWidth);
