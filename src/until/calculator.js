// Example usage of the Calculator class
const calc = new Calculator();
console.log(calc.add(5)); // Adds 5 to the result
console.log(calc.subtract(2)); // Subtracts 2 from the result
console.log(calc.multiply(3)); // Multiplies the result by 3
console.log(calc.divide(2)); // Divides the result by 2
console.log(calc.reset()); // Resets the result to 0
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
    return this.result;
  }

  subtract(value) {
    this.result -= value;
    return this.result;
  }

  multiply(value) {
    this.result *= value;
    return this.result;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= value;
    return this.result;
  }

  reset() {
    this.result = 0;
    return this.result;
  }
} 


