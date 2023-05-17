import axios from 'axios';
import { list } from './best_sellers_books';
import { createMarcupCategoryBook } from './best_sellers_books';
import { createBestBook } from './best_sellers_books';
import { booksAPI } from './booksAPI';

const categoryListBox = document.querySelector(".category-list-box");
const categoryNames = document.querySelectorAll(".category-list-item");
//const checkBoxEl = document.querySelector('#theme-switch-toggle');
const URL = 'https://books-backend.p.goit.global/books/category-list';
const fetchBooks = new booksAPI()



// Функція запиту на отримання назв категорій від бекенду
let response = [];
async function fetchCategoryList() {
    try {
        response = await axios.get(`${URL}`);
            return [];
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Формування списку категорій
function createCategoryList() {
    let categoryListHTML = `<h3 id="category-list-title" class="category-list-item">All categories</h3>`;
    response.data.forEach(category => {
        const categoryLink = `<p id="${category.list_name}" class="category-list-item">${category.list_name}</p>`;
        categoryListHTML += categoryLink;
    });
    return categoryListHTML;
};

// Відправлення запиту і формування списку під час завантаження сторінки 
export const getCategoryList = async () => {
    let data = await fetchCategoryList();
    categoryListBox.innerHTML = createCategoryList(data);
};
// getCategoryList();

// // Зміни стилів у списку під час вибору категорії (для світлої і темної тем дизайну)
// categoryListBox.addEventListener("click", choosingCategory);
// function choosingCategory(event) {
//     if (localStorage.getItem('theme') === 'dark') {
//         categoryNames.forEach(name => {
//             name.style.color = "rgba(255, 255, 255, 0.6)";
//             name.style.fontWeight = 400;
//             name.style.textTransform = "lowercase";
//             name.style.textTransform = "capitalize";
//         });
//         event.target.style.color = "#EAC645";
//         event.target.style.fontWeight = 700;
//         event.target.style.textTransform = "uppercase";
//     } else {
//         categoryNames.forEach(name => {
//             name.style.color = "rgba(17, 17, 17, 0.6)";
//             name.style.fontWeight = 400;
//             name.style.textTransform = "lowercase";
//             name.style.textTransform = "capitalize";
//         });
//         event.target.style.color = "#4F2EE8";
//         event.target.style.fontWeight = 700;
//         event.target.style.textTransform = "uppercase";
//     }
// }

categoryListBox.addEventListener('click', loadCategory)

async function loadCategory(event) {

    const {target} = event;

    if(!target.classList.contains('category-list-item')) {
        return
    } else {
        let category = target.id.split(" ").join("%20");
        if (category === 'category-list-title') {
            createBestBook();
        } else {
            const { data } = await fetchBooks.getBooksByCategory(category);
        list.innerHTML = createMarcupCategoryBook(data);
        }

        const { height: cardHeight } = list.lastElementChild.getBoundingClientRect();
        window.scrollBy({top: -cardHeight, behavior: "smooth",});
    }
}
