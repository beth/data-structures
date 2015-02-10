var makeStack = function() {
  var obj = {}
  obj.storage = {};
  obj.end = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.end++] = value;
};

stackMethods.pop = function(){
  if(this.end>0){
    return this.storage[--this.end];
  }else
    return null;
};

stackMethods.size = function(){
  return this.end;
};


