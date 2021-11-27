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
 * @return {number}
 */
var maxDepth = function (root: TreeNode | null):number {
    if (root == null)
        return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};