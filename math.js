const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
};
const pow = (a, b) => Math.pow(a, b);

// Exporting the functions so they can be used in another file
export { add, sub, mul, div, pow };