var makeStack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[start++] = value;
  };

  someInstance.pop = function(){
    if(start > 0)
      return storage[--start];
    else
      return null;
  };

  someInstance.size = function(){
    return start;
  };

  return someInstance;
};
