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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];
    let isRightToLeft = false;
    while(queue.length){
        const currentLevel = [];
        let queueLength = queue.length; 
        for(let i=0; i < queueLength; i++) {
            let pushFn = isRightToLeft ? queue.unshift : queue.push;
            let node = queue.shift();
            if(isRightToLeft){
                currentLevel.unshift(node.val);
            }else{
                currentLevel.push(node.val);
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        isRightToLeft = !isRightToLeft;
        result.push(currentLevel);
    }
    return result;
};