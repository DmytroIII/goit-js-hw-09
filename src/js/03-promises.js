


import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const submitForm = document.querySelector('.form')
const promisesButton = document.querySelector('button[type="submit"]');



function newPromise(position, delay) { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
       
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay })
      }
    }, delay);
  })
}

promisesButton.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  let delay = Number(document.querySelector('input[name=delay]').value);
  const step = Number(document.querySelector('input[name=step]').value);
  const amount = Number(document.querySelector('input[name=amount]').value);

  for (let position = 1; position <= amount; position += 1) {


  newPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

    });

  delay += step;
}

setTimeout(() => { submitForm.reset(); }, delay * 2);
}

/* import { formats } from 'flatpickr/dist/utils/formatting'; */


