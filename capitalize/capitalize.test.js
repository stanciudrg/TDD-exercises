import capitalizeFirstLetter from "./capitalize";

test("The first letter is capitalized", () => {
  expect(capitalizeFirstLetter("mark")).toBe("Mark");
});

test("Returns undefined if no argument is passed", () => {
  expect(capitalizeFirstLetter()).toBeUndefined();
});

test("Returns undefined if an empty string is passed", () => {
  expect(capitalizeFirstLetter("")).toBeUndefined();
});

test("Returns undefined if null is passed", () => {
  expect(capitalizeFirstLetter(null)).toBeUndefined();
});

test("Returns undefined if the argument is not a string", () => {
  expect(capitalizeFirstLetter(2)).toBeUndefined();
  expect(capitalizeFirstLetter({})).toBeUndefined();
  expect(capitalizeFirstLetter([])).toBeUndefined();
});
