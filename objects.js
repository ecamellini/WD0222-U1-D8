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

console.log("\n----------------MODIFYING OBJECT PROPERTIES-------------------\n")
// Suppose that the webcam of studen 1 broke...
// Now they don't have a webcam.

student1.hasWebcam = false
console.log("Student 1 has no more webcam :(")
console.log(student1)

console.log("\n----------------ADDING OBJECT PROPERTIES-------------------\n")
// Our User Interface now needs to show also the city of the student
// But we don't have it...

console.log("We are adding the student city:")
student1.city = "Paris"
student2.city = "Berlin"
console.log(student1)
console.log(student2)

console.log("\n----------------REMOVE OBJECT PROPERTIES-------------------\n")
// Let's say we do not need information about the webcam anymore

console.log("Removing hasWebcam from both students:")
delete student1.hasWebcam
delete student2.hasWebcam
console.log(student1)
console.log(student2)

// Suppose now we also want to add to the students
// some details about their hardware, their computer.
// For each student, we want to track:
// -- Operating system of their computer (string)
// -- Processor (string)
// -- Memory (number, in GB)

console.log("\n----------------NESTING OBJECTS-------------------\n")

console.log("We add info about the students' computers:")
// Properties can contain any type of data. Numbers, strings...also objects
student1.computer = {
  os: "Windows",
  processor: "Intel i7",
  memory: 16
}
student2.computer = {
  os: "Mac OS",
  processor: "M1 Pro",
  memory: 32
}

console.log(student1)
console.log(student2)

let student3 = {
  name: 'Rick',
  surname: "Flair",
  age: 50,
  city: "London",
  country: "UK",
  computer: { os: "Linux", processor: "AMD Ryzen 6", memory: 16 }
}
console.log(student3)

console.log("\nThe processor of the computer of student 3 (Rick):")
console.log( student3.computer.processor )

console.log("\nThe memory of the computer of student 1 (John):")
let student1Computer = student1.computer
console.log( student1Computer.memory)
