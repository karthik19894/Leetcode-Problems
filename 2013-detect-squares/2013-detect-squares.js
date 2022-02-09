
var DetectSquares = function() {
    this.pointsCount = {};
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    let key = this.pointKey(point);
    if(!(key in this.pointsCount)) this.pointsCount[key] = 0;
    this.pointsCount[key] += 1;
};

DetectSquares.prototype.pointKey = function(point){
    const [x,y] = point;
    return `${x}-${y}`;
}

DetectSquares.prototype.pointFrom = function (key){
    return key.split("-");
}

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    let possibleSquares = 0;
    const [x, y] = point;
    const allPointKeys = Object.keys(this.pointsCount);
    const pointsMap = this.pointsCount;
    for(let pointKey of allPointKeys){
        const existingPoint = this.pointFrom(pointKey);
        const [ex, ey] = existingPoint;
        // we can form a square if we have a diagonal that is equally distanced from both x and y of our current point and also non zero
        let distanceOfX = Math.abs(x - ex);
        let distanceOfY = Math.abs(y - ey);
        if(distanceOfX > 0 && distanceOfX === distanceOfY){
            let point3 = this.pointKey([x, ey]);
            let point4 = this.pointKey([ex, y]);
            let point3Count = this.pointsCount[point3] || 0;
            let point4Count = this.pointsCount[point4] || 0;
            possibleSquares += (point3Count * point4Count) * this.pointsCount[pointKey];
        }
    }
    return possibleSquares;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */