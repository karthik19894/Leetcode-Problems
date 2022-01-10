/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    const [_, maxPathSum] = findMaxPathSum(root);
    return maxPathSum;
};

function findMaxPathSum(node){
    if(node === null) return [0, -Infinity];
    const [leftPathSum, maxPathSumInLeft] = findMaxPathSum(node.left);
    const [rightPathSum, maxPathSumInRight] = findMaxPathSum(node.right);
    const currentTreeSum = node.val + leftPathSum + rightPathSum;
    const currentLeftPathSum = node.val + leftPathSum;
    const currentRightPathSum = node.val + rightPathSum;
    const bestPathSum = Math.max(currentLeftPathSum, currentRightPathSum, node.val);
    const currentMaxPathSum = Math.max(bestPathSum, currentTreeSum, maxPathSumInLeft, maxPathSumInRight);
    return [bestPathSum, currentMaxPathSum];
}