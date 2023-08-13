import { Notify } from 'notiflix/build/notiflix-notify-aio';
import amazon from '/src/images/png/amazon.png';
import appleBook from '/src/images/png/apple-books.png';
import Barners from '/src/images/png/barnes-and-noble.png';
import bucketTrash from '/src/images/png/trash-03.png';
import axios from 'axios';
import { countShoppingBook } from './header';

const photoItemsOne = [
  {
    img: amazon,
  },
];

const photoItemsTwo = [
  {
    img: appleBook,
  },
];

const photoItemsThree = [
  {
    img: Barners,
  },
];

const bucketCard = [
  {
    img: bucketTrash,
  },
];

// Список книг та функція слухач на видалення книги
const shoppingListDiv = document.querySelector('.shopping_booklist');
shoppingListDiv.addEventListener('click', removeBook);

// Дів рендеру кнопок пагінації та случач для перемикання сторінок + масив книг які відображати і констнта кількості книг на сторінці
const paginationList = document.querySelector('.shopping_booklist_pagination');
const rows = 3;
let currentPage = 0;

// Ключ локал стореджа та парс даних з локала в масив
const LOCALSTORAGE_KEY = 'orderedBookID';
const orderedBooksId_str = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
// __________________________________________________________________________
// Функція формування та відправлення паралельного запиту
async function fetchBook(arr) {
  try {
    const arrayOfPromises = arr.map(async Id => {
      const response = await axios.get(
        `https://books-backend.p.goit.global/books/${Id}`
      );
      return response;
    });

    // Запускаємо усі проміси паралельно і чекаємо на їх завершення
    return await Promise.all(arrayOfPromises);
  } catch (error) {
    Notify.failure('Sorry, there was a server error, please reload the page');
  }
}

// Функція створення розмітки
async function createMarcup(arr) {
  const markup = arr
    .map(
      ({ _id, book_image, list_name, author, title, description, buy_links }) =>
        `<li class="book_card">
    <div class="book-image-div">
      <img class="book-image" src=${book_image} alt=${title}>
    </div>

    <div class="book_information">
      <p class="book-title">${title}</p>
      <p class="book-category">${list_name}</p>
      <p class="book-description">${
        description ? description : 'No description'
      }</p>
      <p class="book-author">${author}</p>
    </div>

    <div class="closer">
      <button data-id="${_id}" class="closer-btn">
        <img class="image-bucket" src="${bucketCard[0].img}" alt="amazon">
      </button>
    </div>

    <div class="market_places_div">
      <ul class="market_placers_list list">
        <li class="marketplacer_li_two">
          <a href="${buy_links[0].url}" class="marketplacer_li_link link">
            <img class="image-market" src="${
              photoItemsOne[0].img
            }" alt="amazon">  
          </a>
        </li>

        <li class="marketplacer_li">
          <a href="${buy_links[1].url}" class="marketplacer_li_link link">
            <img src="${photoItemsTwo[0].img}" alt="apple-books">      
          </a>
        </li>

        <li class="marketplacer_li">
          <a href="${buy_links[2].url}" class="marketplacer_li_link link">
            <img src="${photoItemsThree[0].img}" alt="barnes-and-noble">
          </a>
        </li>
    </div>
  </li>`
    )
    .join('');

  return markup;
}

// Функція видалення книг з шопінг листа
async function removeBook(event) {
  const { target } = event;

  if (!target.classList.contains('closer-btn')) {
    return;
  } else {
    const bookId = target.dataset.id;
    localStorage.removeItem(LOCALSTORAGE_KEY);
    const bookDelete = orderedBooksId_str.indexOf(bookId);
    orderedBooksId_str.splice(bookDelete, 1);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(orderedBooksId_str));
    countShoppingBook(orderedBooksId_str);
    return await createShoppingList();
  }
}

// Центральна функція, робить перевірки, запит та відмальовує
async function createShoppingList() {
  const response = await fetchBook(orderedBooksId_str);
  countShoppingBook(orderedBooksId_str);
  const shoppingBook = [];

  if (!response.length) {
    shoppingListDiv.innerHTML = '';
    return;
  }

  response.forEach(({ data }) => shoppingBook.push(data));

  if (shoppingBook.length > rows) {
    paginationList.innerHTML = '';
    mainPagination(shoppingBook, rows, currentPage);
  } else {
    shoppingListDiv.innerHTML = await createMarcup(shoppingBook);
  }
}

// Виклик центральної функції для запуску всього процесу
createShoppingList();

// Пагінація усі функції

// Функція яка відмображає три елемента масиву відповідно до сторінки
async function sliceArrayBooks(arr, rows, page) {
  const start = rows * page;
  const end = start + rows;
  const paginateArr = arr.slice(start, end);

  const markup = await createMarcup(paginateArr);

  shoppingListDiv.innerHTML = '';
  shoppingListDiv.innerHTML = markup;
}

// Функція яка створює кнопки пагінації в залежності від розміру масиву
function createPagination(arr, rows, currentPage) {
  const pagesCount = Math.ceil(arr.length / rows);

  if (arr.length <= rows) {
    return (paginationList.innerHTML = '');
  }

  for (let i = 0; i < pagesCount; i += 1) {
    const button = document.createElement('button');
    button.textContent = i + 1;
    button.classList.add('btn-two');

    button.addEventListener('click', event => {
      currentPage = Number(event.target.textContent) - 1;

      sliceArrayBooks(arr, rows, currentPage);
      controlPage(currentPage);
    });

    paginationList.append(button);
  }
}

// Додає клас активної сторінки
function controlPage(page) {
  for (const button of paginationList.children) {
    if (Number(button.textContent) - 1 === page) {
      button.classList.add('active');
    }

    if (Number(button.textContent) - 1 !== page) {
      button.classList.remove('active');
    }
  }
}

function mainPagination(shoppingBook, rows, currentPage) {
  createPagination(shoppingBook, rows, currentPage);
  sliceArrayBooks(shoppingBook, rows, currentPage);
  controlPage(currentPage);
}
