var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var count = 0;
  var increase = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    length++;
    increase++;
    storage[increase] = value;
  };

  someInstance.dequeue = function(){
    if(length > 0) {
      length--;
      count++;
      return storage[count];
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
