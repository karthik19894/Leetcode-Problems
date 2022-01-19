/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!p || !q || !root) return null;
    const lcaFound = { count : 0};
    
    const lca = findLCA(root, p.val, q.val, lcaFound);
    return lcaFound.count === 2 ? lca : null;
};

function findLCA(node, p, q, lcaFound){
    if(node === null) return null;
    const left = findLCA(node.left, p, q, lcaFound);
    const right = findLCA(node.right, p, q, lcaFound);
    if(node.val === p || node.val === q){
        lcaFound.count += 1;
        return node;
    }
    if(left && right) return node;
    return left === null ? right : left;
}