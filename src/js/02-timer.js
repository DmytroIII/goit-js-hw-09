


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "notiflix/dist/notiflix-3.2.5.min.css";
import Notiflix from 'notiflix';

const buttonStart = document.querySelector('button[data-start]');
const inputDate = document.querySelector('input[type="text"]');
buttonStart.disabled = true;

const dateDays = document.querySelector('span[data-days]');
const dateHours = document.querySelector('span[data-hours]');
const dateMinutes = document.querySelector('span[data-minutes]');
const dateSeconds = document.querySelector('span[data-seconds]');

let ms;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(inputDate) {
    
  let currentDate = new Date(); 
if (inputDate[0] < currentDate ) {
      
  buttonStart.disabled = true;
  clearInterval(timerId);
  dateDays.textContent = "00";
  dateHours.textContent = "00";
  dateMinutes.textContent = "00";
  dateSeconds.textContent = "00";
  
  Notiflix.Report.failure('Wrong date!', 'Please choose a date in the future', 'Ok');

  setTimeout ( () => {
  document.location.reload();
  }, 4000);
  return;
    } 
    
  console.log("currentDate: ", currentDate);
  console.log('inputDate[0] : ', inputDate[0]);
 
  buttonStart.disabled = false;
   
  buttonStart.addEventListener('click', onClick);
  },
};

const dataCount = new flatpickr(inputDate, options);


function onClick() { 
 timerId = setInterval( () => {

        let currentDate = new Date();
        ms = dataCount.selectedDates[0] - currentDate;  
        console.log('time to count, ms =', ms);

        const timeForCounter = convertMs(ms);

        console.log("It's timeForCounter inside setInterval :", timeForCounter);

        dateDays.textContent = addLeadingZero(timeForCounter.days,  0);
        dateHours.textContent = addLeadingZero(timeForCounter.hours, 0);
        dateMinutes.textContent = addLeadingZero(timeForCounter.minutes, 0);
        dateSeconds.textContent = addLeadingZero(timeForCounter.seconds, 0);

        buttonStart.disabled = true;

        if (timeForCounter.days === 0 && timeForCounter.hours === 0 
            && timeForCounter.minutes === 0 && timeForCounter.seconds === 0) {
         
           clearInterval(timerId);
           setTimeout ( () => {
                document.location.reload();
           }, 10000);
        }
    }, 1000);
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value, addingSymbols) {
    return value.toString().padStart(2, addingSymbols)
}

console.log(convertMs(3000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

