var makeBinarySearchTree = function(value){
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};


treeMethods.insert = function(value){
  var newChild = makeBinarySearchTree(value);
  if(newChild.value > this.value){
    this.
  } else{

  }
};

treeMethods.depthFirstLog = function(value){
};

treeMethods.contains = function(target){
  var found = false;
  var containsSub = function(tree){
    if(tree.value === target){
      found = true;
    } else {
      _.each(tree.children, function(child){
        containsSub(child);
      });
    }
  };
  containsSub(this);
  return found;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
