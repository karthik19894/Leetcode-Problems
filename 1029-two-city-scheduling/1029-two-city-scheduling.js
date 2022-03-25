/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    const n = costs.length / 2;
    let totalCost = 0;
    // sorting by optimal costs for city a
    costs.sort((a,b)=> a[0] - b[0] - (a[1] - b[1]));
    for(let i = 0; i < costs.length; i++){
        let cityIdx = i < n ? 0 : 1;
        totalCost += costs[i][cityIdx];
    }
    return totalCost;
};