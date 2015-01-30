var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

var getBucket = function(k,limit){
  var i = getIndexBelowMaxForKey(k,limit);
  return this._storage.get(i);
}

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  var found = false;
  for(var j = 0; j<bucket.length; j++){
    if(bucket[j][0] === k){
      bucket[j][1] = v;
      found = true;
      break;
    }
  }
  if(!found){
    bucket.push([k,v]);
    this._storage.set(i,bucket);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket){
    for(var j = 0; j<bucket.length; j++){
      if(bucket[j][0] === k){
        return bucket[j][1];
      }
    }
  }else
    return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket){
    for(var j = 0; j<bucket.length; j++){
      if(bucket[j][0] === k){
        bucket[j][1] = null;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
