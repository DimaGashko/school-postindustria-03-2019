import { expect, assert } from 'chai';
import getFrequencyOfNumbers from './getAngleOfClockHands';
import getAngleOfClockHands from './getAngleOfClockHands';

describe('getAngleOfClockHands', () => {
   it('12:00', () => {
      const res = getAngleOfClockHands("12:00");

      expect(res).to.be.equals(0.000);
   });

   it('9:00', () => {
      const res = getAngleOfClockHands("9:00");

      expect(res).to.be.equals(90.000);
   });

   it('8:10', () => {
      const res = getAngleOfClockHands("8:10");

      expect(res).to.be.equals(175.000);
   });
});