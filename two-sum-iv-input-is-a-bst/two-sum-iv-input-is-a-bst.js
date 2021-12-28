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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const nodesInOrder = [];
    inOrder(root, nodesInOrder);
    let left = 0, right = nodesInOrder.length - 1;
    while(left < right){
        let sum = nodesInOrder[left] + nodesInOrder[right];
        if(sum === k) return true;
        else if(sum > k) right--;
        else if(sum < k) left++;
    }
    return false;
};

function inOrder(node, result){
    if(node === null) return;
    inOrder(node.left, result);
    result.push(node.val);
    inOrder(node.right, result);
}