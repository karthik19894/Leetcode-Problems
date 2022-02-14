/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const cache = new Array(n+1).fill(null);
    return noOfTrees(n, cache);
};

function noOfTrees(n, cache){
    if(n <= 0) return 1;
    if(cache[n] !== null) return cache[n];
    let trees = 0;
    for(let i=1; i <= n; i++){
        trees += noOfTrees(i-1, cache) * noOfTrees(n - i, cache);
    }
    cache[n] = trees;
    return trees;
}