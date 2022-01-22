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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) {
    const queue = [root];
    let isLastNodeU = false;
    while(queue.length){
        let isNodeUFound = false;
        let levelLength = queue.length;
        for(let i=0; i < levelLength; i++){
            const nextNode = queue.shift();
            if(nextNode === u){
                let isLastNodeInLevel = i === levelLength - 1;
                if(isLastNodeInLevel) return null;
                return queue.shift();
            }
            if(nextNode.left)queue.push(nextNode.left);
            if(nextNode.right)queue.push(nextNode.right);
        }
    }
    return null;
};