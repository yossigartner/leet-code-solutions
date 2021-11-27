interface TreeNode {
    val: any,
    left: TreeNode | null,
    right: TreeNode | null
}
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
 * @return {boolean}
 */
 var isBalanced = function(root:TreeNode | null):boolean {
    if(root == null) return true;
    return isBalanced(root.left) && isBalanced(root.right) &&  Math.abs(depth(root.left) - depth(root.right)) <= 1
};

var depth = function(root:TreeNode | null):number {
    if(root == null)
        return 0;
    
    return Math.max(depth(root.left),depth(root.right)) + 1;
}