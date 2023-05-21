const { assert } = require("chai");
const { getCircleArea } = require("../index.js")

describe("Test get circle area", () => {

    it("Test area of circle with radius 15 is 706.86", () => {

        let area = getCircleArea(15);
        assert.equal(area, 706.86)

    })

    it("Test area of circle with negative radius is undefined", () => {
        let area = getCircleArea(-1);
        assert.equal(area, undefined)
    })

    it("Test area of circle with 0 radius is undefined", () => {
        let area = getCircleArea(0);
        assert.isUndefined(area)
    })

    it("Test if input is a number", () => {
        let isNum = getCircleArea(3);
        assert.isDefined(isNum);
    })
})

