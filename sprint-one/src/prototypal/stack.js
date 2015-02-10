var makeStack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.start = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.start++] = value;
};

stackMethods.pop = function(){
  if(this.start>0){
    return this.storage[--this.start];
  }else
    return null;
};

stackMethods.size = function(){
  return this.start;
};

