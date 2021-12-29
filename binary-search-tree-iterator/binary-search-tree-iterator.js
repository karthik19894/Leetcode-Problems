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
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.getLeftMost(root);
};

BSTIterator.prototype.getLeftMost= function(root){
    let current = root;
    while(current){
        this.stack.push(current);
        current = current.left;
    }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if(this.stack.length === 0) return;
    const nextNode = this.stack.pop();
    if(nextNode.right){
        this.getLeftMost(nextNode.right);
    } 
    return nextNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */