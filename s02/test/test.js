const { expect, assert } = require("chai");
const { getCircleArea, checkIfPassed, getAverage, getSum, getDifference, factorial, div_check } = require("../util.js");

describe("Test get area circle", () => {
	it("Test area of circle radius 15 is 706.86", () => {

		let area = getCircleArea(15);
		assert.equal(area, 706.86);
	});

	it("Test area of circle with radius of 9 is 254.46959999999999", () => {
		let area = getCircleArea(9);
		expect(area).to.equal(254.46959999999999);
	})

})

describe("Test check if passed", () => {

	it("Test 25 out of 30 is passed", () => {

		 let isPassed = checkIfPassed(25, 30)
		 assert.equal(isPassed, true);
	})

	it("Test 30 out of 50 is not passed", () => {

		let isPassed = checkIfPassed(30, 50);
		assert.equal(isPassed, false);
	})
})

describe("Test get average", () => {

	it("Test average of 80,82,84 and 86 is 83", () => {

		let avg = getAverage(80, 82, 84, 86);
		assert.equal(avg, 83);
	})

	it("Test average of 70,80,82 and 84 is 79", () => {

		 let avg = getAverage(70, 80, 82, 84);
		 assert.equal(avg, 79);

	})
})

describe("Test get sum", () => {

	it("Test sum of 15 and 30 is 45", () => {

		let sum = getSum(15, 30);
		assert.equal(sum, 45);
	});

	it("Test sum of 25 and 50 is 75", () => {

		let sum = getSum(25, 50);
		assert.equal(sum, 75);
	});
})

describe("Test get difference", () => {

	it("Test difference of 70 and 40 is 30", () => {

		let difference = getDifference(70, 40);
		assert.equal(difference, 30);
	})

	it("Test difference of 125 and 50 is 75", () => {

		let difference = getDifference(125, 50);
		assert.equal(difference, 75);
	})
})

describe("Test factorials", () => {

	it("Test that 5! is 120", () => {

		const product = factorial(5);
		expect(product).to.equal(120);
	})

	it("Test that 1! is 1", () => {

		const product = factorial(1);
		expect(product).to.equal(1);
	})

	it("Test that 0! is 1", () => {

		const product = factorial(0);
		assert.equal(product, 1);
	})

	it("Test negative factorial is undefined", () => {

		const product = factorial(-1);
		expect(product).to.equal(undefined);
	})

	it("Test that non-numeric value returns an error", () => {

		const product = factorial("1");
		expect(product).to.equal(undefined);
	})
})

describe("Test divisibility", () => {

	it("Test that 120 is divisible by 5", () => {

		const divisible = div_check(120);
		expect(divisible).to.equal(true);

	})

    it("Test that 14 is divisible by 7", () => {

		const divisible = div_check(14);
		expect(divisible).to.equal(true);
        
	})

    it("Test that 105 is divisible by 5 OR 7", () => {

		const divisible = div_check(105);
		expect(divisible).to.equal(true);
        
	})

    it("Test that 22 is not divisible by 5 or 7", () => {

		const divisible = div_check(22);
		expect(divisible).to.equal(false);
        
	})

})