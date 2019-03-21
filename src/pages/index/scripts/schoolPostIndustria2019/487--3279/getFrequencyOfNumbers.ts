export interface IAssociationMap { 
   [key: string]: string;
}

export interface IFrequencyOfNumbers {
   [num: string]: number;
}

const baseAssociationMap: IAssociationMap = {
   a: '2', b: '2', c: '2',
	d: '3', e: '3', f: '3',
	g: '4', h: '4', i: '4',
	j: '5', k: '5', l: '5',
	m: '6', n: '6', o: '6',
	p: '7', r: '7', s: '7',
	t: '8', u: '8', v: '8',
	w: '9', x: '9', y: '9'
}

export default function getFrequencyOfNumbers(
   numbers: string[], associationMap: IAssociationMap = baseAssociationMap
): IFrequencyOfNumbers { 

   const standardNumbers = numbers.map(num => numberToStandardForm(num));
   const frequency: IFrequencyOfNumbers = {};  
   
   standardNumbers.forEach((number) => { 
      frequency[number] = (number in frequency) ?
         frequency[number] + 1 : 0;
   });

   return frequency;
}

export function numberToStandardForm(
   strNumber: string, associationMap: IAssociationMap = baseAssociationMap
): string { 

   let number = strNumber.replace(/-/g, '').toLowerCase().split('')
      .map(c => (c in associationMap) ? associationMap[c] : c)
      .join('');
   
   number = `${number.slice(0, 3)}-${number.slice(3)}`;
   return number;
}