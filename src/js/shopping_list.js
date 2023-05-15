/* import createOrderedBooksCards from "../tamplates/book-cards.hbs";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { booksAPI } from "./booksAPI";

const paginationBtn = document.querySelector('div.shopping_booklist_pagination')
const shoppingListDiv = document.querySelector('ul.shopping_booklist');
shoppingListDiv.innerHTML = "";
const booksApi = new booksAPI();
const LOCALSTORAGE_KEY = "orderedBookID";
localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(["643282b1e85766588626a080","643282b1e85766588626a081","643282b1e85766588626a082"]));

let orderedBooksId = [];   
const orderedBooksId_str = localStorage.getItem(LOCALSTORAGE_KEY);
if (orderedBooksId_str  === null){
    shoppingListDiv.innerHTML = '<p class="ampty-shopping-list-msg">There is no books in the shopping list yet. Pleas choose books in the catalogue.</p>';
} else{
    orderedBooksId = JSON.parse(orderedBooksId_str);
    orderedBooksId.forEach(id => { getOrderedBookCard(id);});
} 


//-----------ОПИС ФУНКЦІЙ ---------------------------------------------------------

const markup = `
           <button class="btn"><<</button>
              <button class="btn"><</button>
              <button class="btn-two">1</button>
              <button class="btn-two">2</button>
              <button class="btn-two none">3</button>
              <button class="btn-many">...</button>
              <button class="btn-three">></button>
              <button class="btn-three">>></button>
`

async function getOrderedBookCard(book_id){
    console.log("book_id=",book_id);
    try {
        const response = await booksApi.getBookById(book_id);  

        //Якщо ми отримали на запит пустий масив даних (нічого не знайдено), виводимо повідомлення і виходимо з функції
        if (response.data === 0){
            return Notify.failure("Sorry, there are no book with that ID");
        }
        shoppingListDiv.innerHTML += createOrderedBooksCards(response.data);
        paginationBtn.innerHTML = markup;   // рендеримо картку книжки

        //перевіряємо чи не пустий опис кнжки
        const description = document.querySelector('.book-description');
        if (description.textContent === ""){
            description.textContent = "No description";
        }
    }catch(error) {                             //якщо запит повернув помилку, обровляємо її (виводимо у консоль)
        console.log(error);
    }
}*/



import createOrderedBooksCards from "../tamplates/book-cards.hbs";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { booksAPI } from "./booksAPI";

const paginationBtn = document.querySelector('div.shopping_booklist_pagination')
const testBtn = document.querySelector('div.test')
const shoppingListDiv = document.querySelector('ul.shopping_booklist');
const pagePag = document.querySelector('div.null-page')
shoppingListDiv.innerHTML = "";
const booksApi = new booksAPI();
const LOCALSTORAGE_KEY = "orderedBookID";
localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(["643282b1e85766588626a080","643282b1e85766588626a081","643282b1e85766588626a082"]));

let orderedBooksId = [];   
const orderedBooksId_str = localStorage.getItem(LOCALSTORAGE_KEY);
if (orderedBooksId_str  === null){
    shoppingListDiv.innerHTML = '<p class="ampty-shopping-list-msg">There is no books in the shopping list yet. Pleas choose books in the catalogue.</p>';
} else{
    orderedBooksId = JSON.parse(orderedBooksId_str);
    orderedBooksId.forEach(id => { getOrderedBookCard(id);});
} 

//-----------ОПИС ФУНКЦІЙ ---------------------------------------------------------

const markup = `<div class="shopping_booklist_pagination">
           <button class="btn"><<</button>
              <button class="btn"><</button>
              <button class="btn-two">1</button>
              <button class="btn-two">2</button>
              <button class="btn-two none">3</button>
              <button class="btn-many">...</button>
              <button class="btn-three">></button>
              <button class="btn-three">>></button>
          </div>`

async function getOrderedBookCard(book_id) {
    console.log("book_id=", book_id);
    try {
        const response = await booksApi.getBookById(book_id);

        //Якщо ми отримали на запит пустий масив даних (нічого не знайдено), виводимо повідомлення і виходимо з функції
        if (response.data === 0) {
            return Notify.failure("Sorry, there are no book with that ID");
        }
        shoppingListDiv.innerHTML = '';
        paginationBtn.innerHTML = '';    // рендеримо картку книжки

         // Функція для оновлення розмітки при кліку на кнопку
    function updateMarkup() {
        shoppingListDiv.innerHTML += createOrderedBooksCards(response.data);
        pagePag.innerHTML = markup;
        
    }

    // Додаємо обробник події для кнопки
    testBtn.addEventListener('click', updateMarkup);
  } catch (error) {
    // якщо запит повернув помилку, виводимо її (виводимо у консоль)
    console.log(error);
  }
}

