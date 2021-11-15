//Ordena los nombres alfabeticamente
const nombres = ["Jonatan", "Emiliano", "Juan", "Sabrina", "Lucas", "Ariel"];
nombres.sort();
alert(`Nombres en orden alfabetico:\n${nombres.join("-")}`);

//Ordena los numeros en orden ascendente

const numeros = [22, 33, 24, 76, 10, 7, 32, 108];
numeros.sort(function (a, b) {
  return a - b;
});
alert(`Numeros en orden ascendente:\n${numeros.join(" ")}`);

//Array de objetos

let personas = [
  { nombre: "Jonatan", edad: 32 },
  { nombre: "Emiliano", edad: 30 },
  { nombre: "Sabrina", edad: 38 },
];

personas.sort();

console.log(personas);

//Array ordenado con variables previamente establecidas

let Jonatan = 32;
let Sabrina = 39;
let Juan = 49;
let Lucas = 38;

let people = [Jonatan, Sabrina, Juan, Lucas];
people.sort(function (a, b) {
  return a - b;
});
alert(`Edades en orden ascendente:\n${people.join(" ")}`);
