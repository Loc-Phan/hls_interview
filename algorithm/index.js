/** ============== Mini-Max Sum ============== */
const miniMaxSum = (array) => {
	let min = 0,
		max = 0;
	const sortingArray = array.sort();
	for (let i = 0; i < sortingArray.length; i++) {
		if (i !== 0) {
			max += sortingArray[i];
		}
		if (i !== sortingArray.length - 1) {
			min += sortingArray[i];
		}
	}
	console.log(min, max);
};
miniMaxSum([1, 2, 3, 4, 5]);

/** ============== Count total of array ============== */
const countTotal = (array) =>
	array.reduce((sum, currentValue) => {
		return sum + currentValue;
	}, 0);
console.log(countTotal([1, 2, 3, 4, 5]));

/** ============== Find min in array ============== */
const min = (array) => Math.min(...array);
console.log(min([1, 2, 3, 4, 5]));

/** ============== Find max in array ============== */
const max = (array) => Math.max(...array);
console.log(max([1, 2, 3, 4, 5]));

/** ============== Find even elements in array ============== */
const evenElements = (array) => array.filter((ele) => ele % 2 === 0);
console.log(evenElements([1, 2, 3, 4, 5]));

/** ============== Find odd elements in array ============== */
const oddElements = (array) => array.filter((ele) => ele % 2 !== 0);
console.log(oddElements([1, 2, 3, 4, 5]));
