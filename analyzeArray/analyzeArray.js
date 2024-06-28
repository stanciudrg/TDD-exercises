export default function analyzeArray(array) {
  if (!array || !Array.isArray(array)) return;
  return {
    average:
      array.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
