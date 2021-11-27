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
var lowestCommonAncestor = function (root: TreeNode, p: TreeNode, q: TreeNode) {
    const pathP: TreeNode[] = [];
    const pathQ: TreeNode[] = [];
    findPath(root, p.val, pathP);
    findPath(root, q.val, pathQ);
    for (let i = pathP.length - 1; i >= 0; i--) {
        for (let j = pathQ.length - 1; j >= 0; j--) {
            if (pathP[i].val === pathQ[j].val) return pathQ[i]
        }
    }
};

function findPath(root: TreeNode | null, target: number, path: TreeNode[]): boolean {
    if (!root) return false;
    if (root.val == target) {
        path.push(root);
        return true;
    }

    path.push(root);
    const found = findPath(root.left, target, path) || findPath(root.right, target, path);
    if (!found) path.pop();
    return found;
}