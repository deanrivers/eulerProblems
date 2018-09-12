// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var limit = 100;

function sumOfSquares() {

	var sumOfSquares = 0;

	for(i=0;i <= limit; i++){

		sumOfSquares += Math.pow(i,2);
	}

	return sumOfSquares;
}

function sqaureOfSums(){
	var sqaureOfSums = 0;
	var sum = 0;

	for(j=0;j<=limit;j++){
		sum += j;
	}

	sqaureOfSums = Math.pow(sum,2);

	return sqaureOfSums;

}

var answer = sqaureOfSums() - sumOfSquares();

console.log("Sum of Sqaures is: " + sumOfSquares());
console.log("Sqaure of Sum is: " + sqaureOfSums());
console.log("The final answer is: " + answer);