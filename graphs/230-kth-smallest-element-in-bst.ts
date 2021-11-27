var kthSmallest = function (root: TreeNode, k: number) {
    var inorderTraversal = (root: TreeNode | null): number[] => {
        if (root === null) return [];
        return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
    }

    const sortedArray = inorderTraversal(root);
    return sortedArray[k - 1];
};

