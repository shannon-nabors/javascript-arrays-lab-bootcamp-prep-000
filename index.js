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

function appendKitten() {
  return([...kittens, "Broom"]);
}

function prependKitten() {
  return(["Arnold", ...kittens]);
}

function removeLastKitten() {
  return()
}