// Add your functions and code here

let kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return(kittens);
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob");
  return(kittens);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return(kittens);
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return(kittens);
}

function appendKitten(kittens) {
  kittens = [...kittens, "Broom"];
  return(kittens);
}