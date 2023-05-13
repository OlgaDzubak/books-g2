const openBtn = document.querySelector('.jsOpenBtn');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-button');
const modalForm = document.querySelector('.modalForm');

openBtn.addEventListener('click', onOpenModal);
closeBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
  backdrop.classList.remove('is-hidden');
}
function onCloseModal() {
  backdrop.classList.add('is-hidden');
}

modalForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  // e.preventDefault();
}
