const envelope = document.querySelector('.envelope');
const letterClose = document.querySelector('.letter-close');
const letterOpen = document.querySelector('.letter-open');
const letterImage = document.querySelector('.letter_image');
const currentYear = document.querySelector('.js-year');

const openLetter = () => {
  letterClose.style.display = 'none';
  letterOpen.style.display = 'block';
};

const hiddenMessage = () => {
  alert('You catch on quick😏');
  window.open('https://github.com/leesiyun/christmas-card-from-siyun');
};

const getCurrentYear = () => {
  const date = new Date();
  currentYear.innerText = date.getFullYear();
};

const init = () => getCurrentYear();

envelope.addEventListener('click', openLetter);
letterImage.addEventListener('click', hiddenMessage);
init();
