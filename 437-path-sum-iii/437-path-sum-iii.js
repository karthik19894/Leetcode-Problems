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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const paths = { count : 0};
    const sumCounts = {};
    countPathsToTarget(root, targetSum, 0, paths, sumCounts);
    return paths.count;
};

function countPathsToTarget(node, target, currentSum, paths, sumCounts){
    if(node === null) return;
    
    currentSum += node.val;
    
    if(currentSum === target) paths.count++;
    
    let oldPathSum = currentSum - target;
    
    if(oldPathSum in sumCounts){
        paths.count += sumCounts[oldPathSum];
    }
    
    if(!(currentSum in sumCounts)){
        sumCounts[currentSum] = 0;
    }
    sumCounts[currentSum] += 1;
    
    countPathsToTarget(node.left, target, currentSum, paths, sumCounts);
    countPathsToTarget(node.right, target, currentSum, paths, sumCounts);
    
    sumCounts[currentSum] -= 1;
}