// Додаємо обробник події для кнопки
testBtn.addEventListener('click', getOrderedBookCard);
    





/*import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { booksAPI } from "./booksAPI";


const testBtn = document.querySelector('div.test')
const shoppingListDiv = document.querySelector('ul.shopping_booklist');
const pagePag = document.querySelector('div.null-page')
shoppingListDiv.innerHTML = "";
const booksApi = new booksAPI();
const LOCALSTORAGE_KEY = "orderedBookID";
// localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(["643282b1e85766588626a080","643282b1e85766588626a081","643282b1e85766588626a082"]));

let orderedBooksId = [];   
const orderedBooksId_str = localStorage.getItem(LOCALSTORAGE_KEY);
if (orderedBooksId_str  === null){
    shoppingListDiv.innerHTML = '<p class="ampty-shopping-list-msg">There is no books in the shopping list yet. Please choose books in the catalogue.</p>';
} else {
    orderedBooksId = JSON.parse(orderedBooksId_str);
    orderedBooksId.forEach(id => { getOrderedBookCard(id);});
} 

//-----------ОПИС ФУНКЦІЙ ---------------------------------------------------------




async function getOrderedBookCard(book_id) {
  console.log("book_id=", book_id);
  try {
    const response = await booksApi.getBookById(book_id);

    // Якщо ми отримали на запит пустий масив даних (нічого не знайдено), виводимо повідомлення і виходимо з функції
    if (response.data === 0) {
      return Notify.failure("Sorry, there are no book with that ID");
    }

    const bookCardHTML = `
      <li class="book_card">
        <div class="book-image-div">
          <img class="book-image" src=${response.data.book_image} alt=${response.data.title}>
        </div>
        <div class="book_information">
          <p class="book-title">${response.data.title}</p>
          <p class="book-category">${response.data.list_name}</p>
          <p class="book-description">${response.data.description}</p>
          <p class="book-author">${response.data.author}</p>
        </div>
        <div class="closer">
          <button class="closer-btn">#</button>
        </div>
      </li>
    `;

    shoppingListDiv.innerHTML = ''; // рендеримо картку книжки

    // Функція для оновлення розмітки при кліку на кнопку
    function updateMarkup() {
        shoppingListDiv.innerHTML += bookCardHTML;
        pagePag.innerHTML = '';
    }

    // Додаємо обробник події для кнопки
    testBtn.addEventListener('click', updateMarkup);
  } catch (error) {
    // якщо запит повернув помилку, виводимо її (виводимо у консоль)
    console.log(error);
  }
}

// Додаємо обробник події для кнопки
testBtn.addEventListener('click', getOrderedBookCard);*/



/*async function getOrderedBookCard(book_id) {
    console.log("book_id=",book_id);
    try {
        const response = await booksApi.getBookById(book_id);  

        //Якщо ми отримали на запит пустий масив даних (нічого не знайдено), виводимо повідомлення і виходимо з функції
        if (response.data === 0) {
            return Notify.failure("Sorry, there are no book with that ID");
        }
        
        const bookCardHTML = `
            <li class="book_card">
 
  <div class="book-image-div">
    <img class="book-image" src=${response.data.book_image} alt=${response.data.title}>
  </div>

  <div class="book_information">
    <p class="book-title">${response.data.title}</p>
    <p class="book-category">${response.data.list_name}</p>
    <p class="book-description">${response.data.description}</p>
    <p class="book-author">${response.data.author}</p>
  </div>
        <div class="closer">
            <button class="closer-btn">#</button>
          </div>
            </li>
        `;
        
        shoppingListDiv.innerHTML = '';  // рендеримо картку книжки

        function markup(arr) {
            if (response.data === getOrderedBookCard) {
                shoppingListDiv.innerHTML = bookCardHTML;
            }
            testBtn.addEventListener('click', markup)
        }
    } catch(error) {
        // якщо запит повернув помилку, виводимо її (виводимо у консоль)
        console.log(error);
    }
}  */          
