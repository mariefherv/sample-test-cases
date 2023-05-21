
function getCircleArea(radius){

    if(typeof radius !== "number" || radius <= 0) return undefined
    return 3.1416*(radius**2)
    
}

module.exports = {
    getCircleArea: getCircleArea
}