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
/* console.log(divContainerEl); */

const objScroll = {
    scrollPosition: 0,
    disabledScroll() {
        objScroll.scrollPosition = window.scrollY;
        document.body.style.cssText = `
        overflow: hidden;
        position: fix;
        top: -${objScroll.scrollPosition}px;
        left: 0;
        height: 100vh;
        width: 100vw;`
    },

    enabledScroll() {
        document.body.style.cssText = '';
        window.scroll({top: objScroll.scrollPosition})
    },
}


/* localStorage.setItem('key', JSON.stringify(arrayLS)) */    // Замінити на загальноприйнятий

divContainerEl.addEventListener('click', onReadId);

function onReadId(event) {
    objScroll.disabledScroll();
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
    
    try {
        const respons = await books.getBookById(book_Id);
        const { author, book_image, description, title, buy_links } = respons.data;
        const randerBox = document.querySelector('.rander-modal');
        randerBox.innerHTML = '';
        const randerModal = `
                <div class="book-info">
                
                <img src="${book_image}" alt="${book_image}" class="img-modal">
                
                <div>
                <p class="modal-name-book">${title}</p>
                <p class="modal-author-book">${author}</p>
                <p class="modal-description-book">${description}</p>
                </div>
                </div>
                <ul class="list-link-market">
                    <li class="item-link-market">
                    <a href="${buy_links[0].url}" class="link-market">
                        <img src="" alt="Logo Amazon" class="img-link-market">
                    </a>
                    </li>
                    <li class="item-link-market">
                    <a href="${buy_links[1].url}" class="link-market">
                        <img src="" alt="Logo Apple books" class="img-link-market">
                    </a>
                    </li>
                    <li class="item-link-market">
                    <a href="${buy_links[2].url}" class="link-market">
                        <img src="" alt="Logo Barnes and noble" class="img-link-market">
                    </a>
                    </li>
                </ul>`

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

btnCloseModal.addEventListener('click', () => {
    objScroll.enabledScroll();
    divBackEl.classList.toggle('is-hidden');
    btnRemoveEl.classList.add('is-hidden');
    btnAddEl.classList.add('is-hidden');
    textEl.classList.add('is-hidden');
    /* randerBox.innerHTML = ''; */
});

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