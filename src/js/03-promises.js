import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('form'),
}
const eventFormFunction = (event) => {
  event.preventDefault();

  const target = event.target;

  const valuesForm = {
    step: Number(target[name="step"].value),
    delay: Number(target[name="delay"].value),
    amount: Number(target[name="amount"].value),
  };

  setIntervalEvent(valuesForm);
}

function setIntervalEvent({step, delay, amount}) {
  setTimeout(() => {
  let position = 0;

  let timerId = setInterval(() => {
    position += 1;

    // createPromise(count,  delay).then(result => {
    //   console.log("RESULT", result);
    //   console.log(`✅ Fulfilled promise ${count} in ${delay}ms`);
    // },
    //   error => {
    //     console.log(error);
    //   console.log(`❌ Rejected promise ${count} in ${delay}ms`);
    // });

      createPromise(position,  step).then((result) => {
      console.log("RES", result);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${step}ms`);

    }).catch(error => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${step}ms`);
    })

    if (position === amount) {
      clearInterval(timerId);
    }

  }, step);

  }, delay);
}

function createPromise() {
  const shouldResolve = Math.random() > 0.45;

 return new Promise((resolve, reject) => {
   console.log("shouldResolve", shouldResolve)
   if (shouldResolve) {
     // Fulfill
     //  resolve(`✅ Fulfilled promise ${position} in ${step}ms`);
      resolve();
   } else {
     // Reject
     reject()
   }
  })
}

refs.form.addEventListener("submit", eventFormFunction);

