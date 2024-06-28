export default function reverseString(string) {
  if (!string) return;
  if (typeof string !== "string") return;
  if (string.length === 0) return;
  return [...string].reverse().join("");
}
