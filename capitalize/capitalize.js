export default function capitalizeFirstLetter(string) {
  if (!string) return;
  if (typeof string !== "string") return;
  if (string.length === 0) return;
  return string.charAt(0).toUpperCase() + string.slice(1);
}
