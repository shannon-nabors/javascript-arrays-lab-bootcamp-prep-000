// Add your functions and code here

//var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
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

function appendKitten(kittens)