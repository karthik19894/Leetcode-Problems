/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
var cloneTree = function(root) {
    return cloneOfTree(root);
};

function cloneOfTree(node){
    if(node === null) return null;
    const newNode = new Node(node.val);
    for(let child of node.children){
        const clonedChild = cloneOfTree(child);
        newNode.children.push(clonedChild);
    }
    return newNode;
}