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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root === null) return new TreeNode(val);
    insertHelper(root, val);
    return root;
};

function insertHelper(root, val){
    if(root === null) return new TreeNode(val);
    if(root.val > val && root.left === null){
        root.left = insertIntoBST(root.left, val);
        return root.left;
    }else if(root.val < val && root.right === null){
        root.right = insertIntoBST(root.right, val);
        return root.right;
    }
    if(root.val > val && root.left){
        return insertIntoBST(root.left, val);
    }else if(root.val < val && root.right){
        return insertIntoBST(root.right, val);
    }
}