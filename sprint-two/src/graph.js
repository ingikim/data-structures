

var Graph = function(){
	this.storage = [];
	this.edges = [];
};

Graph.prototype.addNode = function(node){
	this.storage.push(node);
};

Graph.prototype.contains = function(node){
	var result = false;
	_.each(this.storage, function(item) {
		if(item === node) {
			result = true;
		}
	});
	return result;
};

Graph.prototype.removeNode = function(node){
	var index = _.indexOf(this.storage, node);
	if(index >= 0) {
		this.storage.splice(index, 1);
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var result = false;
	_.each(this.edges, function(item) {
		if(item[0] === fromNode && item[1] === toNode) {
			result = true;
		}
	});
	return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.edges.push([fromNode, toNode], [toNode, fromNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	_.each(this.edges, function(item, index, array) {
		if(item[0] === fromNode && item[1] === toNode) {
			array.splice(index, 1);
		}
		if(item[0] === toNode && item[1] === fromNode) {
			array.splice(index, 1);
		}
	});
};

Graph.prototype.forEachNode = function(cb){
	
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



