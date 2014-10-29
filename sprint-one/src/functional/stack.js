var makeStack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    count ++;
    storage[count] = value;
  };

  someInstance.pop = function(){
    if(count > 0){
      var value = storage[count];
      count --;
      return value;
    } else{
      return null;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
