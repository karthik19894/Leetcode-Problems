/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const inOrder1 = [];
    const inOrder2 = [];
    inOrderTraverse(root1, inOrder1);
    inOrderTraverse(root2, inOrder2);
    return merge(inOrder1, inOrder2);
};

function inOrderTraverse(node, result){
    if(node === null) return;
    inOrderTraverse(node.left, result);
    result.push(node.val);
    inOrderTraverse(node.right, result);
}

function merge(arr1, arr2){
    const merged = [];
    let i=0, j=0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        merged.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}