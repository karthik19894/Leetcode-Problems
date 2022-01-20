/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let minSpeed = 1;
    let maxSpeed = Math.max(...piles);
    let left = minSpeed, right = maxSpeed;
    
    while(left < right){
        let potentialSpeed = Math.floor((left + right) / 2);
        if(canEatAllBananas(potentialSpeed, piles, h)){
            right = potentialSpeed;
        }else{
            left = potentialSpeed + 1;
        }
    }
    return left;
};

function canEatAllBananas(speed, piles, withinHours){
    let hoursTaken = 0;
    for(let bananas of piles){
        hoursTaken += Math.ceil(bananas / speed);
    }
    return hoursTaken <= withinHours;
}