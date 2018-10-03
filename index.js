// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];
var newKitten = "Ralph"

function destructivelyAppendKitten(kittens, newKitten) {
  kittens.push(newKitten);
  console.log(kittens);
}

console.log(destructivelyAppendKitten(kittens, newKitten));