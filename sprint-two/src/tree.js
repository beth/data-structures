var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  this.children.push(child);
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
 * addChild: constant
 * contains: linear
 */
