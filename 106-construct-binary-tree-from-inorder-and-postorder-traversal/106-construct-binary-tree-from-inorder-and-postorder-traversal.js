/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const rootInfo = { idx : postorder.length - 1};
    const inOrderIdxMap = {};
    for(let i=0; i < inorder.length; i++){
        let val = inorder[i];
        inOrderIdxMap[val] = i;
    };
    const rootVal = postorder[rootInfo.idx];
    return constructTree(postorder, inOrderIdxMap, rootInfo, 0, inorder.length - 1);
};

function constructTree(postorder, inOrderIdxMap, rootInfo, leftIdx, rightIdx){
    if(leftIdx > rightIdx) return null;
    const rootVal = postorder[rootInfo.idx];
    rootInfo.idx--;
    const leftChildIdx = inOrderIdxMap[rootVal] + 1;
    const rightChildIdx = inOrderIdxMap[rootVal] - 1;
    const root = new TreeNode(rootVal);
    root.right = constructTree(postorder, inOrderIdxMap, rootInfo, leftChildIdx, rightIdx);
    root.left = constructTree(postorder, inOrderIdxMap, rootInfo, leftIdx, rightChildIdx);
    return root;
}