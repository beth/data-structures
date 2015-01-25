var Queue = function() {
  this.storage =  {};
  this.start = 0;
  this.end = -1;
};

Queue.prototype.enqueue = function(value){
  this.storage[++this.end] = value;
}

Queue.prototype.dequeue = function(){
  if(this.end>=this.start){
    return this.storage[this.start++];
  }else
    return null;
}

Queue.prototype.size = function(){
  return this.end - this.start + 1;
}


