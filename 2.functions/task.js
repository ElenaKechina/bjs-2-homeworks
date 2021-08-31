// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  arr.forEach((element) => {
    if (min > element) {
      min = element;
    }

    if (max < element) {
      max = element;
    }
    sum += element;
  });
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = arr.reduce((acc, elem) => acc + elem, 0);

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);

  arrOfArr.forEach((arr) => {
    let funcResult = func(arr);
    if (max < funcResult) {
      max = funcResult;
    }
  });

  return max;
}

// Задание 3
function worker2(arr) {
  return Math.max(...arr) - Math.min(...arr);
}
