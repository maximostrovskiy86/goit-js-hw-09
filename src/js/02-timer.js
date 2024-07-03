import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputTime: document.querySelector('input#datetime-picker'),
  form: document.querySelector('.holder-form'),
  timer: document.querySelector('.timer'),
  startButton: document.querySelector('button[data-start]'),
  second: document.querySelector('span[data-seconds]'),
  minutes: document.querySelector('span[data-minutes]'),
  hours: document.querySelector('span[data-hours]'),
  days: document.querySelector('span[data-days]'),
};

let validateDate = null;
let endTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  intervalId: null,
  isActive: false,

  onClose(selectedDates) {
    const checkedAttrDisabled = refs.startButton.hasAttribute('disabled');

    if (this.isActive) {
      console.log('ISACTIVE');
      return;
    }

    this.isActive = true;

    if (checkedAttrDisabled) {
      endTime = selectedDates[0].getTime();
      const currentDate = Date.now();
      validateDate = endTime > currentDate;
    }

    if (!validateDate) {
      Notify.warning('Please choose a date in the future');
      return;
    }

    if (validateDate && refs.startButton.getAttribute('disabled') === 'disabled') {
      refs.startButton.removeAttribute('disabled');
      return;
    }

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = endTime - currentTime;

      if (deltaTime < 1000) {
        this.stopTimer();
      }

      console.log('deltaTime', deltaTime);
      const time = convertMs(deltaTime);
      updateClockFace(time);
      console.log('time', time);
    }, 1000);
  },

  stopTimer() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startButton.addEventListener('click', () => {
  options.onClose();
  refs.startButton.setAttribute('disabled', 'disabled');
});

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.second.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

flatpickr('input#datetime-picker', options);




