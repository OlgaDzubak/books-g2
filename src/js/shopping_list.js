
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { booksAPI } from "./booksAPI.js";

const removeBtn = document.querySelector('button.remove')
const test = document.querySelector('button.click')
const shoppingListDiv = document.querySelector('div.shopping_booklist');
const divInfo = document.querySelector('div.shop-boklist')
shoppingListDiv.innerHTML = "";
const booksApi = new booksAPI();
const LOCALSTORAGE_KEY = "orderedBookID";
// localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(["643282b1e85766588626a080","643282b1e85766588626a081","643282b1e85766588626a082"]));

let orderedBooksId = [];   
const orderedBooksId_str = localStorage.getItem(LOCALSTORAGE_KEY);
if (orderedBooksId_str  === null){
    shoppingListDiv.innerHTML = '<p class="ampty-shopping-list-msg">There is no books in the shopping list yet. Pleas choose books in the catalogue.</p>';
} else{
    orderedBooksId = JSON.parse(orderedBooksId_str);
    orderedBooksId.forEach(id => { getOrderedBookCard(id);});
}

//-----------ОПИС ФУНКЦІЙ ---------------------------------------------------------
test.addEventListener('click', getOrderedBookCard)
removeBtn.addEventListener('click', removeInfo)

function removeInfo() {
  divInfo.innerHTML = ''
  shoppingListDiv.innerHTML = '<p class="ampty-shopping-list-msg">There is no books in the shopping list yet. Pleas choose books in the catalogue.</p>';
}

async function getOrderedBookCard(book_id) {
  shoppingListDiv.innerHTML = ''
  divInfo.innerHTML += `<div class="list">
            <img src="" alt="photo">
            <div class="amas">
            <h3 class="text-one"> I will find you</h3>
            <p class="text-two">KHJKH</p>
            <p class="text-three">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away
            from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke
            suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>
            <p class="text-four">Harlan Coben</p>
            <a class="link link-one" href="">
                <img src="./img/image-1.jpg" alt="image-1">
            </a>
            <a class="link link-two" href="">
                <img src="./img/image-2.jpg" alt="image-2">
            </a>
            <a class="link link-three" href="">
                <img src="./img/image-3.jpg" alt="image-3">
            </a>
            <button class="btn-box">#</button>
            </div>`
  console.log("book_id=", book_id);
  

    try {
        const response = await booksApi.getBookById(book_id);  

        //Якщо ми отримали на запит пустий масив даних (нічого не знайдено), виводимо повідомлення і виходимо з функції
        if (response.data === 0){
            return Notify.failure("Sorry, there are no book with that ID");
      }
       
       shoppingListDiv.innerHTML += createOrderedBooksCards(response.data);    // рендеримо картку книжки

        //перевіряємо чи не пустий опис кнжки
        const description = document.querySelector('.book-description');
        if (description.textContent === ""){
            description.textContent = "No description";
        }
    }catch(error) {                             //якщо запит повернув помилку, обровляємо її (виводимо у консоль)
        console.log(error);
    }
}




















/*import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { booksAPI } from "./booksAPI.js";

const shoppingListDiv = document.querySelector('div.shopping_booklist');
const testBtn = document.querySelector('button.click')
const btnTest = document.querySelector('button.cleck')
shoppingListDiv.innerHTML = "";
const booksApi = new booksAPI();
const LOCALSTORAGE_KEY = "orderedBookID";*/


/*localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(["643282b1e85766588626a080", "643282b1e85766588626a081", "643282b1e85766588626a082"]));


let orderedBooksId = [];   
const orderedBooksId_str = localStorage.getItem(LOCALSTORAGE_KEY);
if (orderedBooksId_str  === null){
  shoppingListDiv.innerHTML = '<p class="ampty-shopping-list-msg">There is no books in the shopping list yet. Pleas choose books in the catalogue.</p>';
} else {
  shoppingListDiv.innerHTML = `<div class="list">
            <img src="" alt="photo">
            <div class="amas">
            <h3 class="text-one"> I will find you</h3>
            <p class="text-two">KHJKH</p>
            <p class="text-three">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away
            from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke
            suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>
            <p class="text-four">Harlan Coben</p>`
    orderedBooksId = JSON.parse(orderedBooksId_str);
    orderedBooksId.forEach(id => { getOrderedBookCard(id);});
}*/




/*testBtn.addEventListener('click', () => {
  // додати розмітку HTML для кожної книги, що знаходиться в LocalStorage
  shoppingListDiv.innerHTML += `<div class="list">
            <img src="" alt="photo">
            <div class="amas">
            <h3 class="text-one"> ${booksApi.title}</h3>
            <p class="text-two">${booksApi.list_name}</p>
            <p class="text-three">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away
            from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke
            suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>
            <p class="text-four">Harlan Coben</p>`
  const orderedBooksId_str = localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(["643282b1e85766588626a080", "643282b1e85766588626a081", "643282b1e85766588626a082"]));;
  if (orderedBooksId_str !== null){
    const orderedBooksId = JSON.parse(orderedBooksId_str);
    orderedBooksId.forEach(id => { getOrderedBookCard(id);});
  }
});*/

/*testBtn.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) {
    // додати розмітку HTML для кожної книги, що знаходиться в LocalStorage
    shoppingListDiv.innerHTML += `<div class="list">
              <img src="" alt="photo">
              <div class="amas">
              <h3 class="text-one"> I will find you</h3>
              <p class="text-two">KHJKH</p>
              <p class="text-three">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away
              from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke
              suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>
              <p class="text-four">Harlan Coben</p>`;

    const orderedBooksId_str = localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(["643282b1e85766588626a080", "643282b1e85766588626a081", "643282b1e85766588626a082"]));
    if (orderedBooksId_str !== null){
      const orderedBooksId = JSON.parse(orderedBooksId_str);
      orderedBooksId.forEach(id => { getOrderedBookCard(id);});
    }
  }
});*/

/*
// додати обробник події для кнопки "прибрати"
btnTest.addEventListener('click', () => {
  // видалити розмітку HTML для кожної книги, що знаходиться в LocalStorage
  shoppingListDiv.innerHTML = '<p class="empty-shopping-list-msg">There are no books in the shopping list yet. Please choose books in the catalogue.</p>';
});*/



//-----------ОПИС ФУНКЦІЙ ---------------------------------------------------------

/*async function getOrderedBookCard(book_id){
    console.log("book_id=",book_id);
    try {
        const response = await booksApi.getBookById(book_id);  

        //Якщо ми отримали на запит пустий масив даних (нічого не знайдено), виводимо повідомлення і виходимо з функції
        if (response.data === 0){
            return Notify.failure("Sorry, there are no book with that ID");
        }
        shoppingListDiv.innerHTML += createOrderedBooksCards(response.data);    // рендеримо картку книжки

        //перевіряємо чи не пустий опис кнжки
        const description = document.querySelector('.book-description');
        if (description.textContent === ""){
            description.textContent = "No description";
        }
    }catch(error) {                             //якщо запит повернув помилку, обровляємо її (виводимо у консоль)
        console.log(error);
    }
}*/