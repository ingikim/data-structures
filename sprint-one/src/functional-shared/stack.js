var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

var stackMethods = { 
	storage:{},
	length: 0};

stackMethods.size = size;
stackMethods.push = push;
stackMethods.pop = pop;

return stackMethods;
};

var size = function(){
	return length;
};

var push = function(value){
	length++;
	storage[length] = value;
};

var pop = function(){
	if(length > 0){
		length--;
		return storage[length + 1];
	}
};