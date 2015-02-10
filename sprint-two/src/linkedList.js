var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(this.head === null){
      //First node, don't need to set next or previous
      this.head = this.tail = newNode;
    }else{
      //Need to set next, tail, and previous on new node
      newNode.previous = this.tail;
      this.tail.next = this.tail = newNode; 
    }

  };

  list.removeHead = function(){
    if(this.head !== null){ //there is something to remove
      var node = this.head;
      this.head = this.head.next;
      if(this.head === null){ //there was only one node and now it is removed
        this.tail = null;
      }else{
        this.head.previous = null;
      }
      return node.value;
    }else
      return null;
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);
    if(this.head === null){ //nothing in list yet
      this.head = this.tail = newNode;
    }else{ //Need to set next on new node, previous on current head, reset head
      newNode.next = this.head;
      this.head.previous = this.head = newNode;
    }
  };

  list.removeTail = function(){
    if(this.tail !== null){ //if list is not empty
      var node = this.tail;
      this.tail = this.tail.previous;
      if(this.tail === null){ //there was only one node and now it is removed
        this.head = null;
      }else{
        this.tail.next = null;
      }
      return node.value;
    }else
      return null;
  };

  list.contains = function(target){
    var node = this.head;
    while(node !== null){
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
