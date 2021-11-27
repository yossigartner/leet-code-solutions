export interface TreeNode {
    val: any,
    left: TreeNode | null,
    right: TreeNode | null
}

export function isLeaf(node: TreeNode) {
    return (node.right === null && node.left === null)
}