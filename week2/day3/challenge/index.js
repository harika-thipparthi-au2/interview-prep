// Single Linked List Class
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const listNode = new LinkedListNode(1);
listNode.next = new LinkedListNode(2);
listNode.next.next = new LinkedListNode(3);
listNode.next.next.next = new LinkedListNode(4);
listNode.next.next.next.next = new LinkedListNode(5);

console.log(listNode);

function rotateRight(head, k) {
  let tail = head;
  if (head === null) return head;
  let len = 1;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  tail.next = head;
  let count = len - (k % len);
  while (count > 0) {
    head = head.next;
    tail = tail.next;
    count--;
  }
  tail.next = null;
  return head;
};

console.log("*****------*******-------*******------******");
console.log("Rotated linked list is ====>");
console.log(rotateRight(listNode,2));
