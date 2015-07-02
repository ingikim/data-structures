var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.length = 0;
  obj.counter = 0;
  obj.increase = 0;

  return obj;
};

var queueMethods = {};

queueMethods.size = function() {
	return this.length;
}

queueMethods.enqueue = function(value) {
	this.length++;
	this.increase++;
	this[this.increase] = value;
}

queueMethods.dequeue = function() {
	if(this.length > 0) {
		this.length--;
		this.counter++;
		return this[this.counter];
	}
}