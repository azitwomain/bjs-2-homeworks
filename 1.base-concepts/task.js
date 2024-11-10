"use strict"

function solveEquation(a, b, c) {
	let arr = [b ** 2 - 4 * a * c];
	if (arr < 0) {
		return arr = []
	} else if (arr == 0) {
		return arr = [-b / (2 * a)]
	} else {
		return arr = [(-b + Math.sqrt(arr)) / (2 * a), (-b - Math.sqrt(arr)) / (2 * a)]
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMouths = percent / 100 / 12;
	let creditBody = amount - contribution;
	let payment = creditBody * (percentMouths + (percentMouths / (((1 + percentMouths) ** countMonths) - 1)));
	let allPayment = payment * countMonths;
	return Number(allPayment.toFixed(2));

}