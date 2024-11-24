function getArrayParams(...arr) {
	
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let avg = Number((arr.reduce((sum, elem) => sum + elem, 0) / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	return arr.reduce((sum, elem) => sum + elem, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return Math.max(...arr) - Math.min(...arr);

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
	return evenNum - oddNum;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let evenNum = 0;
	let evenCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			evenNum = evenNum + arr[i]
			evenCount++
		}
	}
	return  evenNum / evenCount;

}

function makeWork(arrOfArr, func) {
	let res = [];
	for (let i = 0; i < arrOfArr.length; i++) {	
		res.push(func(...arrOfArr[i])) 

	}
	return Math.max.apply(null, res)

}