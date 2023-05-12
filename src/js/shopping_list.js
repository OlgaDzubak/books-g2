import createOrderedBooksCards from "../tamplates/book-cards.hbs";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { booksAPI } from "./booksAPI";

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

async function getOrderedBookCard(book_id){
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
}