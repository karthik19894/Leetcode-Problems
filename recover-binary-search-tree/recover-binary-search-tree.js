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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let violatedFirstNode = null, violatedSecondNode = null, violatedLastNode = null;
    let prev = null;
    function inOrderTraverse(node){
        if(node === null) return;
        inOrderTraverse(node.left);

        if(prev !== null && prev.val > node.val){
            if(violatedFirstNode === null){
                violatedFirstNode = prev;
                violatedSecondNode = node;
            }else{
                violatedLastNode = node;
            }
        }
        prev = node;
        inOrderTraverse(node.right);
    }
    inOrderTraverse(root, null);
    if(violatedLastNode === null){
        swap(violatedFirstNode, violatedSecondNode);
    }else{
        swap(violatedFirstNode, violatedLastNode);
    }
};

function swap(node1, node2){
    let temp = node2.val;
    node2.val = node1.val;
    node1.val = temp;
}