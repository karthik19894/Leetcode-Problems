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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if(root === null) return 0;
    let maxWidth = 0;
    const queue = [];
    queue.push([root, 0]);
    while(queue.length > 0){
        let firstNodeInQueue = queue[0];
        const [_, idxOfFirstNode] = firstNodeInQueue;
        const reset = queue.length === 1;
        let length = queue.length;
        for(let i=0; i < length; i++){
            const [nextNode, nextIdx] = queue.shift();
            if(nextNode.left) queue.push([nextNode.left, (nextIdx * 2) - 1]);
            if(nextNode.right) queue.push([nextNode.right, (nextIdx * 2)]);
            let currentWidth = (nextIdx - idxOfFirstNode) + 1;
            if(currentWidth){
                maxWidth = Math.max(maxWidth, currentWidth);
            }
        }
    }
    return maxWidth;
};