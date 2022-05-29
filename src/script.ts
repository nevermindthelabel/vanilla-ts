///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal') as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;
const btnCloseModal = document.querySelector(
  '.btn--close-modal'
) as HTMLButtonElement;
const btnsOpenModal = document.querySelectorAll('.btn--show-modal') as NodeList;

const openModal = function (e: Event) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button =>
  button.addEventListener('click', (e: Event) => openModal(e))
);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// header cookie message
const header = document.querySelector('header');
const cookieMessage = document.createElement('div');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML = `We use cookies for improved functionality and analytics.
<button class="btn btn--close-cookie">Got it!</button>
`;
header?.append(cookieMessage);

document
  .querySelector('.btn--close-cookie')
  ?.addEventListener('click', function () {
    cookieMessage.remove();
  });

cookieMessage.style.width = '100vw';
cookieMessage.style.backgroundColor = '#37383d';
cookieMessage.style.height = `${
  parseFloat(getComputedStyle(cookieMessage).height) + 30
}px`;
