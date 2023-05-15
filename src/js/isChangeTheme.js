const checkBoxEl = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

// Фукнція що вішає слухача подій на перемикач тем і при кліку якщо є темна тема
//  в локалсторадж - видаляє її, в усіх інших випадках - встановлює темну тему в локалсторадж

checkBoxEl.addEventListener('change', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    }
    else {
    localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
    });

  // // фукція при умові наявності в локал сторадж темної теми додає класи темної теми,
  //  в усіх інших випадках - видаляє класи темної теми

    export default function addDarkClassToHTML() {
   
    if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('body').classList.add('dark');
    }
    else {
    document.querySelector('body').classList.remove('dark');
    // document.querySelector('.themetoggle span').textContent = 'wb_sunny';
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
