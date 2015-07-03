var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newtail = Node(value);
    if(!list.head){
      list.head = newtail;
      list.tail = newtail;
      //newtail.next = newtail;
    } else if(list.head === list.tail) {
      list.head.next = newtail;
      list.tail = newtail;
    } else {
      list.tail.next = newtail;
      list.tail = newtail;
    }

    
  };

  list.removeHead = function(){
    var currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;
  };

  list.contains = function(target){
    var result = false;
    var looper = function(node) {
      if(node.value === target) {
        result = true;
      } else if(node.next !== null) {
        looper(node.next);
      }
      return result;
    }
    return looper(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
