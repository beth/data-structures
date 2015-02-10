var makeQueue = function(){
  var obj = {};

  obj.storage = {};
  obj.start = 0;
  obj.end = -1;
  _.extend(obj,queueMethods);

  return obj;
};

queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[++this.end] = value;
};

queueMethods.dequeue = function(){
  if(this.end>=this.start){
    return this.storage[this.start++];
  }else
    return null;
};

queueMethods.size = function(){
  return this.end - this.start + 1;
