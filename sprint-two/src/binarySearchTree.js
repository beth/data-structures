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

makeBinarySearchTree.prototype.breadthFirstLog = function(callback){
  
  var queue = [];
  queue.push(this);

  while(queue.length>0){
    var node = queue.shift();
    callback(node.value);
    if(node.left !== null){
      queue.push(node.left);
    }
    if(node.right !== null){
      queue.push(node.right);
    }
  }
};

makeBinarySearchTree.prototype.makeSortedArray = function(){
  var arr = [];

  function findSmallest(base){
    var node = base;
    var parent = null;
    while(node.right !== null){
      parent = node;
      node = node.right;
    }
    return [parent, node];
  };

  function moveNode(parent, node){
    arr.push(node.value);
    if(parent !== null){
      parent.right = node.left;
    }
  };

  while(this.left !== null || this.right !== null){
    var res = findSmallest(base);
    moveNode(res[0], res[1]);
  };

  arr.push(this.value);
  return arr;
};

