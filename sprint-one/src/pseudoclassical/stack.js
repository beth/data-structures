var Stack = function() {
  this.storage = {};
  this.start = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.start++] = value;
};

Stack.prototype.pop = function(){
  if(this.start>0){
    return this.storage[--this.start];
  }else
    return null;
};

Stack.prototype.size = function(){
  return this.start;
};
