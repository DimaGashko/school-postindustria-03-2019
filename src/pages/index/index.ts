import '../_templates/basePage/basePage';
import './index.sass';

import './scripts/schoolPostIndustria2019/minesweeper/minesweeper';
import getFrequencyOfNumbers from './scripts/schoolPostIndustria2019/487--3279/getFrequencyOfNumbers';

const res = getFrequencyOfNumbers([
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
]);

console.log(res);
