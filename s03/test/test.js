const chai = require("chai");
const { assert } = require("chai");

// import and use chai-http to allow chai to send requests to our server
const http = require("chai-http");
chai.use(http);

describe("API Test Suite for users", () => {

    it("Test API get users is running", (done) => {
        // request() method is used from chai to create an http request given to the server
        // get("/endpoint") method is used to run/access a get method route
        // end() method is used to access the response from the route. It has anonymous function as an argument that receives two objects, the err or the response

        chai.request("http://localhost:4000")
        .get("/users")
        .end((err,res) => {

            // isDefined is assertion that given data is not undefined. It's like a shortcut to .notEqual(typeof data, undefined)
            assert.isNotEmpty(res.body);
            // done() method is used to tell chai-http when the test is done
            done();
        })
    })

    it("Test API get users returns an array", (done) => {

        chai.request("http://localhost:4000")
        .get("/users")
        .end((err, res) => {
            // res.body contains the body of the response. The data sent from res.send()
            // isArray() is an assertion that the given data is an array
            console.log(res.body)
            assert.isArray(res.body);
            done();
        })
    })

    it("Test API get users array first body object username is Jojo", (done) => {

        chai.request("http://localhost:4000")
        .get("/users")
        .end((err,res) => {
            assert.equal(res.body[0].username, "Jojo");
            done();
        })
    })

    // Mini-Activity
    it("Test API get users array check last item", (done) => {

        chai.request("http://localhost:4000")
        .get("/users")
        .end((err,res) => {
            assert.isDefined(res.body[res.body.length-1]);
            done();
        })
    })

    it("Test API post users returns 400 if no name", (done) => {

        // post() which is used by chai http to access a post method route
        // type() which is used to tell chai that request body is going to be stringified as json
        console.log("req")
        chai.request("http://localhost:4000")
        .post("/users")
        .type("json")
        .send({
            age: 30,
            username: "jin92"
        })
        .end((err, res) => {
            assert.equal(res.status, 400);
            done();
        })
    })

    it("Test API post users check if there is no age", (done) => {

        chai.request("http://localhost:4000")
        .post("/users")
        .type("json")
        .send({
            name: "heya",
            username: "jin92"
        })
        .end((err, res) => {
            assert.equal(res.status, 400);
            done();
        })
    })

    it("Test API get artists is running", (done) => {
        chai.request("http://localhost:4000")
        .get("/artists")
        .end((err,res) => {

            assert.isNotEmpty(res.body);
            done();
        })
    })

    it("Test API get songs of first artists returns an array", (done) => {

        chai.request("http://localhost:4000")
        .get("/artists")
        .end((err, res) => {
            assert.isArray(res.body[0].songs);
            done();
        })
    })

    it("Test API post artists encounters error if there is no name", (done) => {

        chai.request("http://localhost:4000")
        .post("/artists")
        .type("json")
        .send({
            songs: ["x", "y"],
            album: "x",
            isActive: true
        })
        .end((err, res) => {
            assert.equal(res.status, 400);
            done();
        })
    })

    it("Test API post artists encounters error if there is no songs or array songs is empty", (done) => {

        chai.request("http://localhost:4000")
        .post("/artists")
        .type("json")
        .send({
            name: "Ed",
            songs: [],
            album: "x",
            isActive: true
        })
        .end((err, res) => {
            assert.equal(res.status, 400);
            done();
        })
    })

    it("Test API post artists encounters error if there is no album", (done) => {

        chai.request("http://localhost:4000")
        .post("/artists")
        .type("json")
        .send({
            name: "Ed",
            songs: ["x", "y"],
            isActive: true
        })
        .end((err, res) => {
            assert.equal(res.status, 400);
            done();
        })
    })

    it("Test API post artists encounters error if there is no isActive or the artist is inactive", (done) => {

        chai.request("http://localhost:4000")
        .post("/artists")
        .type("json")
        .send({
            name: "Ed",
            songs: ["x", "y"],
            album: "x",
            isActive: false
        })
        .end((err, res) => {
            assert.equal(res.status, 400);
            done();
        })
    })

    it("Test API post artists is working", (done) => {

        chai.request("http://localhost:4000")
        .post("/artists")
        .type("json")
        .send({
            name: "Ed",
            songs: ["x", "y"],
            album: "x",
            isActive: true
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            done();
        })
    })

})