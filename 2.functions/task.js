function getArrayParams(...arr) {
	
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let avg = Number((numbers.reduce((sum, elem) => sum + elem, 0) / numbers.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	
	return sum = arr.reduce((sum, elem) => sum + elem, 0);
	}

function differenceMaxMinWorker(...arr) {
	if (arguments.length === 0) {
		return 0;
	}
	return difference = Math.max(...arr) - Math.min(...arr);
	
}

function differenceEvenOddWorker(...arr) {
	if (arguments.length === 0) {
		return 0;
	}
	let evenNum = 0;
	let oddNum = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 == 0) {
			evenNum = evenNum + arr[i]
		} else {
			oddNum = oddNum + arr[i]
		}
	}
	return differenceEvenOdd = evenNum - oddNum;
	
}

function averageEvenElementsWorker(...arr) {
	if (arguments.length === 0) {
		return 0;
	}
	
	let evenNum = 0;
	let evenCount = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		if (numbers[i] % 2 == 0) {
			evenNum = evenNum + arr[i]
			evenCount++
		}
	}
	return averageEven = evenNum / evenCount;
	
}

function makeWork(arrOfArr, func) {	
	let maxWorkerResult = -Infinity;
	for (let i = 0; i <= arrOfArr.length - 1; i++) {
		funk.push(...arrOfArr[i])
		
	}
	return func

}