const refs = {
  form: document.querySelector('form'),
}

// const amount = null;
const eventFormFunction = (event) => {
  event.preventDefault();

  const target = event.target;

  const valuesForm = {
    step: Number(target[name="step"].value),
    delay: Number(target[name="delay"].value),
    amount: Number(target[name="amount"].value),
  };

  setIntervalEvent(valuesForm)
}

function setIntervalEvent({step, delay, amount}) {
  setTimeout(() => {
  let count = 0;

  let timerId = setInterval(() => {
    count += 1;
    createPromise(count,  delay);

    if (count === amount) {
      clearInterval(timerId);
    }
  }, step);

  }, delay);
}

function createPromise(position, delay) {
  console.log("position", position)
  const shouldResolve = Math.random() > 0.45;

 return new Promise((resolve, reject) => {
   console.log("shouldResolve", shouldResolve)
   if (shouldResolve) {
     // Fulfill
      resolve((resolve) => {
        console.log(resolve)
      })
     // console.log("PROMISE", promise)

   } else {
     // Reject
     reject(reject => {
       console.log(reject)
     })
   }
  })
}

refs.form.addEventListener("submit", eventFormFunction);

