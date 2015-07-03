var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage.push(item);
};

setPrototype.contains = function(item){
	var index = _.indexOf(this._storage, item);
	if(index !== -1) {
		return true;
	}
	return false;
};

setPrototype.remove = function(item){
	if(this.contains(item)) {
		_.each(this._storage, function(value, index, array) {
			if(value === item) {
				array.splice(index, 1);
			}
		});
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
