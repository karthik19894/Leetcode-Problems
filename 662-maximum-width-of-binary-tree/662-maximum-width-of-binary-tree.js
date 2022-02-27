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
    const queue = new Queue();
    queue.enqueue([root, 0]);
    while(queue.size() > 0){
        let firstNodeInQueue = queue.front();
        const [_, idxOfFirstNode] = firstNodeInQueue;
        let length = queue.size();
        for(let i=0; i < length; i++){
            const [nextNode, nextIdx] = queue.dequeue();
            if(nextNode.left) queue.enqueue([nextNode.left, (nextIdx * 2) - 1]);
            if(nextNode.right) queue.enqueue([nextNode.right, (nextIdx * 2)]);
            let currentWidth = (nextIdx - idxOfFirstNode) + 1;
            if(currentWidth){
                maxWidth = Math.max(maxWidth, currentWidth);
            }
        }
    }
    return maxWidth;
};