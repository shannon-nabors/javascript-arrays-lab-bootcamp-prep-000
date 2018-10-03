// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];
var newKitten = "Ham"

function destructivelyAppendKitten(kittens, newKitten) {
  kittens.push(newKitten);
  console.log(kittens);
}

destructivelyAppendKitten(kittens, newKitten);