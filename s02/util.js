/*Sample Functions to Test*/

function getCircleArea(radius){

	return 3.1416*(radius**2);
}

function checkIfPassed(score, total){

	return (score / total)*100 >= 75;
}

function getAverage(num1, num2, num3, num4){

	return (num1 + num2 + num3 + num4) / 4;
}

function getSum(num1, num2){

	return num1 + num2;
}

function getDifference(num1, num2){

	return num1 - num2;
}

const factorial = (n) => {

	if(typeof n !== "number") return undefined;
	if(n < 0) return undefined;
	if(n === 0) return 1;
	if(n === 1) return 1;

	return n * factorial(n-1);
}

const div_check = (n) => {

    if(n%5 === 0) return true;
    if(n%7 === 0) return true;

    return false;
}


module.exports = {
	getCircleArea: getCircleArea,
	checkIfPassed: checkIfPassed,
	getAverage: getAverage,
	getSum: getSum,
	getDifference: getDifference,
	factorial: factorial,
    div_check: div_check
}


/*
	Mini-Activity #1: 10 mins

	Create a new test suite to test cases for the get average function

	test case 1: assert that the average of 80,82,84 and 86 is 83.
	test case 2: assert that the average of 70,80,82 and 84 is 79.
	
	Run your test with npm test and take a screenshot of your test. Send your test in the hangouts.

*/

/*
	Mini-Activity #2: 20 mins

	Create a function called getDifference which is able to receive 2 numbers and returns the difference of both arguments.

	Create a test suite to check the function result for the following pairs of numbers:
		70,40
		125,50

	Send a screenshot of your tests.

*/
