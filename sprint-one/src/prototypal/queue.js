var makeQueue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.last = -1;
  newQueue.first = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.dequeue = function(){
  if(this.first <= this.last){
    var value = this.storage[this.first];
    this.first++;
    return value;
  } else {
    return null;
  }

};

queueMethods.enqueue = function(value){
  this.last++;
  this.storage[this.last] = value;
};

queueMethods.size = function(){
  return this.last + 1 - this.first;
};



