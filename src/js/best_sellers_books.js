import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
//import ...


const list = document.querySelector('.best-books')
list.addEventListener('click', loadMore)


const pageWidth = document.documentElement.scrollWidth;
console.log(pageWidth);

async function fetchBooks () {
    return await axios.get('https://books-backend.p.goit.global/books/top-books');
}

async function fetchCategoryBooks (param) {
    return await axios.get(`https://books-backend.p.goit.global/books/category?category=${param}`);
}



function categoryParam(key) {
    let param = null;
    switch (key) {
        case 'Advice How-To and Miscellaneous':
            param = 'Advice%20How-To%20and%20Miscellaneous';
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
            param = 'Childrens%20Middle%20Grade%20Hardcove';
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


function shortTitle(string) {
    if(string.length > 17) {
        return string.slice(0, 17) + '...';
    }
    
    return string
}

function createMarcup(arr, querty) {

    const markup = arr.map(({list_name, books}) => {
        const titleBook = `<p class="theme-book">${list_name}</p>`;
        let book = books.splice(0, querty).map(({_id, book_image, title, author}) => 
        `<li class="item-book" data-id="${_id}">
        <img src="${book_image}" alt="${title}" class="img-book">
        <p class="title-book">${shortTitle(title)}</p>
        <p class="author">${shortTitle(author)}</p>
        </li>`).join('');;

        return `${titleBook}<ul class="list-books">${book}</ul>
        <button type="button" class="button-more js-btn-more" data-category="${list_name}">See more</button>`}).join('');

        return `<h2 class="title-theme-book">Best Sellers Books</h2>${markup}`;
}


async function createBestBook() {
    try {
        const { data } = await fetchBooks();
        console.log(data);
    
        if (!data.length) {
            Notify.failure("Sorry, we don't have any books.")
            return
        } else {
            if (pageWidth >= 1440) {
                list.innerHTML = createMarcup(data, 5);
                return
            }
        
            if (pageWidth < 1440 && pageWidth >= 768) {
                list.innerHTML = createMarcup(data, 3);
                return
            }
        
            if (pageWidth < 768) {
                list.innerHTML = createMarcup(data, 1);
                return
            }
        }
    } catch (error) {
        console.error(error);
        Notify.failure('Пробачте, виникла помилка на сервері');
    }   
}

createBestBook()


function createMarcupCategoryBook(arr) {

        const markup = arr.map(({_id, book_image, author, title}) => 
        `<li class="item-book" data-id="${_id}">
        <img src="${book_image}" alt="${title}" class="img-book">
        <p class="title-book">${shortTitle(title)}</p>
        <p class="author">${shortTitle(author)}</p>
        </li>`
        ).join('')

        return `<h2 class="title-theme-book">${arr[0].list_name}</h2><ul class="list-books">${markup}</ul>`
}



async function loadMore(event) {
    event.preventDefault();

    const { target } = event;

    if(target.classList.contains('js-btn-more')) {
        const category = target.dataset.category.toString();
        const param = categoryParam(category);
        const { data } = await fetchCategoryBooks(param);
        list.innerHTML = createMarcupCategoryBook(data);
    }
}