/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    const N = seats.length;
    const leftDistances = new Array(seats.length).fill(N);
    const rightDistances = new Array(seats.length).fill(N);
    // left to right
    for(let i=0; i < N; i++){
        if(seats[i] === 1){
            leftDistances[i] = 0;
        }else if(i > 0){
            leftDistances[i] = leftDistances[i-1] + 1;
        }
    }
    // right to left
    for(let i=N; i>=0; i--){
        if(seats[i] === 1){
            rightDistances[i] = 0;
        }else if(i < N-1){
            rightDistances[i] = rightDistances[i+1] + 1;
        }
    }
    let maxDistance = 0;
    for(let i=0; i < N; i++){
        maxDistance = Math.max(maxDistance, Math.min(leftDistances[i], rightDistances[i]));
    }
    return maxDistance;
};