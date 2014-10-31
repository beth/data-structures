var Graph = function(){
  this.nodeList = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  if(Object.keys(this.nodeList).length === 1){
    toNode = Object.keys(this.nodeList)[0];

  }

  var newNodeObj = new Node(newNode);
  //newNode.connections.push();
  this.nodeList[newNode] = newNodeObj;

};

Graph.prototype.contains = function(node){
  return node in this.nodeList;
};

Graph.prototype.removeNode = function(node){
  delete this.nodeList[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

var Node = function(value){
 this.connections = [];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
