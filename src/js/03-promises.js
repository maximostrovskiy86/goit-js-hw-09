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



  console.log("valuesForm", valuesForm);
  let timerId = null;


  for (let i = 1;  i <= valuesForm.amount; i += 1) {
    timerId = setInterval(() => {
      createPromise(i,  valuesForm.step);
      console.log("valuesForm.step", valuesForm.step)
    }, valuesForm.step)
  }

  // clearInterval(timerId);
}

function createPromise(position, delay) {
  console.log("position", position)
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {

  })

  if (shouldResolve) {
    // Fulfill
    promise.then((value) => {
      console.log( "value", value)
    })
    // console.log("PROMISE", promise)

  } else {
    // Reject
  }
}

refs.form.addEventListener("submit", eventFormFunction);

