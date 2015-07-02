var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

	var obj = {};
	obj.length = 0;
	obj.size = stackMethods.size;
	obj.push = stackMethods.push;
	obj.pop = stackMethods.pop;
    
    return obj;
};






var stackMethods = { 
	size: function(){
		return this.length;
	},
	push: function(value){
		this.length++
		this[this.length] = value;
	},
	pop: function(){
		if(this.length > 0) {
			this.length--;
			return this[this.length + 1];
		}
	}
};
