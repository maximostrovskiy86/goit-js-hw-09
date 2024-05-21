import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('form'),
}
const onStartFunction = (event) => {
  event.preventDefault();

  const target = event.target;

  let valuesForm = {
    step: Number(target[name="step"].value),
    delay: Number(target[name="delay"].value),
    amount: Number(target[name="amount"].value),
    position: 0,
  };

    setTimeout(() => {
      setIntervalFunction(valuesForm)
    }, valuesForm.delay)
}

const setIntervalFunction = ({position, amount, step}) => {

  let timerId = setInterval(() => {

    position += 1;
    createPromise(position, step)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    if (position === amount) {
      console.log('valuesForm.position', position, amount);
      clearInterval(timerId);
    }

  }, step)
}

function createPromise() {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        console.log('createPromiseFunction++++');

        resolve("Success! Value passed to resolve function");
      } else {
        // Reject
        reject("Error! Error passed to reject function");
        console.log('createPromiseFunction----');
      }
  })
}

refs.form.addEventListener('submit', onStartFunction);