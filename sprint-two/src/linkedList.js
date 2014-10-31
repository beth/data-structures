var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (list.head === null){
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;

  };

  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target){
    var node = list.head;
    var found = node.value === target;

    while(!found && node.next != null){
      node = node.next;
      if(node.value === target){
        found = true;
      }
    }
    return found;
  };

  list.searchList = function(func){
    var node = list.head;
    var foundNode = func(node) ? node : undefined;

    while(foundNode === undefined && node.next != null){
      node = node.next;
      if(func(node)){
        foundNode = node;
      }
    }
    return foundNode;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
