import analyzeArray from "./analyzeArray";

describe("The function correctly calculates all values", () => {
  const returnedObject = analyzeArray([1, 8, 3, 4, 2, 6]);

  test("The average value is correctly calculated", () => {
    const { average } = returnedObject;
    expect(average).toBe(4);
  });

  test("The min value is correctly calculated", () => {
    const { min } = returnedObject;
    expect(min).toBe(1);
  });

  test("The max value is correctly calculated", () => {
    const { max } = returnedObject;
    expect(max).toBe(8);
  });

  test("The length of the array is correctly calculated", () => {
    const { length } = returnedObject;
    expect(length).toBe(6);
  });
});

test("Returns undefined if no argument is passed", () => {
  expect(analyzeArray()).toBeUndefined();
});

test("Returns undefined if the argument is not an array", () => {
  expect(analyzeArray("")).toBeUndefined();
  expect(analyzeArray({})).toBeUndefined();
  expect(analyzeArray(null)).toBeUndefined();
  expect(analyzeArray(function () {})).toBeUndefined();
});
