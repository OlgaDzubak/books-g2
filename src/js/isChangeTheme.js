const checkBoxEl = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
/* import { addDarkClassToModal } from './book_modal_window'; */
// Фукнція що вішає слухача подій на перемикач тем і при кліку якщо є темна тема
//  в локалсторадж - видаляє її, в усіх інших випадках - встановлює темну тему в локалсторадж
const checkLS = localStorage.getItem('theme')
if (checkLS === null || checkLS === '') {
  checkBoxEl.checked = false;
} else {
  checkBoxEl.checked = true;
}
if (document.location.pathname === "/index.html") {
    addDarkClassToModal()
  }


checkBoxEl.addEventListener('change', (event) => {
  event.preventDefault();
  console.dir(checkBoxEl.checked);
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
      /* checkBoxEl.checked = false; */
    }
    else {
      localStorage.setItem('theme', 'dark')
      /* checkBoxEl.checked = true; */
    }
  addDarkClassToHTML()
  if (document.location.pathname === "/index.html") {
    addDarkClassToModal()
  }
  
    });

  // // фукція при умові наявності в локал сторадж темної теми додає класи темної теми,
  //  в усіх інших випадках - видаляє класи темної теми

    export default function addDarkClassToHTML() {
   
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
    }
    else {
      document.querySelector('body').classList.remove('dark');
    // document.querySelector('.themetoggle span').textContent = 'wb_sunny'; modal-light
    }
    } 
    addDarkClassToHTML();

// const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
//   };
  
//   const STORAGE_KEY = 'theme';
  
//   export default function onCheckboxClick(evt) {
//     let value = '';
//     if (evt.currentTarget.checked) {
//       value = Theme.DARK;
//       body.classList.add(value);
//       body.classList.remove(Theme.LIGHT);
//     } else {
//       value = Theme.LIGHT;
//       body.classList.remove(Theme.DARK);
//       body.classList.add(value);
//     }
//     localStorage.setItem(STORAGE_KEY, value);
//   }
  
//   function savedThemeOnReloaded() {
//     const savedValue = localStorage.getItem(STORAGE_KEY);
  
//     if (savedValue) {
//       body.classList.add(savedValue);
//     } else {
//       body.classList.add(Theme.LIGHT);
//     }
  
//     if (savedValue === Theme.DARK) {
//       checkBoxEl.setAttribute('checked', true);
//     }
//   }
//   savedThemeOnReloaded();



function addDarkClassToModal() {
    const modalBookEl = document.querySelector('.modal-container');
    const modalMessageEl = document.querySelector('.modal-message');
    if (localStorage.getItem('theme') === 'dark') {
      
      const arrTagLight = document.querySelectorAll('.modal-text-light');
      modalBookEl.classList.remove('modal-light');
      modalBookEl.classList.add('modal-dark');
      modalMessageEl.classList.remove('message-light');
      modalMessageEl.classList.add('message-dark');
      arrTagLight.forEach((element) => {
        element.classList.remove('modal-text-light');
        element.classList.add('modal-text-dark');
      })
    }
    else {
      
      const arrTagLight = document.querySelectorAll('.modal-text-dark');
      modalBookEl.classList.remove('modal-dark');
      modalBookEl.classList.add('modal-light');
      modalMessageEl.classList.remove('message-dark');
      modalMessageEl.classList.add('message-light');
      arrTagLight.forEach((element) => {
        element.classList.remove('modal-text-dark');
        element.classList.add('modal-text-light');
      })
    // document.querySelector('.themetoggle span').textContent = 'wb_sunny'; modal-light
    }
    }