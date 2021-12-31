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
var maxAncestorDiff = function(root) {
    return findMaxDiff(root, root.val, root.val);
};

function findMaxDiff(node, currentMin, currentMax){
    if(node === null) return Math.abs(currentMax - currentMin);
    const leftMaxDiff = findMaxDiff(node.left, Math.min(node.val, currentMin), Math.max(node.val, currentMax));
    const rightMaxDiff = findMaxDiff(node.right, Math.min(node.val, currentMin), Math.max(node.val, currentMax));
    return Math.max(leftMaxDiff, rightMaxDiff);
}