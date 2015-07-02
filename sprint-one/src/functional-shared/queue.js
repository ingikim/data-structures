var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.length = 0;
  obj.counter = 0;
  obj.increase = 0;
  obj.size = queueMethods.size;
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;

  return obj;
};

var queueMethods = {
	size : function(){
		return this.length;
	},
	enqueue : function(val){
		this.length++;
		this.increase++;
		this[this.increase] = val;
	},
	dequeue : function(){
		if(this.length > 0) {
		this.length--;
		this.counter++;
		return this[this.counter];			
		}
	}
};



