
import './js/list_of_categories'
import './js/support_ukraine'
import './js/best_sellers_books'
import './js/category_books'
import './js/autorization_modal_window'
import './js/book_modal_window'
import './js/mobile_menu'
import './js/isChangeTheme'
import './js/about_us_modal_window'


const homeLinkEl = document.querySelector('.js-nav-homelink');
const mobileHomeLinkEl = document.querySelector('.js-mobile-nav-homelink');
homeLinkEl.classList.toggle('selected');
mobileHomeLinkEl.classList.toggle('mobile-selected');
