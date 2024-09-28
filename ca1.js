// Task 1: Function to return squared odd numbers from an array
function getSquaredOdds(arr) {
    // Use filter to get odd numbers, then map to square each odd number
    return arr.filter(num => num % 2 !== 0).map(num => num ** 2);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(getSquaredOdds(numbers)); 
// Output: [1, 9, 25]