var bloomFilter = function(m){
  this._storage = [];
  this._m = m;
}

bloomFilter.prototype.insert = function(str){
  var bits = this._getBits(str);
  for(var i = 0; i<3; i++){
    this._storage[bits[i]] = 1;
  }
};

bloomFilter.prototype.maybeInSet = function(str){
  var bits = this._getBits(str);
  var present = true;
  for(var i = 0; i<3; i++){
    present = present && (this._storage[bits[i]] === 1);
  }
  return present;
}

bloomFilter.prototype._getBits = function(str){
  var bit = [];
  for(var i = 0; i<3; i++){
    bit.push(hashFunctions[i](str, this._m));
  }
  return bit;
}

var hashFunctions = [];

hashFunctions[0] = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

hashFunctions[1] = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<4) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

hashFunctions[2] = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<3) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
