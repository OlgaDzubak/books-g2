
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import SimpleLightbox from "simplelightbox";
//import "simplelightbox/dist/simple-lightbox.min.css";
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

        if (data.length) {
            if (pageWidth < 768) {
                list.innerHTML = createMarcup(data, 1);
            } else if (pageWidth < 1440 && pageWidth >= 768) {
                list.innerHTML = createMarcup(data, 3);
            } else {
                list.innerHTML = createMarcup(data, 5);
            }
        } else {
            Notify.failure("Sorry, there was a server error, please reload the page");
            return}}
    catch (error) {
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
        </div>`
    }
}

//Функція для списку книг в обраній категорії
async function loadMore(event) {
    event.preventDefault();
        
    const { target } = event;
            
    try {
        if(!target.classList.contains('js-btn-more')) { 
            return;
        } else {
            let category = target.dataset.category.split(" ").join("%20");
            const { data } = await fetchBooks.getBooksByCategory(category);
            list.innerHTML = createMarcupCategoryBook(data);

    // Робимо Scroll на початок сторінки після її завантаження, щоб одразу була видка категорія книжок
    const { height: cardHeight } = list.lastElementChild.getBoundingClientRect();
    window.scrollBy({top: -cardHeight, behavior: "smooth",});
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
    
    

