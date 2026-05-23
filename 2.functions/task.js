function getArrayParams(...arr) {
  if (arr.length === 0) return { min: null, max: null, avg: null };
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = Number((sum / arr.length).toFixed(2));
  return { min, max, avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  const sumEven = arr.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0);
  const sumOdd = arr.filter(x => x % 2 !== 0).reduce((a, b) => a + b, 0);
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  const evenElements = arr.filter(x => x % 2 === 0);
  if (evenElements.length === 0) return 0;
  const sum = evenElements.reduce((a, b) => a + b, 0);
  return +(sum / evenElements.length).toFixed(2);
}

function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) return -Infinity;
  return Math.max(...arrOfArr.map(arr => func(...arr)));
}

console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38