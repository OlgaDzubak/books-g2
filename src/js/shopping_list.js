/* import createOrderedBooksCards from "../tamplates/book-cards.hbs";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { booksAPI } from "./booksAPI";

const paginationBtn = document.querySelector('div.shopping_booklist_pagination')
const shoppingListDiv = document.querySelector('ul.shopping_booklist');
const firstPage = document.querySelector('div.null-page');
const removeCard =  document.querySelector('div.closer')
shoppingListDiv.innerHTML = "";
const booksApi = new booksAPI();
const LOCALSTORAGE_KEY = "orderedBookID";
//localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(["643282b1e85766588626a080","643282b1e85766588626a081","643282b1e85766588626a082"]));

let orderedBooksId = [];   
const orderedBooksId_str = localStorage.getItem(LOCALSTORAGE_KEY);
if (orderedBooksId_str === null) {
    shoppingListDiv.innerHTML = '';
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
            // return Notify.failure("Sorry, there are no book with that ID");
        }
        shoppingListDiv.innerHTML += createOrderedBooksCards(response.data);
        paginationBtn.innerHTML = markup;
        firstPage.innerHTML = ''   // рендеримо картку книжки

        //перевіряємо чи не пустий опис кнжки
        const description = document.querySelector('.book-description');
        if (description.textContent === ""){
            description.textContent = "No description";
        }
    }catch(error) {                             //якщо запит повернув помилку, обровляємо її (виводимо у консоль)
        console.log(error);
    }
}*/


//import createOrderedBooksCards from "../tamplates/book-cards.hbs";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { booksAPI } from "./booksAPI";
import amazon from '/src/images/png/amazon.png';
import appleBook from '/src/images/png/apple-books.png';
import Barners from '/src/images/png/barnes-and-noble.png';
import bucketTrash from '/src/images/png/trash-03.png'



const photoItemsOne = [
    {
        img:amazon,
    }

]

const photoItemsTwo = [
    {
        img: appleBook,
    }
]

const photoItemsThree = [
    {
        img:Barners,
    }
]

const bucketCard = [
    {
        img:bucketTrash,
    }
]



const paginationBtn = document.querySelector('div.shopping_booklist_pagination')
const shoppingListDiv = document.querySelector('ul.shopping_booklist');
const firstPage = document.querySelector('div.null-page');

const removeCard =  document.querySelector('div.closer')
shoppingListDiv.innerHTML = "";
const booksApi = new booksAPI();
const LOCALSTORAGE_KEY = "orderedBookID";
 localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(["643282b1e85766588626a086","643282b1e85766588626a084","643282b1e85766588626a082"]));

let orderedBooksId = [];   
const orderedBooksId_str = localStorage.getItem(LOCALSTORAGE_KEY);
if (orderedBooksId_str === null) {
    shoppingListDiv.innerHTML = '';
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
        shoppingListDiv.innerHTML += `<li class="book_card">
 
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
    
    <button class="closer-btn">
    <img class="image-bucket" src="${bucketCard[0].img}" alt="amazon">
  
    </button>
 
  </div>

    <div class="market_places_div">
          <ul class="market_placers_list list">

            <li class="marketplacer_li_two">
              <a href="${response.data.buy_links[0].url}" class="marketplacer_li_link link">
                <img class="image-market" src="${photoItemsOne[0].img}" alt="amazon">
                
              </a>
            </li>

            <li class="marketplacer_li">
              <a href="${response.data.buy_links[1].url}" class="marketplacer_li_link link">
                <img src="${photoItemsTwo[0].img}" alt="apple-books">
                
              </a>
            </li>

            <li class="marketplacer_li">
              <a href="${response.data.buy_links[2].url}" class="marketplacer_li_link link">
                <img src="${photoItemsThree[0].img}" alt="barnes-and-noble">
              </a>
            </li>
    
  </div>`
        paginationBtn.innerHTML = markup;
        firstPage.innerHTML = ''   // рендеримо картку книжки

        //перевіряємо чи не пустий опис кнжки
        const description = document.querySelector('.book-description');
        if (description.textContent === ""){
            description.textContent = "No description";
        }
    }catch(error) {                             //якщо запит повернув помилку, обровляємо її (виводимо у консоль)
        console.log(error);
    }
}


/*import createOrderedBooksCards from "../tamplates/book-cards.hbs";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { booksAPI } from "./booksAPI";

const paginationBtn = document.querySelector('div.shopping_booklist_pagination')
const testBtn = document.querySelector('div.test')
const removeBtn = document.querySelector('div.closer')
const shoppingListDiv = document.querySelector('ul.shopping_booklist');
const pagePag = document.querySelector('div.null-page')
shoppingListDiv.innerHTML = "";
const booksApi = new booksAPI();
const LOCALSTORAGE_KEY = "orderedBookID";
//localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(["643282b1e85766588626a084","643282b1e85766588626a081","643282b1e85766588626a082"]));

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
}*/
