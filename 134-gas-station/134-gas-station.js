/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let startIdx = 0;
    let tank = 0;
    let shortage = 0;
    for(let i=0; i < cost.length; i++){
        tank += gas[i];
        let fuelNeeded = cost[i];
        if(fuelNeeded > tank){
            shortage += fuelNeeded - tank;
            startIdx = i+1;
            tank = 0; // because startIdx has changed
        }else{
            tank -= fuelNeeded;
        }
    }
    return tank >= shortage ? startIdx : -1;
};