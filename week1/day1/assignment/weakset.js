//The WeakSet object lets you store weakly held objects in a collection.

var ws = new WeakSet();
var obj1 = {};
var obj2 = {};

ws.add(obj1);
ws.add(obj2);

ws.has(obj1);    // true
ws.has(obj2);    // true
ws.has(obj3);    //false

ws.delete(obj2); // removes foo from the set
ws.has(obj2);   //false
