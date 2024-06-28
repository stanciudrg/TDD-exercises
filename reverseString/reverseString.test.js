import reverseString from "./reverseString";

test("The string is reversed", () => {
  expect(reverseString("mark")).toBe("kram");
});

test("The string with its first letter capitalized is reversed", () => {
  expect(reverseString("Mark")).toBe("kraM");
});

test("The string containing spaces is reversed", () => {
  expect(reverseString("My name is Mark")).toBe("kraM si eman yM");
});

test("The string containing numbers is reversed", () => {
  expect(reverseString("9832")).toBe("2389");
});

test("Returns undefined if no argument is passed", () => {
  expect(reverseString()).toBeUndefined();
});

test("Returns undefined if an empty string is passed", () => {
  expect(reverseString("")).toBeUndefined();
});

test("Returns undefined if null is passed", () => {
  expect(reverseString(null)).toBeUndefined();
});

test("Returns undefined if the argument is not a string", () => {
  expect(reverseString(2)).toBeUndefined();
  expect(reverseString({})).toBeUndefined();
  expect(reverseString([])).toBeUndefined();
});
