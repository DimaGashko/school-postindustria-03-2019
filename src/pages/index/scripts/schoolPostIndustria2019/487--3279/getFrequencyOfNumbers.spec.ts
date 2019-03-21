import { expect, assert } from 'chai';
import getFrequencyOfNumbers from './getFrequencyOfNumbers';

describe('getFrequencyOfNumbers', () => {
   it('Base Test', () => {
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

      const resStr = res.map(item => `${item.number} ${item.frequency}`);

      expect(resStr).to.have.deep.members([
         '310-1010 2',
         '487-3279 4',
         '888-4567 3',
      ]);
   });
});