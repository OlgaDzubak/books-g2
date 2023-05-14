import axios from 'axios';

const categoryListBox = document.querySelector(".category-list-box");
const categoryNames = document.querySelectorAll(".category-list-item");
const URL = 'https://books-backend.p.goit.global/books/category-list';

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
function createCategoryList() {
    let categoryListHTML = `<h2 id="category-list-title" class="category-list-item">All categories</h2>`;
    response.data.forEach(category => {
        const categoryLink = `<a><p id="${category.list_name}" class="category-list-item">${category.list_name}</p></a>`;
        categoryListHTML += categoryLink;
    });
    return categoryListHTML;
};

const getCategoryList = async () => {
    let data = await fetchCategoryList();
    categoryListBox.innerHTML = createCategoryList(data);
};
getCategoryList();

categoryListBox.addEventListener("click", choosingCategory);
function choosingCategory(event) {
    const categoryNames = document.querySelectorAll(".category-list-item");
    categoryNames.forEach(name => {
        name.style.color = "rgba(17, 17, 17, 0.6)";
        name.style.fontWeight = 400;
        name.style.textTransform = "lowercase";
        name.style.textTransform = "capitalize";
    });
    event.target.style.color = "#4F2EE8";
    event.target.style.fontWeight = 700;
    event.target.style.textTransform = "uppercase";
}