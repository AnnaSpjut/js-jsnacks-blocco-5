// /Snack 1///
// 1. creo un array di objects
// 2. con forEach calcolo la somma del peso degli objects

const zucchine = [
  {
    nome:'Zucchina 1',
    varietà: 'verde',
    peso: 200,
    lunghezza: 10
  },
  {
    nome:'Zucchina 2',
    varietà: 'tonda',
    peso: 140,
    lunghezza: 8
  },
  {
    nome:'Zucchina 3',
    varietà: 'siciliana',
    peso: 80,
    lunghezza: 24
  },
  {
    nome:'Zucchina 4',
    varietà: 'gialla',
    peso: 95,
    lunghezza: 18
  },
  {
    nome:'Zucchina 5',
    varietà: 'romanesca',
    peso: 175,
    lunghezza: 25
  },
  {
    nome:'Zucchina 6',
    varietà: 'fiorentina',
    peso: 190,
    lunghezza: 12
  },
  {
    nome:'Zucchina 7',
    varietà: 'trombetta',
    peso: 95,
    lunghezza: 19
  },
  {
    nome:'Zucchina 8',
    varietà: 'napoletana',
    peso: 120,
    lunghezza: 29
  },
  {
    nome:'Zucchina 9',
    varietà: 'chiara',
    peso: 80,
    lunghezza: 26
  },
  {
    nome:'Zucchina 10',
    varietà: 'nera',
    peso: 85,
    lunghezza: 9
  }
];

let sum = 0

zucchine.forEach(element => {
  sum += element.peso;
});

console.log(sum);

// Snack 2 ///

let zucchineSmallSum = 0
let zucchineBigSum = 0

const zucchineSmall = zucchine.filter( (zucchine) => 
  zucchine.lunghezza < 15);
console.log(zucchineSmall);

const zucchineBig = zucchine.filter( (zucchine) => 
  zucchine.lunghezza >=15);
console.log(zucchineBig);

zucchineSmall.forEach(element => {
  zucchineSmallSum += element.peso;
});
console.log(zucchineSmallSum);

zucchineBig.forEach(element => {
  zucchineBigSum += element.peso;
});
console.log(zucchineBigSum);


// Snack 3 ///

const str = 'Ciao'
console.log(str.split('').reverse().join(''));

// snack 4 ///

const num = [1,2,3];
const lettere = ['a','b','c'];
let numLet = [];

for(let i = 0; i < num.length; i++){
  numLet.push(num[i]);
  numLet.push(lettere[i]);
}
console.log(numLet);










