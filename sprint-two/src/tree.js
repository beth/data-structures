 var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function(){
  var child = this;
  var index;
  for(var i = 0; i<child.parent.children.length; i++){
    if(child.parent.children[i] === child){
      index = i;
    }
  }
  child.parent.children.splice(index,1);
  child.parent = null;
  return child;
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

treeMethods.traverse = function(callback){

  var recursiveTraverse = function(node){
    callback(node.value);
    for(var i = 0; i<node.children.length; i++){
      recursiveTraverse(node.children[i]);
    };
  };

  recursiveTraverse(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
