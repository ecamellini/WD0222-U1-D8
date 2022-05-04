// We need to represent an Epicode student.
// Let's try to model it, meaning to identify the main properties
// of an Epicode student that we need to represent in our program.

// This is the data model of an Epicode student:
// Name --> because we need the profile page --> string
// Surname --> string
// Country --> string
// Age --> number
// Has webcam? --> boolean

console.log("\n----------------OBJECTS-------------------\n")

// Object with 5 properties, it follows our model
let student1 = {
  name: "John",  // First property, called 'name'
  surname: "Doe",
  country: "FR",
  age: 25,
  hasWebcam: true
} // You can think of it as a new data type

let student2 = {
  name: "Paul",
  surname: "Smith",
  country: "DE",
  age: 30,
  hasWebcam: false
} // Another value representing a student

console.log(student1)
console.log(student2)

console.log("\n----------------ACCESSING OBJECT PROPERTIES-------------------\n")

console.log("Here's the names of the students:")
console.log( student1.name )
console.log( student2.name )

// We want to print a message based on the fact that the student 1 has a webcam or not.
// If they have it: "Ready to join class!"
// Otherwise: "Make sure to have a working webcam!"
if ( student1.hasWebcam === true ) {
  // This is a code block -- a sequence of JS instructions, delimited by curly braces
  // Executed only if the condition is true
  console.log("Ready to join class!")
  console.log("Welcome!")
} else {
  // This is another code block
  // Executed only if the condition is false
  console.log("Make sure to have a working webcam!")
  console.log("You can still join class :)")
}
