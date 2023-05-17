import './js/isChangeTheme';
import './js/shopping_list';
import './js/support_ukraine';
import './js/mobile_menu';
import './js/about_us_modal_window';
import './js/list_of_categories';

const shoppingListLinkEl = document.querySelector('.js-nav-shoppinglistlink');
const mobileShoppingListLinkEl = document.querySelector('.js-mobile-nav-shoppinglistlink');
const mobileShoppingBagIconEl = document.querySelector('.js-mobile-shopping-bag-icon');

shoppingListLinkEl.classList.toggle('selected');
mobileShoppingListLinkEl.classList.toggle('mobile-selected');
mobileShoppingBagIconEl.classList.toggle('mobile-selected');
