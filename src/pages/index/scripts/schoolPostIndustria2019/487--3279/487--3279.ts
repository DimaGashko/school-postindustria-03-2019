import getFrequencyOfNumbers from "./getAngleOfClockHands";

(<any>window).fillMinesMap = getFrequencyOfNumbers;

console.log('%c * * * 487--3279 * * *', 'color: red');

const inputNumbers = [
   [
      '4873279',
      'ITS-EASY',
      '888-4567',
      '3-10-10-10',
      '888-GLOP',
      'TUT-GLOP',
      '967-11-11',
      '310-GINO',
      'F101010',
      '888-1200',
      '-4-8-7-3-2-7-9-',
      '487-3279',
   ]
]

const res = inputNumbers.map((numbers, i) => {
   const result = getFrequencyOfNumbers(numbers);
   if (!result.length) return "No duplicates.";

   return result.map((item) => {
      return `${item.number} ${item.frequency}`;
   }).join('\n');

}).join('\n\n');

console.log(res);

