function getArrayParams(...arr) {
	let numbers = [...arr];
	let min = Math.min(...numbers);
	let max = Math.max(...numbers);
	let avg = numbers.reduce((sum, elem) => sum + elem) / numbers.length;
	avg = Number(avg.toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arguments.length === 0) {
		return 0;
	}
	let numbers = [...arr];
	let sum = numbers.reduce((sum, elem) => sum + elem);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arguments.length === 0) {
		return 0;
	}
	let numbers = [...arr];
	let difference = Math.max(...numbers) - Math.min(...numbers);
	return difference;
}

function differenceEvenOddWorker(...arr) {
	if (arguments.length === 0) {
		return 0;
	}
	let numbers = [...arr];
	let evenNum = 0;
	let oddNum = 0;
	for (let i = 0; i <= numbers.length; i++) {
		if (numbers[i] % 2 == 0) {
			evenNum = evenNum + numbers[i]
		} else {
			oddNum = oddNum + numbers[i]
		}
	}
	let differenceEvenOdd = evenNum - oddNum;
	return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
	if (arguments.length === 0) {
		return 0;
	}
	let numbers = [...arr];
	let evenNum = 0;
	let evenCount = 0;
	for (let i = 0; i <= numbers.length; i++) {
		if (numbers[i] % 2 == 0) {
			evenNum = evenNum + numbers[i]
			evenCount++
		}
	}
	let averageEven = evenNum / evenCount;
	return averageEven;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i <= arrOfArr.length; i++) {

	}
	return func

}