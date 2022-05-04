console.log("\n-----------------NESTING STRUCTURAL DATA TYPES---------------------\n")
// Suppose we want to create an e-commerce, and we have a list of products to show.
// Every product has:
// - A code (number)
// - A name (string)
// - A price in Euros (number)

let products = [ // Array of objects
  { code: 001, name: "Headphones", price: 69.99 },
  { code: 123, name: "Post-it notes", price: 5.00 },
  { code: 333, name: "Pen", price: 1.00 }
]

console.log(products)
console.log("\nPrice of the second product:")
console.log(products[1].price)

// Suppose we want to model university students.
// Each student has:
// - name (string)
// - grades for each exam: list of numbers

let universityStudent = {
  name: "Paul Smith",
  examGrades: [8, 8, 7, 3, 10, 3, 7] // Grades for exams from the first one to the last one
}

console.log("\n")
console.log(universityStudent)
console.log("Let's get the grade of the first exam:")
console.log(  universityStudent.examGrades[0] )

let ticTacToeGame = [ // We represent circles as zeros, x as ones
  [0, 1, 0],
  [1, 0, 0],
  [1, 0, 1]
]

console.log("\n")
console.log(ticTacToeGame)
console.log("Let's see the third value of the second row:")
console.log(  ticTacToeGame[1][2] )
