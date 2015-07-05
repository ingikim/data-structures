var BinarySearchTree = function(value){
	var obj = Object.create(binaryMethods);
	obj.left;
	obj.right;
	obj.value = value;
	return obj;
};


var binaryMethods = {};

binaryMethods.insert = function(num){
	if(this.value < num) {
		if(typeof this.right === 'object') {
			this.right.insert(num);
		} else {
			this.right = BinarySearchTree(num);
		}
	} else {
		if(typeof this.left === 'object') {
			this.left.insert(num);
		} else {
			this.left = BinarySearchTree(num);
		}
	}
};

binaryMethods.contains = function(num){
	var result = false;
	if(this.value === num) {
		result = true;
	} else if(this.value < num) {
		if(typeof this.right === 'object') {
			return this.right.contains(num);
		}
	} else if(typeof this.left === 'object') {
		return this.left.contains(num);
	}
	return result;
};

binaryMethods.depthFirstLog = function(func){
	var valuesArray = [];
	var recursiveSearch = function(obj) {
		valuesArray.push(obj.value);
		if(typeof obj.right === 'object') {
			return recursiveSearch(obj.right);
		}
		if(typeof obj.left === 'object') {
			return recursiveSearch(obj.left);
		}
	}
	recursiveSearch(this);
	_.each(valuesArray, function(item){
		func(item);
	});	
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
