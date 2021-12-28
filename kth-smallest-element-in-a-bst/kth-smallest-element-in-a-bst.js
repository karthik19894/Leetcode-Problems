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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let nodesTraversed = 0;
    let kThNode = null;
    function inOrderTraverse(root, k){
        if(root === null) return;
        inOrderTraverse(root.left, k);
        if(nodesTraversed < k){
            nodesTraversed++;
            kThNode = root;
            inOrderTraverse(root.right, k);
        }
    }
    inOrderTraverse(root, k);
    return kThNode.val;
};