const { assert } = require("chai");
const { newUser, user } = require("../index.js");

describe("Test newUser object", () => {
	it("Assert newUser type is an object", () => {
		assert.equal(typeof(newUser), "object");
	})

	/*mini-activity
		1. check if newUser email is type string
		2. run the npm test in the terminal
		3. send your output in Batch Hangouts*/
	it("Assert newUser email is type string", () => {
		assert.equal(typeof(newUser.email), "string");
	})

	it("Assert newUser email is not undefined", () => {
		assert.notEqual(typeof(newUser.email), "undefined");
	})

	it("Assert newUser password is type string", () => {
		assert.equal(typeof(newUser.password), "string");
	})

	it("Assert newUser password is at least 16 characters long", () => {
		assert.isAtLeast(newUser.password.length, 16);
	})
})

describe("Test user object", () => {

	it("Assert user first name is type string", () => {
		assert.equal(typeof(user.firstName), "string");
	})

	it("Assert user last name is type string", () => {
		assert.equal(typeof(user.lastName), "string");
	})

	it("Assert user first name is not undefined", () => {
		assert.notEqual(typeof(user.firstName), "undefined");
	})

	it("Assert user lastName name is not undefined", () => {
		assert.notEqual(typeof(user.lastName), "undefined");
	})

    it("Assert user age is at least 18", () => {
		assert.isAtLeast(user.age, 18);
	})

    it("Assert user age is type number", () => {
		assert.equal(typeof(user.age), "number");
	})

    it("Assert user contact number is type string", () => {
		assert.equal(typeof(user.contactNumber), "string");
	})

    it("Assert user batch number is type number", () => {
		assert.equal(typeof(user.batchNumber), "number");
	})

    it("Assert user batch number is not undefined", () => {
		assert.notEqual(typeof(user.batchNumber), "undefined");
	})

	it("Assert newUser password is at least 16 characters long", () => {
		assert.isAtLeast(user.password.length, 16);
	})
})
