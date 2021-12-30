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
var longestZigZag = function(root) {
    let longest = 0;
    // so at any given node we can either take left or right and calculate the max path
    if(root.left === null && root.right === null) return 0;
    function findLongestZigZag(root, fromDirection, length=0){
        longest = Math.max(longest, length);
        if(root.left){
            let newLength = fromDirection === "left" ? 1 : 1 + length;
            findLongestZigZag(root.left, "left", newLength);
        }
        if(root.right){
            let newLength = fromDirection === "right" ? 1 : 1 + length;
            findLongestZigZag(root.right, "right", newLength);
        }
    }
    findLongestZigZag(root, ""); // initially there is no split so direction is empty
    return longest;
    
};

