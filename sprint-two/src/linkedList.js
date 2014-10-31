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
      newNode.previous = list.tail;
    }
    list.tail = newNode;

  };

  list.removeHead = function(){
    if(list.head === null && list.tail === null){
      return null;
    }

    var value = list.head.value;
    if (list.head === list.tail){
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
      list.head.previous = null;
    }
    return value;
  };

  list.removeNode = function(node){
    var value = list.head.value;
    if (list.head === list.tail){
      list.head = null;
      list.tail = null;
    } else if(node.previous === null){
      node.next.previous = null;
      list.head = node.next;
    } else if(node.next === null){
      node.previous.next = null;
      list.tail = node.previous;
    } else {
      node.previous.next = node.next;
      node.next.previous = node.previous;
    }
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
    if(list.head === null && list.tail === null){
      return undefined;
    }
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
