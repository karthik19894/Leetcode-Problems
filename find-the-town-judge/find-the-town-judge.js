/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(trust.length < n-1) return -1;
    const trustScores = new Array(n+1).fill(0);
    for(let detail of trust){
        const [trustedBy, actualTrusted] = detail;
        trustScores[actualTrusted]+=1
        trustScores[trustedBy] -= 1;
    }
    for(let i=1; i <=n; i++){
        if(trustScores[i] === n-1){
            return i;
        }
    }
    return -1;
};