// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittens, newKitten) {
  kittens.push(newKitten);
  console.log(kittens);
}

console.log(destructivelyAppendKitten(kittens, newKitten));