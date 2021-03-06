import fillMinesMap from "./fillMinesMap";

(<any>window).fillMinesMap = fillMinesMap;

console.log('%c * * * Minesweeper * * *', 'color: red');

const emptyMaps = [
   [
      '*...',
      '....',
      '.*..',
      '....',
   ], [
      '**...',
      '.....',
      '.*...',
   ],
]

const res = emptyMaps.map((emptyMap, i) => {
   const resultMap = fillMinesMap(emptyMap);
   return `Field #${i + 1}\n${resultMap.join('\n')}`;
}).join('\n\n');

console.log(res);

