var Queue = function() {
  this.last = -1;
  this.first = 0;
  this.storage = {};
};


Queue.prototype.dequeue = function(){
  if(this.first <= this.last){
    var value = this.storage[this.first];
    this.first++;
    return value;
  } else {
    return null;
  }

};

Queue.prototype.enqueue = function(value){
  this.last++;
  this.storage[this.last] = value;
};

Queue.prototype.size = function(){
  return this.last + 1 - this.first;
};
