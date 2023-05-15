import Notiflix from 'notiflix';

const openBtn = document.querySelector('.jsOpenBtn');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-button');
const modalForm = document.querySelector('.modalForm');

openBtn.addEventListener('click', onOpenModal);
closeBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyDown);
  backdrop.classList.remove('is-hidden');
}
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyDown);
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

function onEscKeyDown(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
