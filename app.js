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
