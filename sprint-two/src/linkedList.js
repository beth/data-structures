var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(this.head === null){
      this.head = this.tail = newNode;
    }else{
      this.tail.next = this.tail = newNode; 
    }

  };

  list.removeHead = function(){
    if(this.head != null){
      var node = this.head;
      this.head = this.head.next;
      return node.value;
    }else
      return null;
  };

  list.contains = function(target){
    var node = this.head;
    while(node != null){
      if(node.value === target){
        return true;
      }
      node = node.next;
    }
    return false;
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
