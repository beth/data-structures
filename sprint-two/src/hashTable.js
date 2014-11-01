var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  this._count++;
  if (this._count >= this._limit * .75){
    this.changeSize(this._limit * 2);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined){
    var list = makeLinkedList();
  } else {
    var list = this._storage.get(i);
  }
  var obj = {key: k, value: v};
  list.addToTail(obj);
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
  this._count--;
  if(this._count <= (this._limit * .25)){
    this.changeSize(this._limit/2);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i);
  var node = list.searchList(function(node){
    if(node.value.key === k){
      return node;
    } else {
      return null;
    }
  });

  list.removeNode(node);
  this._storage.set(i, list);
};

HashTable.prototype.changeSize = function(size){
  var reHash = [];

  for(var i = 0; i < this._limit; i++){
    var list = this._storage.get(i);
    if(list !== undefined){
      while(list.head !== null){
        reHash.push(list.removeHead());
      }
    }
  }

  this._storage = makeLimitedArray(size);
  this._limit = size;
  this._count = 0;

  for(var i = 0; i < reHash.length;i++){
    this.insert(reHash[i].key, reHash[i].value);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert, retrieve, remove: constant
 * changeSize: linear
 */
