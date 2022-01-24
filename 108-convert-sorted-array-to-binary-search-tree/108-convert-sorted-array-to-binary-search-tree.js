/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const root = createBST(nums, 0, nums.length - 1);
    return root;
};

function createBST(nums, left, right){
    if(left > right) return null;
    const middle = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[middle]);
    node.left = createBST(nums, left, middle - 1);
    node.right = createBST(nums, middle + 1, right);
    return node;
}