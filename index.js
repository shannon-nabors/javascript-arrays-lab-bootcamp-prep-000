// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittens) {
  kittens.push("Ralph");
  return(kittens);
}

function destructivelyPrependKitten(kittens) {
  kittens.unshift("Bob");
  return(kittens);
}

function destructivelyRemoveLastKitten(kittens) {
  kittens.pop()
}