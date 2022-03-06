/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    let ans = 1;
    const mod = 1000000007;
    for(let i=1; i <= 2 * n; i++){
        ans = ans * i;
        if(i % 2 === 0){
            ans = ans / 2;
        }
        ans = ans % mod;
    }
    return ans;
};