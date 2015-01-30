var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype._getBucket = function(k,limit){
  var i = getIndexBelowMaxForKey(k,limit);
  var bucket = this._storage.get(i);
  if(bucket === undefined){
    bucket = [];
    this._storage.set(i,bucket);
  }
  return bucket;
}

HashTable.prototype.insert = function(k, v){
  var bucket = this._getBucket(k, this._limit);
  var found = false;

  _.each(bucket, function(tuple){
    if(tuple[0]===k){
      tuple[1] = v;
      found = true;
    }
  });

  if(!found){
    bucket.push([k,v]);
  }

};

HashTable.prototype.retrieve = function(k){
  var bucket = this._getBucket(k, this._limit);
  var value = null;

  _.each(bucket, function(tuple){
    if(tuple[0]===k){
      value = tuple[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k){
  var bucket = this._getBucket(k, this._limit);
  _.each(bucket, function(tuple){
    if(tuple[0] === k){
      tuple[1] = null;
    }
  });
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
