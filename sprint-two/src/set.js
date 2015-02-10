var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[myStringify(item)] = true;
};

setPrototype.contains = function(item){
  return this._storage.hasOwnProperty(this._myStringify(item));
};

setPrototype.remove = function(item){
  delete this._storage[this._myStringify(item)];
};

setPrototype._myStringify = function(item){
  if(typeof item !== "string"){
    return JSON.stringify(item);
  }else
    return item;
};
/*
 * Complexity: What is the time complexity of the above functions?
 * add: constant
 * contains: linear
 * remove: linear
 */
