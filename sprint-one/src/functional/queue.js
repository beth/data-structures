var makeQueue = function(){
  var someInstance = {};
  var first = 0;
  var last = -1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    last++;
    storage[last] = value;
  };

  someInstance.dequeue = function(){
    if (last >= first){
      var value = storage[first];
      first++;
      return value;
    } else {
      return null;
    }
  };

  someInstance.size = function(){
    return last+1-first;
  };

  return someInstance;
};
