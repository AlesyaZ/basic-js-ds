const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let nodeFind = this.rootTree;

    while (nodeFind !== null) {
      if (data < nodeFind.data) {
        nodeFind = nodeFind.left;
      } else if (data > nodeFind.data) {
        nodeFind = nodeFind.right;
      } else {
        return nodeFind;
      }
    }
    return null;
  }

  remove(data) {
  this.rootTree = deleteNode(this.rootTree, data);
  if (!this.rootTree) return null;

  function deleteNode(node, data) {
    if (data < node.data) {
      node.left = deleteNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = deleteNode(node.right, data);
      return node;
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let leftMax = node.left;
        while (leftMax.right) {
          leftMax = leftMax.right;
        }
        node.data = leftMax.data;
        node.left = deleteNode(node.left, leftMax.data); 
      }
      return node;
    }
  }
}

  min() {
    if (!this.rootTree) return;
    let currentNode = this.rootTree;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootTree) return;
    let currentNode = this.rootTree;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};