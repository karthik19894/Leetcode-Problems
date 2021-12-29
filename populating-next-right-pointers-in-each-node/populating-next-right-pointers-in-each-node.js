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
    // so we know if there is a left node for a node then we will definitely have a right node
    // so which means that we can know that we are at the last level when the left of first node in level is null
    let current = root;
    while(current.left !== null){
        let temp = current;
        while(current !== null){
            current.left.next = current.right;
            current.right.next = current.next ? current.next.left : null;
            current = current.next;
        }
        current = temp.left;
    }
    return root;
};