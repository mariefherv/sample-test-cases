const chai = require("chai");
const { assert, expect } = require("chai");

const http = require("chai-http");
chai.use(http);

describe("Test suite register", () => {

	it('Test api post register returns 400 if no name', (done) => {
		chai.request("http://localhost:5001")
		.post("/users/register")
		.type("json")
		.send({
			username: "iamjson",
			age: "27"
		})
		.end((err, res) => {
			assert.equal(res.status, 400);
			done();
		})
	})

	it("Test api post register is running", () => {
		chai.request("http://localhost:5001")
		.post("/users/register")
		.type("json")
		.send({
			username: "iamjson",
			name: "Jay White",
			age: "27"
		})
		.end((err, res) => {
			assert.notEqual(res.status, 404)
			
		})
	})

	it("Test api post register returns 400 if no age", (done) => {
		chai.request("http://localhost:5001")
		.post("/users/register")
		.type("json")
		.send({
			username: "iamjson",
			name: "Jay White"
		})
		.end((err, res) => {
			assert.equal(res.status, 400)
			done();
		})
	})

	it("Test api post register returns 400 if no username", (done) => {
		chai.request("http://localhost:5001")
		.post("/users/register")
		.type("json")
		.send({
			age:"27",
			name: "Jay White"
		})
		.end((err, res) => {
			assert.equal(res.status, 400)
			done();
		})
	})


	
})

describe("Test user login", () => {
    it('test_api_post_login_returns_400_if_no_password', (done) => {
		chai.request('http://localhost:5001')
		.post('/users/login')
		.type('json')
		.send({
			username: "brBoyd87"
		})
		.end((err, res) => {
			expect(res.status).to.equal(400)
			done();
		})
	})

	it('test_api_post_login_returns_200_if_correct_credentials', (done) => {
		chai.request('http://localhost:5001')
		.post('/users/login')
		.type('json')
		.send({
			username: "brBoyd87",
			password: "87brandon19",
		})
		.end((err, res) => {
			expect(res.status).to.equal(200)
			done();
		})
	})

    // stretch goal
    it('test_api_post_login_returns_200_if_wrong_credentials', (done) => {
		chai.request('http://localhost:5001')
		.post('/users/login')
		.type('json')
		.send({
			username: "brBoyd87",
			password: "wrongPw",
		})
		.end((err, res) => {
			expect(res.status).to.equal(403)
			done();
		})
	})
})
 

