
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { booksAPI } from './booksAPI';
//import ...

// Змінна що зберігає дів куди добавляти розмітку
const list = document.querySelector('.homepage-books')
console.log(list);
list.addEventListener('click', loadMore)
const fetchBooks = new booksAPI();

// Функція для розмітки бест бук
function createMarcup(arr, querty) {

    const markup = arr.map(({list_name, books}) => {
        const titleBook = `<p class="theme-book">${list_name}</p>`;

        if (books.length) {
            let book = books.splice(0, querty).map(({_id, book_image, title, author}) => 
            `<li class="item-book" data-id="${_id}">
            <div class="img-owerlay">
            <img src="${book_image}" alt="${title}" class="img-book">
            <div class="owerlay">
                <p class="owerlay-content">quick view</p>
            </div>
            </div>
            <p class="title-book">${shortTitle(title, 17)}</p>
            <p class="author">${shortTitle(author, 34)}</p>
            </li>`).join('');

            return `<div class="best-book-container">${titleBook}<ul class="list-books">${book}</ul>
            <button type="button" class="button-more js-btn-more" data-category="${list_name}">See more</button></div>`
        } else {
            return `<div class="off-books"><p class="off-books-text">Sorry, there are no books in this category, please choose another category</p></div>`
        }}).join('');

        return `<h2 class="title-theme-book">Best Sellers <span class="last-word-color">Books</span></h2>${markup}`;
}

// Початкова функція яка робить запит та промальовує бест бук
async function createBestBook() {
    const pageWidth = document.documentElement.scrollWidth;

    try {
        const { data } = await fetchBooks.getTopBooks();
        console.log(data);

        console.log(data);

        if (data.length) {
            if (pageWidth < 768) {
                list.innerHTML = createMarcup(data, 1);
            } else if (pageWidth < 1440 && pageWidth >= 768) {
                list.innerHTML = createMarcup(data, 3);
            } else {
                list.innerHTML = createMarcup(data, 5);
            }
        }
    } catch (error) {
        console.error(error);
        Notify.failure('Sorry, there was a server error, please reload the page');
    }   
}
// Виклик даної функції для промальовки всього при завантажені сторінки
createBestBook()

// Функція для розмітки книг за категорією
function createMarcupCategoryBook(arr) {
if(arr.length){
        const markup = arr.map(({_id, book_image, author, title}) => 
        `<li class="item-book" data-id="${_id}">
        <div class="img-owerlay">
        <img src="${book_image}" alt="${title}" class="img-book">
        <div class="owerlay">
        <p class="owerlay-content">quick view</p>
        </div>
        </div>
        <p class="title-book">${shortTitle(title, 17)}</p>
        <p class="author">${shortTitle(author, 34)}</p>
        </li>`
        ).join('')

        return `<h2 class="title-theme-book">${lastBlueWord(arr[0].list_name)}</h2><ul class="list-books category">${markup}</ul>`
    } else {
        return `<div class="off-books">
        <p class="off-books-text">Sorry, there are no books in this category, please choose another category</p>
        <div class="container-img-no-books"></div>
        </div>`
    }
}

// Функція яка считує датасет кнопки провіряє його та дає параметер запиту за категорією
function categoryParam(key) {
    let param = null;
    switch (key) {
        case 'Advice How-To and Miscellaneous':
            param = 'Advice%20How-To%20and%20Miscellaneou';
            break;
        case 'Audio Fiction':
            param = 'Audio%20Fiction';
            break;
        case 'Audio Nonfiction':
            param = 'Audio%20Nonfiction';
            break;
        case 'Trade Fiction Paperback':
            param = 'Trade%20Fiction%20Paperback';
            break;    
        case 'Series Books':
            param = 'Series%20Books';
            break;
        case 'Picture Books':
            param = 'Picture%20Books';
            break;
        case 'Hardcover Fiction':
            param = 'Hardcover%20Fiction';
            break;
        case 'Hardcover Nonfiction':
            param = 'Hardcover%20Nonfiction';
            break;
        case 'Paperback Nonfiction':
            param = 'Paperback%20Nonfiction';
            break;
        case 'Childrens Middle Grade Hardcover':
            param = 'Childrens%20Middle%20Grade%20Hardcover';
            break;
        case 'Young Adult Hardcover':
            param = 'Young%20Adult%20Hardcover';
            break;
        case 'Combined Print and E-Book Nonfiction':
            param = 'Combined%20Print%20and%20E-Book%20Nonfiction';
            break;
        case 'Business Books':
            param = 'Business%20Books';
            break;
        case 'Combined Print and E-Book Fiction':
            param = 'Combined%20Print%20and%20E-Book%20Fiction';
            break;
        case 'Graphic Books and Manga':
            param = 'Graphic%20Books%20and%20Manga';
            break;
        case 'Mass Market Monthly':
            param = 'Mass%20Market%20Monthly';
            break;
        case 'Middle Grade Paperback Monthly':
            param = 'Middle%20Grade%20Paperback%20Monthly';
            break;
        case 'Young Adult Paperback Monthly':
            param = 'Young%20Adult%20Paperback%20Monthly';
            break;
        default:
            console.log('не знайшли=(');
            break;
    }

    return param
}

// Функція для здійснення запиту за категорією при нажатті на кнопку load more яка діє за зчиткою датасету з кнопки 
async function loadMore(event) {
    event.preventDefault();

    const { target } = event;
    
    try {
        if(!target.classList.contains('js-btn-more')) {
            return
        } else {
            const param = target.dataset.category.toString();
            fetchBooks.category = categoryParam(param);
            const { data } = await fetchBooks.getBooksByCategory();
            list.innerHTML = createMarcupCategoryBook(data);
        }
    } catch (error) {
        console.error(error);
        Notify.failure('Sorry, there was a server error, please reload the page');
    }
}

// Функція що скорочує title i author на книгаг до вказаного числа символів та додає три крапки в кінці
function shortTitle(string, value) {
    if(string.length > Number(value)) {
        return string.slice(0, Number(value)) + '...';
    }
    
    return string
}

// Функція що робить синім кольором останнє слово 
function lastBlueWord(string) {
    const arrWord = string.split(" ");
    const firstWord = arrWord.splice(0, arrWord.length - 1);
    return `${firstWord.join(' ')} <span class="last-word-color">${arrWord.join('')}</span>`
}