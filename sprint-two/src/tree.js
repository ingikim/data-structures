var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return _.extend(newTree, treeMethods);
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var node = Tree(value);
	this.children.push(node);
};

treeMethods.contains = function(target){
	var result = false;
	var searcher = function(obj, target){
		_.each(obj.children, function(item) {
			if(item.value === target) {
				result = true;
			} else if(item.children.length > 0) {
				searcher(item, target);
			}
		});
		if(result){
			return result;
		}
	};
	searcher(this, target);
	return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
