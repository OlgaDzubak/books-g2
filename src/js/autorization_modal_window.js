import Notiflix from 'notiflix';

const openBtn = document.querySelector('.jsOpenBtn');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-button');
const modalForm = document.querySelector('.modalForm');

openBtn.addEventListener('click', onOpenModal);
closeBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
  backdrop.classList.remove('is-hidden');
  console.log('aaa');
}
function onCloseModal() {
  backdrop.classList.add('is-hidden');
}

modalForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const inputName = modalForm.elements.name.value;
  const inputEmail = modalForm.elements.email.value;
  const inputPassword = modalForm.elements.password.value;

  if (inputName === '' || inputEmail === '' || inputPassword === '') {
    return Notiflix.Notify.failure('Please fill in all fields!');
  }
  modalForm.reset();
}
