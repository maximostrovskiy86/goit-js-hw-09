const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodySelector: document.querySelector('body'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let timerId = null;


const startChangeColorBody = () => {


  timerId = setInterval (() => {
    refs.bodySelector.style.backgroundColor = getRandomHexColor();
  }, 1000)

  refs.startBtn.setAttribute('disabled', 'true');
}



const stopChangeColorBody = () => {
  clearTimeout(timerId);
  refs.startBtn.removeAttribute('disabled');
}

refs.startBtn.addEventListener('click', startChangeColorBody);
refs.stopBtn.addEventListener('click', stopChangeColorBody)