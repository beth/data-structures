var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var found = false;

  var recursiveSearch = function(node){
    if(node.value === target)
    {
      found = true;
    }else{
      for(var i = 0; i<node.children.length; i++){
        recursiveSearch(node.children[i]);
      }
    }
  };

  recursiveSearch(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
