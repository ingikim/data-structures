var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newtail = Node(value);
    if(!list.head){
      list.head = newtail;
      this.tail = newtail;
      newtail.next = newtail;
    } else if(this.head === this.tail) {
      this.head.next = newtail;
      list.tail = newtail;
    } else {
      this.tail.next = newtail;
      this.tail = newtail;
    }

    
  };

  list.removeHead = function(){
    var currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;
  };

  list.contains = function(target){
    var currentNode = list.head;

    var looper = function(node) {
      if(node.value === target) {
        return true;
      } else if(node.next !== null) {
        looper(node.next);
      }
      return false;
    }

    looper(currentNode);
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
