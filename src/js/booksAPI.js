import axios from "axios";

export class booksAPI {

    // конструктор який зберігає значення категорії для запиту
    constructor() {
        this.category = null;
    }

    // приватні властивості для запиту 
    #BASE_URL = 'https://books-backend.p.goit.global/books/';

    //методи классу
    getBookById(book_Id) {console.log(`${this.#BASE_URL}${book_Id}`); return axios.get(`${this.#BASE_URL}${book_Id}`);}
    getTopBooks() {return axios.get(`${this.#BASE_URL}top-books`);}
    getCategoryList() {return axios.get(`${this.#BASE_URL}categoty-list`);}
    getBooksByCategory() {return axios.get(`${this.#BASE_URL}category?category=${this.category}`)};

    // сеттери
    set categoryBook(newCategory) {this.category = newCategory;};

}