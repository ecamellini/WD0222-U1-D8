console.log("\n-----------------LOOPS------------------\n")

// I want to write a program that counts to 10
console.log("Count: 1")
console.log("Count: 2")
console.log("Count: 3")
console.log("Count: 4")
console.log("Count: 5")
console.log("Count: 6")
console.log("Count: 7")
console.log("Count: 8")
console.log("Count: 9")
console.log("Count: 10")

// What if we want to count to 1 million?
// We are basically doing the same thing, 10 times
// Isn't there a way to repeat this single line, 10 times? N times?

let maxCount = 1000 // We want to count up to 1000
let currentCount = 1 // We start from 0
while (currentCount <= maxCount) {
  // This code block, this set of instructions
  // will be executed until the condition is true.
  console.log("Count:", currentCount)
  currentCount += 1
  // This is like writing currentCount = currentCount + 1
}

console.log("This will be executed after the loop...")


console.log("\n-----------------ITERATE OVER A LIST------------------\n")

let listOfAnimals = ['cat', 'dog', 'parrot', 'lion', 'crocodile']

// For each element in the list, print it
let index = 0
while ( index < listOfAnimals.length ) {
  let currentElement = listOfAnimals[index]
  console.log(currentElement, "is a nice animal.")
  index += 1
}

console.log("\nLet's do the same with a for loop:")
// ANOTHER WAY TO WRITE THE EXACT SAME THING
for (let index = 0; index < listOfAnimals.length; index += 1) {
  let currentElement = listOfAnimals[index]
  console.log(currentElement, "is a nice animal.")
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
