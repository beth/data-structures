var Graph = function(){
  this.nodes = {};
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.edges = [];
  return node;
}

var myStringify = function(arg){
  if(typeof arg === "string"){
    return arg;
  }else
    return JSON.stringify(arg);
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = Node(newNode);
  //If there is exactly one node already there and toNode is undefined
  if(toNode === undefined && Object.keys(this.nodes).length === 1){
    toNode = Object.keys(this.nodes)[0];
  }
   this.nodes[myStringify(newNode)] = node;
  if(toNode !== undefined){
    this.addEdge(newNode, toNode);
  }
  
};

Graph.prototype.contains = function(node){
  return this.nodes.hasOwnProperty(myStringify(node));
};

Graph.prototype.removeNode = function(node){
  _.each(this.nodes[myStringify(node)].edges, function(edge){
    this.removeEdge(node, edge);
  });
  delete this.nodes[myStringify(node)];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var node = this.nodes[myStringify(fromNode)];
  return node.edges.indexOf(myStringify(toNode)) > -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //must add in both directions
  var fromName = myStringify(fromNode);
  var toName = myStringify(toNode);
  this.nodes[fromName].edges.push(toName);
  this.nodes[toName].edges.push(fromName);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //must remove in both directions
  var fromName = myStringify(fromNode);
  var toName = myStringify(toNode);

  //Remove edge from fromNode edge list
  var indexFromNode = this.nodes[fromName].edges.indexOf(toName);
  this.nodes[fromName].edges.splice(indexFromNode,1);
  if(this.nodes[fromName].edges.length === 0){
    this.removeNode(fromNode);
  }
  //Remove edge from toNode edge list
  var indexToNode = this.nodes[toName].edges.indexOf(fromName);
  this.nodes[toName].edges.splice(indexToNode,1);
  if(this.nodes[toName].edges.length === 0){
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
