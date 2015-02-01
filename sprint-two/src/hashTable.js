var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
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
    this._count++;
    bucket.push([k,v]);
    if(this._count >= .75*this._limit){
      this._resize(2*this._limit);
    }
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
  var toRemove;
  _.each(bucket, function(tuple, index){
    if(tuple[0] === k){
      toRemove = index;
    }
  });
  if(toRemove !== undefined){
    bucket.splice(toRemove,1);  
    this._count--;
    if(this._count < this._limit*.25){
      this._resize(Math.floor(this._limit/2));
    } 
  }
};

HashTable.prototype._resize = function(size){
  var temp = [];
  this._storage.each(function(bucket){
    if(bucket){
      _.each(bucket, function(tuple){
        temp.push(tuple);
      });
    }
  });
  console.log(this);
  this._limit = size;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
  for(var i = 0; i<temp.length;i++){
    this.insert(temp[i][0], temp[i][1]);
  };
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
