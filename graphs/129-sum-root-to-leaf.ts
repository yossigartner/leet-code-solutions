import { isLeaf } from "./tree";
var sumNumbers = function (root: TreeNode | null) {
    return calculatePath(root, 0);
};
function calculatePath(root: TreeNode | null, acc: number): number {
    if (root === null) return 0;
    if (isLeaf(root)) {
        return acc * 10 + root.val;
    }

    return calculatePath(root.left, acc * 10 + root.val) + calculatePath(root.right, acc * 10 + root.val)
}