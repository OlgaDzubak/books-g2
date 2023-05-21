import { Notify } from 'notiflix/build/notiflix-notify-aio';
import amazon from '/src/images/png/amazon.png';
import appleBook from '/src/images/png/apple-books.png';
import Barners from '/src/images/png/barnes-and-noble.png';
import bucketTrash from '/src/images/png/trash-03.png'
import axios from "axios";
import { countShoppingBook } from './header';




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



// const paginationBtn = document.querySelector('div.shopping_booklist_pagination')
const shoppingListDiv = document.querySelector('ul.shopping_booklist');
const firstPage = document.querySelector('div.null-page');
shoppingListDiv.addEventListener('click', removeBook)

// Ключ локал стореджа та парс даних з локала в масив
const LOCALSTORAGE_KEY = "orderedBookID";
const orderedBooksId_str = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));


// Функція формування та відправлення паралельного запиту
async function fetchBook(arr) {

  try {
    
  const arrayOfPromises = arr.map(async Id => {
    const response = await axios.get(`https://books-backend.p.goit.global/books/${Id}`);
    return response
  });

  // Запускаємо усі проміси паралельно і чекаємо на їх завершення
  return await Promise.all(arrayOfPromises);
  } catch (error) {
    Notify.failure('Sorry, there was a server error, please reload the page');
  }

}

// Функція створення розмітки 
async function createMarcup(arr) {
  const markup = arr.map(({_id, book_image, list_name, author, title, description = 'No description', buy_links}) => 
  `<li class="book_card">
    <div class="book-image-div">
      <img class="book-image" src=${book_image} alt=${title}>
    </div>

    <div class="book_information">
      <p class="book-title">${title}</p>
      <p class="book-category">${list_name}</p>
      <p class="book-description">${description}</p>
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
            <img class="image-market" src="${photoItemsOne[0].img}" alt="amazon">  
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
  </li>`).join('')

  return markup
}

// Центральна функція, робить перевірки, запит та відмальовує
async function createShoppingList() {
  let shoppingBook = [];
  const response = await fetchBook(orderedBooksId_str);
  countShoppingBook(orderedBooksId_str);
  firstPage.style.display = "none";

if (response.length) {
  response.forEach(({data}) => shoppingBook.push(data));

  console.log(shoppingBook);
  const markup = await createMarcup(shoppingBook);
  shoppingListDiv.innerHTML = markup;
} else {
  shoppingListDiv.innerHTML = '';
  firstPage.style.display = "block";
}
}
  
createShoppingList();

// Функція видалення книг з шопінг листа
async function removeBook(event) {
  const {target} = event;

  if (!target.classList.contains('closer-btn')) {
    return
  } else {
    const Id = target.dataset.id;
    localStorage.removeItem(LOCALSTORAGE_KEY);
    const bookDelete = orderedBooksId_str.indexOf(Id);
    orderedBooksId_str.splice(bookDelete, 1);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(orderedBooksId_str));
    countShoppingBook(orderedBooksId_str)
    return await createShoppingList();
  }
}













//-----------ОПИС ФУНКЦІЙ ---------------------------------------------------------

// const markup = `
//            <button class="btn"><<</button>
//               <button class="btn"><</button>
//               <button class="btn-two">1</button>
//               <button class="btn-two">2</button>
//               <button class="btn-two none">3</button>
//               <button class="btn-many">...</button>
//               <button class="btn-three">></button>
//               <button class="btn-three">>></button>
              
// `

// async function getOrderedBookCard(book_id){
//     console.log("book_id=",book_id);
//     try {
//         const response = await booksApi.getBookById(book_id);  

//         //Якщо ми отримали на запит пустий масив даних (нічого не знайдено), виводимо повідомлення і виходимо з функції
//         if (response.data === 0){
//             return Notify.failure("Sorry, there are no book with that ID");
//         }
//         shoppingListDiv.innerHTML += `<li class="book_card">
 
//   <div class="book-image-div">
//     <img class="book-image" src=${response.data.book_image} alt=${response.data.title}>
//   </div>

//   <div class="book_information">
//     <p class="book-title">${response.data.title}</p>
//     <p class="book-category">${response.data.list_name}</p>
//     <p class="book-description">${response.data.description}</p>
//     <p class="book-author">${response.data.author}</p>
//   </div>

  // <div class="closer">
    
  //   <button class="closer-btn">
  //   <img class="image-bucket" src="${bucketCard[0].img}" alt="amazon">
  
  //   </button>
 
  // </div>

  //   <div class="market_places_div">
  //         <ul class="market_placers_list list">

  //           <li class="marketplacer_li_two">
  //             <a href="${response.data.buy_links[0].url}" class="marketplacer_li_link link">
  //               <img class="image-market" src="${photoItemsOne[0].img}" alt="amazon">
                
  //             </a>
  //           </li>

  //           <li class="marketplacer_li">
  //             <a href="${response.data.buy_links[1].url}" class="marketplacer_li_link link">
  //               <img src="${photoItemsTwo[0].img}" alt="apple-books">
                
  //             </a>
  //           </li>

  //           <li class="marketplacer_li">
  //             <a href="${response.data.buy_links[2].url}" class="marketplacer_li_link link">
  //               <img src="${photoItemsThree[0].img}" alt="barnes-and-noble">
  //             </a>
  //           </li>
    
  // </div>`
//         paginationBtn.innerHTML = markup;
//         firstPage.innerHTML = ''   // рендеримо картку книжки

//         //перевіряємо чи не пустий опис кнжки
//         const description = document.querySelector('.book-description');
//         if (description.textContent === ""){
//             description.textContent = "No description";
//         }
//     }catch(error) {                             //якщо запит повернув помилку, обровляємо її (виводимо у консоль)
//         console.log(error);
//     }
// }

