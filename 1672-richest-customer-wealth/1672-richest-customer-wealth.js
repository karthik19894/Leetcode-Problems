/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(let customer=0; customer < accounts.length; customer++){
        let wealth = 0;
        for(let account=0; account < accounts[customer].length; account++){
            wealth += accounts[customer][account];
        }
        maxWealth = Math.max(maxWealth, wealth);
    }
    return maxWealth;
};