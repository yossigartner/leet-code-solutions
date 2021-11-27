import { isLeaf } from "./tree";

var hasPathSum = function (root: TreeNode | null, targetSum: number): boolean {
    if (root == null) return false;
    if (isLeaf(root)) {
        return targetSum - root.val === 0;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

