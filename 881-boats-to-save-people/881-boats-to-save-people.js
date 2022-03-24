/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    if(people.length === 1) return 1;
    people.sort((a,b)=> a - b);
    let boats = 0;
    let minWeightIdx = 0, maxWeightIdx = people.length - 1;
    while(minWeightIdx <= maxWeightIdx){
        let person1Weight = people[minWeightIdx];
        let person2Weight = people[maxWeightIdx];
        if(person1Weight + person2Weight <= limit){
            minWeightIdx++;
        }
        maxWeightIdx--;
        boats++;
    }
    return boats;
};