import caesarCipher from "./caesarCipher";

test("The function correctly ciphers a string containing lowercase characters", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("The function wraps around to the beginning of the alphabet when the shifted index of the passed chars exceed the length of the alphabet", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("The function correctly ciphers a string while preserving case sensitivity", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("The function correctly ciphers a string containing punctuation", () => {
  expect(caesarCipher("hello, world!", 3)).toBe("khoor, zruog!");
});

test("The function correctly ciphers a string containing punctuation while preserving case sensitivity", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("The function returns undefined if no shiftFactor is provided", () => {
  expect(caesarCipher("Hello, World!")).toBeUndefined();
  expect(caesarCipher("Hello, World!", undefined)).toBeUndefined();
  expect(caesarCipher("Hello, World!", null)).toBeUndefined();
});

test("The function returns undefined if the shiftFactor is not a number", () => {
  expect(caesarCipher("Hello, World!", "test")).toBeUndefined();
  expect(caesarCipher("Hello, World!", [])).toBeUndefined();
  expect(caesarCipher("Hello, World!", {})).toBeUndefined();
  expect(caesarCipher("Hello, World!", function () {})).toBeUndefined();
});

test("The function returns undefined if the shiftFactor is lower than 0", () => {
  expect(caesarCipher("Hello, World!", -4)).toBeUndefined();
});
