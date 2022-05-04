console.log("\n----------------ARRAYS-------------------\n")

// Suppose you want to write a shopping list app.
// Where you can add items, remove, etc.
// An item of this shopping list is just a string.

// To store more items of the same type, you can use arrays (or lists)
let groceryList = [ "Milk", "Orange Juice", "Biscuits", "Tea" ]
//  ^^^^ this is a list of strings: its values are strings

console.log(groceryList)

/* Difference with respect to objects:
- In objects you can store many values, but they are identified by their name (the property name).
- In objects, the order of the elements is not important - you still use the name to get the values.
- In lists you can store many values, but they are identified by their position.
- The order is important: you can access the elements using their position/index.
- In lists you want to store only values of the same type. A list of strings, for example. NEVER MIX DATA TYPES IN A LIST.
*/

console.log("\n----------------ACCESSING THE VALUES OF AN ARRAY-------------------\n")

console.log("The third item in the grocery list is:")
console.log(  groceryList[2]  ) // WE START COUNTING FROM 0. The first element is the element 0.

console.log("\n----------------ADDING ELEMENTS TO AN ARRAY--------------------\n")

// In general I can see and use the array FUNCTIONS by using the dot
groceryList.push("Tomatoes")
groceryList.push("Potatoes")
groceryList.push("Pasta")
console.log(groceryList)

console.log("\n----------------FIND OUT HOW MANY ITEMS WE HAVE--------------------\n")

console.log("How many elements are there in the grocery list?")
console.log(groceryList.length)

console.log("\n----------------LISTS CONCATENATION--------------------\n")
// We have items for gardening in another grocery list
console.log("I have a gadening list:")
let groceryListGardening = ["Fertilizer", "Plants", "Seeds"]
console.log(groceryListGardening)

// We want to put them all together in the same list
console.log("\nI concatenate two lists:")
groceryList = groceryList.concat(groceryListGardening)
console.log(groceryList) // From this point, we actually have only one list

console.log("\nThe gardening list is still there...")
console.log(groceryListGardening)

console.log("\n----------------REMOVE AN ITEM--------------------\n")

console.log("Removing the last two elements of the list:")
groceryList.pop()
groceryList.pop()
console.log(groceryList)

console.log("\n----------------INSERTING/REMOVING ELELEMENTS IN THE MIDDLE-------------\n")

// We would expect to have something like:
// groceryList.insert(1, "Fruit")
// groceryList.remove(1)
// BUT IN JS THNGS GO A LITTLE CRAZY

// Splice needs three parameters:
// - 1) The position in the list where you want to operate
// - 2) The number of elements to remove
// - 3) (optional) The element/the elements to add there
groceryList.splice(1, 1) // We remove 1 element at position 1
console.log("\nWe remove the second element:")
console.log(groceryList)

console.log("\nLet's add spaghetti as a fourth element:")
groceryList.splice(3, 0, "Spaghetti")
console.log(groceryList)

console.log("\nLet's replace the third element with Coffee:")
groceryList.splice(2, 1, "Coffee")
console.log(groceryList)


