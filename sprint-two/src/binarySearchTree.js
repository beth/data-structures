var makeBinarySearchTree = function(value){
  var obj = Object.create(makeBinarySearchTree.prototype);
  obj.left = null;
  obj.right = null;
  obj.value = value;
  return obj;
};

makeBinarySearchTree.prototype.insert = function(value){

  function placeValue(node){
    if(value < node.value){
      if(node.left === null){
        node.left = makeBinarySearchTree(value);
      }else
        placeValue(node.left);
    }else{
      if(node.right === null){
        node.right = makeBinarySearchTree(value);
      }else{
        placeValue(node.right);
      }
    }
  };
  placeValue(this);
};

makeBinarySearchTree.prototype.contains = function(value){
  var found = false;
  function findValue(node){
    if(value === node.value){
      found = true;
    }else if(value < node.value){
      if(node.left !== null){
        findValue(node.left);
      }
    }else{
      if(node.right !== null){
        findValue(node.right);
      }
    }
  }
  findValue(this);
  return found;
};

makeBinarySearchTree.prototype.depthFirstLog = function(callback){
  function depthFirst(node){
    callback(node.value);
    if(node.left !== null){
      depthFirst(node.left);
    }
    if(node.right !== null){
      depthFirst(node.right);
    }
  };
  depthFirst(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
