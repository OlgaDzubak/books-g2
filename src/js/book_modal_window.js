import { booksAPI } from './booksAPI';

const books = new booksAPI;
let book_Id;
/* let arrayLS = []; */   // Замінити на загальноприйнятий
const divContainerEl = document.querySelector('.homepage-books');
const divBackEl = document.querySelector('.back');
const btnCloseModal = document.querySelector('.btn-modal-close');
const btnAddEl = document.querySelector('.add');
const btnRemoveEl = document.querySelector('.remove');
const textEl = document.querySelector('.modal-message');

const objScroll = {
    scrollPosition: 0,
    disabledScroll() {
        objScroll.scrollPosition = window.scrollY;
        document.body.classList.add('block-scroll');

        document.body.style.cssText = `top: -${objScroll.scrollPosition}px;`
    },

    enabledScroll() {
        document.body.classList.remove('block-scroll');
        document.body.style.cssText = `top: 0`
        window.scroll({top: objScroll.scrollPosition})
    },
}


/* localStorage.setItem('key', JSON.stringify(arrayLS)) */    // Замінити на загальноприйнятий

divContainerEl.addEventListener('click', onReadId);

function onReadId(event) {
    
    if (event.target.classList[0] === 'img-book' || event.target.classList[0] === 'owerlay') {
        book_Id = event.target.parentElement.parentElement.dataset.id;
        
        createModalWindow(book_Id);
    } else if (event.target.classList[0] === 'owerlay-content') {
        book_Id = event.target.parentElement.parentElement.parentElement.dataset.id;
        
        createModalWindow(book_Id);
    } else if (event.target.classList[0] === 'title-book' || event.target.classList[0] === 'author') {
        book_Id = event.target.parentElement.dataset.id;
        
        createModalWindow(book_Id);
    }
}

async function createModalWindow(book_Id) {
    objScroll.disabledScroll();
    document.addEventListener("keydown", event => {
        if (event.key === 'Escape') {
            onCloseModal();
        }
    }, {once: true} );
    try {
        const respons = await books.getBookById(book_Id);
        const { author, book_image, description, title, buy_links } = respons.data;
        const randerBox = document.querySelector('.book-img');
        const nameBookEl = document.querySelector('#name-book');
        const authorEl = document.querySelector('#author');
        const descriptionEl = document.querySelector('#description');
        const amazonEl = document.querySelector('#amazon');
        const appleEl = document.querySelector('#apple');
        const barnesEl = document.querySelector('#barnes');
        randerBox.innerHTML = '';
        const randerModal = `<img src="${book_image}" alt="${book_image}" class="img-modal">`
        nameBookEl.textContent = title;
        authorEl.textContent = author;
        if (description === '') {
            descriptionEl.textContent = 'No description';
        } else {
            descriptionEl.textContent = description
        }
        
        amazonEl.attributes[0].value = buy_links[0].url;
        appleEl.attributes[0].value = buy_links[1].url;
        barnesEl.attributes[0].value = buy_links[2].url;


        randerBox.innerHTML = randerModal;
        divBackEl.classList.toggle('is-hidden');
        const dataJson = localStorage.getItem('key');
        const arrLs = JSON.parse(dataJson);
        if (arrLs.includes(book_Id)) {
            btnRemoveEl.classList.remove('is-hidden');
            textEl.classList.remove('is-hidden');
        } else {
            btnAddEl.classList.remove('is-hidden');
        }

    } catch (error) {
        console.error(error);
        Notify.failure('Sorry, there was a server error, please reload the page');
    }
    
};

btnCloseModal.addEventListener('click', onCloseModal);

function onCloseModal() {
    objScroll.enabledScroll();
    divBackEl.classList.toggle('is-hidden');
    btnRemoveEl.classList.add('is-hidden');
    btnAddEl.classList.add('is-hidden');
    textEl.classList.add('is-hidden');
}

btnAddEl.addEventListener('click', addLocalStorage);
btnRemoveEl.addEventListener('click', removeLocalStorage);

function addLocalStorage() {
    btnAddEl.classList.add('is-hidden');
    btnRemoveEl.classList.remove('is-hidden');
    textEl.classList.remove('is-hidden');
    const dataJson = localStorage.getItem('key');
    const arrLs = JSON.parse(dataJson); //book_Id
    arrLs.push(book_Id);
    localStorage.setItem('key', JSON.stringify(arrLs));
};

function removeLocalStorage() {
    btnAddEl.classList.remove('is-hidden');
    btnRemoveEl.classList.add('is-hidden');
    textEl.classList.add('is-hidden');
    const dataJson = localStorage.getItem('key');
    const arrLs = JSON.parse(dataJson);
    let i = arrLs.indexOf(book_Id);
    arrLs.splice(i, 1);
    localStorage.removeItem('key')
    localStorage.setItem('key', JSON.stringify(arrLs));
};
//commit
