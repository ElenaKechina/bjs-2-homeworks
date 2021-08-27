'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  console.log('discriminant: ', discriminant);

  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  }

  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (Number.isNaN(Number(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (Number.isNaN(Number(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (Number.isNaN(Number(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  if (!date.getMonth() || date - Date.now() < 0) {
    return `Параметр "Дата" содержит неправильное значение "${date}"`;
  }

  let MortgageBody = +amount - +contribution;
  let dateNow = new Date();
  let monthAmount =
    (date.getFullYear() - dateNow.getFullYear()) * 12 +
    (date.getMonth() - dateNow.getMonth());

  percent /= 1200;
  totalAmount =
    MortgageBody *
    (percent + percent / ((1 + percent) ** monthAmount - 1)) *
    monthAmount;
  totalAmount = +totalAmount.toFixed(2);
  return totalAmount;
}
