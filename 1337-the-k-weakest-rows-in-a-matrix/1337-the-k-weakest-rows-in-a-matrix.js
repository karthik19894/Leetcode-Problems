/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const strengths = mat.map((row, idx) => ({
        idx:idx,
        strength: getStrength(row)
    }));
    strengths.sort((a,b) => a.strength - b.strength);
    return strengths.map(str => str.idx).slice(0, k);
};

function getStrength(arr){
    let left = 0, right = arr.length - 1;
    if(arr[right] === 1) return arr.length;
    if(arr[left] === 0) return 0;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === 1 && arr[mid + 1] === 0){
            return mid + 1;
        }else if(arr[mid] === 0 && arr[mid - 1] === 1) {
            return mid;
        }else if(arr[mid] === 1){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return left + 1;
}