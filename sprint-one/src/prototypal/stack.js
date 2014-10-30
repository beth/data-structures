var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack.count = 0;
  newStack.storage = {};
  return newStack;
  };

var stackMethods = {};


stackMethods.push = function(value){
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function(){
  if(this.count>0){
    var value = this.storage[this.count];
    this.count--;
    return value;
  }
  else
  {
    return null;
  }
};

stackMethods.size = function(){
  return this.count;
};

