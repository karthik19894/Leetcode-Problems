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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let current = root;
    const stack = [];
    const result = [];
    while(current !== null || stack.length){
        while(current !== null){
            stack.push(current);
            current = current.left;
        }
        const next = stack.pop();
        result.push(next.val);
        if(next.right){
            current = next.right;
        } 
    }
    return result;
};