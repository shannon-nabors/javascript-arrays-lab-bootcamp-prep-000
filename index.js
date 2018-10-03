// Add your functions and code here

let kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return(kittens);
}

function destructivelyPrependKitten(kittens) {
  kittens.unshift("Bob");
  return(kittens);
}

function destructivelyRemoveLastKitten(kittens) {
  kittens.pop();
  return(kittens);
}

function destructivelyRemoveFirstKitten(kittens) {
  kittens.shift();
  return(kittens);
}