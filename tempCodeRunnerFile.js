let originalArray = [5, 10, 15];

let newArray = [...originalArray, 20, 25];
console.log("New Array:", newArray);
console.log("Original Array:", originalArray);

let removedElementArray = originalArray.filter(item => item !== 10);
console.log("Array after removing 10:", removedElementArray);

// Finding an element in the array
let foundElement = originalArray.find(item => item === 15);
console.log("Found Element:", foundElement);

// Filtering elements greater than 10
let filteredArray = originalArray.filter(item => item > 10);
console.log("Filtered Array (elements > 10):", filteredArray);

// Adding an element at the beginning of the array
let newArrayWithUnshift = [0, ...originalArray];
console.log("Array after unshift:", newArrayWithUnshift);

// Removing the first element of the array
let newArrayWithShift = originalArray.slice(1);
console.log("Array after shift:", newArrayWithShift);

// Adding an element at the end of the array
let newArrayWithPush = [...originalArray, 30];
console.log("Array after push:", newArrayWithPush);

// Removing the last element of the array
let newArrayWithPop = originalArray.slice(0, -1);
console.log("Array after pop:", newArrayWithPop);

// Mapping over the array to create a new array with each element doubled
let mappedArray = originalArray.map(item => item * 2);
console.log("Mapped Array (elements doubled):", mappedArray);

// Reducing the array to sum all elements
let sumOfArray = originalArray.reduce((acc, item) => acc + item, 0);
console.log("Sum of Array:", sumOfArray);