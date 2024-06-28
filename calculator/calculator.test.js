import calculator from "./calculator";

test("The calculator adds two numbers correctly", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("The calculator subtracts one number from another correctly", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("The calculator divides one number by another correctly", () => {
  expect(calculator.divide(12, 2)).toBe(6);
});

test("The calculator multiplies two numbers correctly", () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});

test("The calculator works with negative numbers", () => {
  expect(calculator.add(2, -2)).toBe(0);
  expect(calculator.subtract(-4, 2)).toBe(-6);
  expect(calculator.divide(12, -2)).toBe(-6);
  expect(calculator.multiply(4, -4)).toBe(-16);
});

test("Returns the other number if one number is not provided", () => {
  expect(calculator.add(2)).toBe(2);
  expect(calculator.subtract(-4)).toBe(-4);
  expect(calculator.divide(12)).toBe(12);
  expect(calculator.multiply(-4)).toBe(-4);

  expect(calculator.add(undefined, 2)).toBe(2);
  expect(calculator.subtract(undefined, -4)).toBe(-4);
  expect(calculator.divide(undefined, 12)).toBe(12);
  expect(calculator.multiply(undefined, -4)).toBe(-4);
});

test("Returns the other argument of type 'number' when one argument is not of type 'number'", () => {
  expect(calculator.add(2, "mark")).toBe(2);
  expect(calculator.subtract(-4, {})).toBe(-4);
  expect(calculator.divide(12, [])).toBe(12);
  expect(calculator.multiply(-4, function () {})).toBe(-4);

  expect(calculator.add("mark", 2)).toBe(2);
  expect(calculator.subtract({}, -4)).toBe(-4);
  expect(calculator.divide([], 12)).toBe(12);
  expect(calculator.multiply(function () {}, -4)).toBe(-4);
});

test("Returns undefined if no arguments are provided", () => {
  expect(calculator.add()).toBeUndefined();
  expect(calculator.subtract()).toBeUndefined();
  expect(calculator.divide()).toBeUndefined();
  expect(calculator.multiply()).toBeUndefined();
});

test("Returns undefined if none of the arguments are of type 'number'", () => {
  expect(calculator.add("mark", {})).toBeUndefined();
  expect(calculator.subtract([2, 3], {})).toBeUndefined();
  expect(calculator.divide(function () {}, [3, 2])).toBeUndefined();
  expect(calculator.multiply("mark", function () {})).toBeUndefined();
});

test("Returns undefined if no arguments are provided or if none of the arguments are of type 'number'", () => {
  expect(calculator.add("mark")).toBeUndefined();
  expect(calculator.subtract(undefined, [2, 3])).toBeUndefined();
  expect(calculator.divide(function () {})).toBeUndefined();
  expect(calculator.multiply(undefined, {})).toBeUndefined();
});
