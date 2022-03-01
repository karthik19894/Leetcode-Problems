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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const treeMap = {};
    const duplicates = [];
    postOrderTraverse(root, treeMap, duplicates);
    return duplicates;
};

function postOrderTraverse(node, treeMap, duplicates){
    if(node === null) return "#";
    const leftSerial = postOrderTraverse(node.left, treeMap, duplicates);
    const rightSerial = postOrderTraverse(node.right, treeMap, duplicates);
    const currentSerial = node.val + ":" + leftSerial + ":" + rightSerial;
    if(!(currentSerial in treeMap)){
        treeMap[currentSerial] = 0;
    }
    treeMap[currentSerial] += 1;
    if(treeMap[currentSerial] === 2){
        duplicates.push(node);
    }
    return currentSerial;
}
