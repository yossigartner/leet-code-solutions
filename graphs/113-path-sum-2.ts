var pathSum = function (root: TreeNode, targetSum: number) {
    const result: number[][] = [];
    var findTarget = (root: TreeNode | null, target: number, path: number[]) => {
        if (root === null) return [];
        if (isLeaf(root)) return target - root.val === 0 ? result.push([...path, root.val]) : [];

        path.push(root.val)
        findTarget(root.left, target - root.val, path);
        findTarget(root.right, target - root.val, path);
        path.pop();
    }
    findTarget(root, targetSum, []);
    return result;
};

function isLeaf(root: TreeNode) {
    return root.left === null && root.right === null;
}