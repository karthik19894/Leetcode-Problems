/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    
    int nodesFound = 0;
    
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode lca = findLCA(root, p, q);
        if(nodesFound == 2) return lca;
        return null;
    }
    
    private TreeNode findLCA(TreeNode root, TreeNode p, TreeNode q){
        if(root == null) return null;
        TreeNode left = findLCA(root.left, p, q);
        TreeNode right = findLCA(root.right, p, q);
        if((root.val == p.val) || (root.val == q.val)){
            nodesFound += 1;
            return root;
        }
        return left == null ? right : right == null ? left : root;
    }
}