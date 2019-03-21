export interface IAssociationMap { 
   [key: string]: string;
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
   numbers: string[], minFrequency: number = 1,
   associationMap: IAssociationMap = baseAssociationMap
): {number: string, frequency: number}[] { 

   const standardNumbers = numbers.map((num) => {
      return numberToStandardForm(num, associationMap)
   });

   const frequencyMap: {[num: string]: number} = {};  
   
   standardNumbers.forEach((number) => { 
      frequencyMap[number] = (number in frequencyMap) ?
      frequencyMap[number] + 1 : 1;
   });

   const res: { number: string, frequency: number }[] = [];
   
   for (let number in frequencyMap) {
      const frequency = frequencyMap[number];
      if (frequency <= minFrequency) continue; 

      res.push({number, frequency});
   }

   res.sort((a, b) => { 
      return a.number > b.number ? 1 : -1;
   });

   return res;
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