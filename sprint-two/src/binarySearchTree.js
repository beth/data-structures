var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, makeBinarySearchTreeMethods);
  return newTree;
};

var makeBinarySearchTreeMethods = {};

makeBinarySearchTreeMethods.insert = function(value){
  var newChild = makeBinarySearchTree(value);
  var node = this;
  var subInsert = function(node){
    if(newChild.value > node.value){
      if(node.right === null){
        node.right = newChild;
      } else {
        subInsert(node.right);
      }
    }

    if(newChild.value < node.value){
      if(node.left === null){
        node.left = newChild;
      } else {
        subInsert(node.left);
      }
    }
  };

  subInsert(node);
};

makeBinarySearchTreeMethods.depthFirstLog = function(func){
  var node = this;

  var subDepthFirstLog = function(node){
    func(node.value);
    if(node.right !== null){
        subDepthFirstLog(node.right);
    }
    if(node.left !== null){
        subDepthFirstLog(node.left);
    }
  };

  subDepthFirstLog(node);
};

makeBinarySearchTreeMethods.contains = function(target){
  var found = false;
  var node = this;

  var subContains = function(node){
    if (node.value === target){
      found = true;
    } else if (target > node.value){
      if(node.right !== null){
        subContains(node.right);
      }
    } else if (target < node.value){
      if(node.left !== null){
        subContains(node.left);
      }
    }
  };

  subContains(node);
  return found;
};
/*
 * Complexity: What is the time complexity of the above functions?
 * contains, insert are log
 * depthFirstLog is linear
 */
