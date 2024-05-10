/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("----------------ESERCIZIO 1---------------");

const pets = ["dog", "cat", "hamster", "redfish"];
for (let index = 0; index < pets.length; index++) {
  console.log(pets[index]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("----------------ESERCIZIO 2---------------");

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("----------------ESERCIZIO 3---------------");

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("----------------ESERCIZIO 4---------------");
let primoValore = pets.shift();
pets.push(primoValore);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
console.log("----------------ESERCIZIO 5---------------");

const yourLicensePlate = "AB123CD";

for (let index = 0; index < cars.length; index++) {
  cars[index].licensePlate = yourLicensePlate;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("----------------ESERCIZIO 6---------------");
const newObject = {
  brand: "Audi",
  model: "Q5",
  color: "black",
  trims: ["x", "y", "z"],
};

cars.push(newObject);

for (let index = 0; index < cars.length; index++) {
  cars[index].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("----------------ESERCIZIO 7---------------");

const justTrims = [];

for (let index = 0; index < cars.length; index++) {
  justTrims.push(cars[index].trims[0]);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("----------------ESERCIZIO 8---------------");

for (let index = 0; index < cars.length; index++) {
  const firstLetter = cars[index].color.charAt(0);
  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("----------------ESERCIZIO 9---------------");

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let index = 0;
while (numericArray[index] !== 32) {
  console.log(numericArray[index]);
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("----------------ESERCIZIO 10---------------");

const charactersArray = ["g", "n", "u", "z", "d"];
const posArray = [];

for (let index = 0; index < charactersArray.length; index++) {
  const lettera = charactersArray[index];
  switch (lettera) {
    case "a":
      posArray.push(1);
      break;
    case "b":
      posArray.push(2);
      break;
    case "c":
      posArray.push(3);
      break;
    case "d":
      posArray.push(4);
      break;
    case "e":
      posArray.push(5);
      break;
    case "f":
      posArray.push(6);
      break;
    case "g":
      posArray.push(7);
      break;
    case "h":
      posArray.push(8);
      break;
    case "i":
      posArray.push(9);
      break;
    case "l":
      posArray.push(10);
      break;
    case "m":
      posArray.push(11);
      break;
    case "n":
      posArray.push(12);
      break;
    case "o":
      posArray.push(13);
      break;
    case "p":
      posArray.push(14);
      break;
    case "q":
      posArray.push(15);
      break;
    case "r":
      posArray.push(16);
      break;
    case "s":
      posArray.push(17);
      break;
    case "t":
      posArray.push(18);
      break;
    case "u":
      posArray.push(19);
      break;
    case "v":
      posArray.push(20);
      break;
    case "z":
      posArray.push(21);
      break;
  }
}
console.log(posArray);
