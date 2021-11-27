interface TreeNode {
    val: any,
    left: TreeNode | null,
    right: TreeNode | null
}
/* var flatten = function (root: TreeNode) {
    var preorderTraversal = function (root: TreeNode | null): number[] {
        if (root == null)
            return [];
        return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
    };
    var overrideTree = function (root: TreeNode, array: number[], index: number) {
        root.val = array[index];
        root.left = null;
        if (index === array.length - 1) {
            root.right = null;
            return;
        }

        root.right = {
            left: null,
            right: null,
            val: 0
        }
        overrideTree(root.right, array, index + 1)

    }
    const preorder = preorderTraversal(root);
    const rootPointer = root;
    overrideTree(root, preorder, 0);
    return root;
}; */

var flatten = function(root:TreeNode | null) {
    let current = root;
    
    while(current) {
        if(current.left) {
            let left = current.left;
            let right = current.right;
            
            // get right most for left
            let leftDupe = left;
            while(leftDupe.right) {
                leftDupe = leftDupe.right;
            }
            leftDupe.right = right;
            
            current.left = null;
            current.right = left;
        }
        current = current.right;
    }

    return root;
};
{
    const tree: TreeNode = {
        val: 1,
        left: {
            val: 2,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        },
        right: {
            val: 5,
            left: null,
            right: {
                val: 6,
                left: null,
                right: null
            }
        }
    }
    console.log("Hello")
    console.log(JSON.stringify(flatten(tree)));
}
