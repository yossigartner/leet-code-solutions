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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root:TreeNode) {
    if(!root) return [];
    const result = [];
    const queue = [root];
    let isReversed = false;
    while(queue.length) {
        const currentLevelLength  = queue.length;
        const currentLevelOrder = [];
        for(let i = 0; i < currentLevelLength; i++) {
            const node = queue.shift() as TreeNode;
            isReversed ? currentLevelOrder.unshift(node.val) : currentLevelOrder.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(currentLevelOrder);
        isReversed = !isReversed;
    }
    
    return result;
};