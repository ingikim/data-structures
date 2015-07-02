var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.increase = 0;
  this.counter = 0;
};

Queue.prototype.size = function() {
	return this.length;
}

Queue.prototype.enqueue = function(value) {
	this.length++;
	this.increase++;
	this[this.increase] = value;
}

Queue.prototype.dequeue = function() {
	if(this.length > 0) {
		this.length--;
		this.counter++;
		return this[this.counter];
	}
}


