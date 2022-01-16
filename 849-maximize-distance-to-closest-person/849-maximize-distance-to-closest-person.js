/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    const N = seats.length;
    let prevOccupiedSeat = null;
    let maxDistance = 0;
    for(let i=0; i < N; i++){
        if(seats[i] === 1){
            if(prevOccupiedSeat === null){
                maxDistance = i;
            }else{
                let distanceWithoutDivide = i - prevOccupiedSeat;
                let distanceBetweenLastOccupiedAndCurrent = Math.floor((i - prevOccupiedSeat) / 2);
                maxDistance = Math.max(maxDistance, distanceBetweenLastOccupiedAndCurrent);
            }
            prevOccupiedSeat = i;
        }
    }
    // if the last seat is empty then it will not be calculated in the prev loop
    maxDistance = Math.max(maxDistance, N-1-prevOccupiedSeat);
    return maxDistance;
};