import getAngleOfClockHands from "./getAngleOfClockHands";

(<any>window).getAngleOfClockHands = getAngleOfClockHands;

console.log('%c * * * Clock Hands * * *', 'color: red');

const inputTimes = [
   "12:00",
   "9:00",
   "8:10",
]

const res = inputTimes.map((time, i) => {
   const angle = getAngleOfClockHands(time);
   return angle.toFixed(3);
}).join('\n');

console.log(res);

