You are given the root of a binary tree root. Invert the binary tree and return its root.

Input: root = [1,2,3,4,5,6,7]

Output: [1,3,2,7,6,5,4]


class Solution {
  /**
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  invertTree(root) {
    // Base case
    if (root === null) return null;

    // Swap left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert subtrees
    this.invertTree(root.left);
    this.invertTree(root.right);

    return root;
  }
}
