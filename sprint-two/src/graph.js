var Graph = function(){
  this.nodeList = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  if(Object.keys(this.nodeList).length === 1){
    toNode = Object.keys(this.nodeList)[0];
  }

  var newNodeObj = new Node(newNode);
  this.nodeList[newNode] = newNodeObj;
  if(toNode !== undefined){
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return node in this.nodeList;
};

Graph.prototype.removeNode = function(node){
  var nodeCon = this.nodeList[node].connections;
  _.each(nodeCon, function(toNode){
    this.removeEdge(node, toNode);
  });
  delete this.nodeList[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var fromNodeObj = this.nodeList[fromNode];
  return _.contains(fromNodeObj.connections, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromNodeObj = this.nodeList[fromNode];
  var toNodeObj = this.nodeList[toNode];
  fromNodeObj.connections.push(toNode);
  toNodeObj.connections.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromNodeCon = this.nodeList[fromNode].connections;
  var toNodeCon = this.nodeList[toNode].connections;
  var n1 = fromNodeCon.indexOf(toNode);
  var n2 = toNodeCon.indexOf(fromNode);
  fromNodeCon.splice(n1, 1);
  toNodeCon.splice(n2, 1);
  if(fromNodeCon.length === 0){
    this.removeNode(fromNode);
  }
  if(toNodeCon.length === 0){
    this.removeNode(toNode);
  }
};

Graph.prototype.forEachNode = function(func){
  _.each(this.nodeList,func);
};

var Node = function(value){
 this.value = value;
 this.connections = [];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
