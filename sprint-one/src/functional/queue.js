var makeQueue = function(){
  var someInstance = {};
  var first = 0;
  var last = -1;

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = -1;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[++end] = value;
  };

  someInstance.dequeue = function(){
    if(start<=end){
      return storage[start++];
    }else
      return null;
  };

  someInstance.size = function(){
    return end - start + 1;
  };

  return someInstance;
};
