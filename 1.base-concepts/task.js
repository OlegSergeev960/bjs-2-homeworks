"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let D = Math.pow(b, 2) - 4 * a * c;

	if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(x1, x2);
	} else if (D === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	}

	return arr;
}

let a = 1,
	b = -3,
	c = 2;
console.log(solveEquation(a, b, c));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = Number(percent);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);

	if (!Number.isFinite(percent) || !Number.isFinite(contribution) ||
		!Number.isFinite(amount) || !Number.isFinite(countMonths)) {
		return false
	}

	let loan = amount - contribution;
	let monthlyRate = percent / 100 / 12
	let monthlyPayment = loan * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
	let totalPay = monthlyPayment * countMonths;
	return Number(totalPay.toFixed(2));
}