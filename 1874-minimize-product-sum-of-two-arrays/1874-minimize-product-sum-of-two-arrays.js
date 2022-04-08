/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
    const numsAsc = nums1.sort((a,b)=> a - b);
    const numsDesc = nums2.sort((a,b)=> b - a);
    let minProduct = 0;
    for(let i=0; i < nums1.length; i++){
        minProduct += numsAsc[i] * numsDesc[i];
    }
    return minProduct;
};