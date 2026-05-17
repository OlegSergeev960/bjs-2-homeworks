function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
    sum += num;
  } 
  const avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0
  for (let element of arr) {
    sum += element
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEven = 0;
  let sumOdd = 0;
  for (let element of arr) {
    if (element % 2 === 0) {
      sumEven += element;
    } else {
      sumOdd += element;
    }
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEven = 0;
  let countEven = 0;
  for (let element of arr) {
    if (element % 2 === 0) {
      sumEven += element;
      countEven += 1;
  }
  if (countEven === 0) {
    return 0;
  } 
  return sumEven / countEven;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let currentArray of arrOfArr) {
    let result = func(...currentArray);
    if (result > maxWorkerResult) {
      maxWorkerResult = result
    } 
  }
  return maxWorkerResult;
}
