function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let avg;
	min = Math.min(...arr);
	max = Math.max(...arr);
	avg = Number((numbers.reduce((sum, elem) => sum + elem, 0) / numbers.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	return sum = arr.reduce((sum, elem) => sum + elem, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return difference = Math.max(...arr) - Math.min(...arr);

}

function differenceEvenOddWorker(...arr) {

	let evenNum = 0;
	let oddNum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			evenNum = evenNum + arr[i]
		} else {
			oddNum = oddNum + arr[i]
		}
	}
	return differenceEvenOdd = evenNum - oddNum;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let evenNum = 0;
	let evenCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (numbers[i] % 2 == 0) {
			evenNum = evenNum + arr[i]
			evenCount++
		}
	}
	return averageEven = evenNum / evenCount;

}

function makeWork(arrOfArr, func) {
	let res = [];
	for (let i = 0; i < arrOfArr.length; i++) {
		res = funk.push(...arrOfArr[i])

	}
	return Math.max.apply(null, res)

}