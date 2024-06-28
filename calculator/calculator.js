const calculator = {
  checkNumbers(a, b) {
    if (
      (a === undefined || typeof a !== "number") &&
      (b === undefined || typeof b !== "number")
    ) {
      return "stop";
    }
    if (a === undefined || typeof a !== "number") return b;
    if (b === undefined || typeof b !== "number") return a;
  },
  add(a, b) {
    if (this.checkNumbers(a, b) === "stop") return;
    return this.checkNumbers(a, b) || a + b;
  },
  subtract(a, b) {
    if (this.checkNumbers(a, b) === "stop") return;
    return this.checkNumbers(a, b) || a - b;
  },
  divide(a, b) {
    if (this.checkNumbers(a, b) === "stop") return;
    return this.checkNumbers(a, b) || a / b;
  },
  multiply(a, b) {
    if (this.checkNumbers(a, b) === "stop") return;
    return this.checkNumbers(a, b) || a * b;
  },
};

export default calculator;
