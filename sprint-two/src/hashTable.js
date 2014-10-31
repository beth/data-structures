var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === null || this._storage.get(i) === undefined){
      var list = makeLinkedList();
   } else {
    var list = this._storage.get(i);
  }
  var obj = {key: k, value: v};
  list.addToTail(obj)
  this._storage.set(i, list);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i);
  var node = list.searchList(function(node){
    if(node.value.key === k){
      return true;
    } else{
      return false;
    }
  });
  if(node === undefined){
    return null;
  }
  return node.value.value;
};

HashTable.prototype.remove = function(k){
 var i = getIndexBelowMaxForKey(k, this._limit);
 var list = this._storage.get(i);
 var node = list.searchList(function(node){
    if(node.value.key === k){
      return node;
    } else{
      return null;
    }
  });

 list.removeNode(node);
 this._storage.set(i, list);
  //get list in bucket
  //find node in list
  //delete node from list
  //put modified list back in bucket
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
