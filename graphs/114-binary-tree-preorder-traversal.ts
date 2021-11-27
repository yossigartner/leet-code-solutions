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
 * @return {number[]}
 */
var preorderTraversal = function (root: TreeNode | null): number[] {
    const arr: number[] = [];
    if (root == null)
        return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};