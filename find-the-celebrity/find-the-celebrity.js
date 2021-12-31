/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    function isCelebrity(possibleCelebrity, n){
        for(let otherPerson=0; otherPerson < n; otherPerson++){
            if(possibleCelebrity === otherPerson) continue;
            let celebrityKnowsOtherPerson = knows(possibleCelebrity, otherPerson);
            if(celebrityKnowsOtherPerson) return false;
            let otherPersonKnowsCelebrity = knows(otherPerson, possibleCelebrity);
            if(!otherPersonKnowsCelebrity) return false;
        }
        return true;
    }
    return function(n) {
        let possibleCelebrity = 0;
        for(let otherCandidate=1; otherCandidate < n; otherCandidate++){
            // a celebrity will not know any one else
            if(knows(possibleCelebrity, otherCandidate)){
                possibleCelebrity = otherCandidate;
            }
        }
        return isCelebrity(possibleCelebrity,n) ? possibleCelebrity : -1;
    };
};
