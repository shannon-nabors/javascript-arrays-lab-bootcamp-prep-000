// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittens) {
  kittens.push("Ralph");
  console.log(kittens);
}

console.log(destructivelyAppendKitten(kittens));