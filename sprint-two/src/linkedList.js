var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var nodeContainer = {};
  var keymaker = 0;

  list.addToTail = function(value){
    var newtail = Node(value);
    newtail.value = value;
    list.tail = newtail;
    keymaker++;
    newtail.next = keymaker;
    nodeContainer[keymaker - 1] = newtail;
    if(!list.head) {
      list.head = list.tail;
    } 
  };

  list.removeHead = function(){
    if(list.head === list.tail) {
      return list.head.value;
    } else {
      list.head  = nodeContainer[list.head.next];
      return nodeContainer[list.head.next - 1].value; 
    }
  };

  list.contains = function(target){
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
