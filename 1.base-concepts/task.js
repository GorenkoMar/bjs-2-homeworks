"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0){
    return arr;
  }
  if (d === 0){
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  }
  if (d > 0){
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let credit = amount - contribution;
  let monthlyPayment = credit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return +totalAmount.toFixed(2);
}