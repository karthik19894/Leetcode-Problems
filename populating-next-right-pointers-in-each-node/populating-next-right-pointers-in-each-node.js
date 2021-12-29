/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // the key to this problem is realizing that since its a perfect binary tree, we will have
    // always equal number of nodes in each level, so if we start connecting the nodes level
    // level then we will be able to get access to the left node of a different parent by using next
    if(root === null) return root;
    connectHelper(root.left, root.right);
    return root;
};

function connectHelper(left, right){
    if(left === null || right === null) return;
    connectHelper(left.right, right.left);
    connectHelper(left.left, left.right);
    connectHelper(right.left, right.right);
    left.next = right;
}