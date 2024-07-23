

//loader script
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

loading();
function loading() {
 setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
 }, 4000);
}

//maintenance Countdown
let days = document.querySelector('days')
let hours = document.querySelector('hours')
let minutes = document.querySelector('minutes')
let seconds = document.querySelector('seconds')

let newyear = new Date("August 5, 2024 00:00:00").getTime();

countdown();
function countdown(){
   let now = new Date().getTime();
   let downtime = newyear - now;

   let second = 1000;
   let minute = second * 60;
   let hour = minute * 60;
   let day = hour * 24;

   let d = math.floor (downtime / day);
   let h = math.floor ((downtime % day)/hour);
   let m = math.floor ((downtime % hour)/minute);
   let s = math.floor ((downtime % minute)/second);

   days.innerHtml = d;
   hours.innnerHtml = h;
   minutes.innerHTML = m;
   seconds.innerHTML = s;

}