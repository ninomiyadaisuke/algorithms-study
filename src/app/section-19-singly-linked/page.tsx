"use client";

export default function Page() {
  class Node {
    val: any;
    next: any;
    constructor(val: any) {
      this.val = val;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    head: any;
    tail: any;
    length: number;
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val: any) {
      let newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.head) return undefined;
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      // console.log(current.val);
      // console.log(newTail.val);
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }

    shift() {
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return currentHead;
    }
    unshift(val: any) {
      let newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

    get(index: number) {
      if (index < 0 || index >= this.length) return null;
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }

    set(index: number, val: any) {
      let foundNode = this.get(index);
      if (foundNode) {
        foundNode.val = val;
        return true;
      }
      return false;
    }

    insert(index: number, val: any) {
      if (index < 0 || index > this.length) return false;
      if (index === this.length) return !!this.push(val);
      if (index === 0) return !!this.unshift(val);
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
    remove(index: number) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();

      let prevNode = this.get(index - 1);
      let removed = prevNode.next;
      prevNode.next = removed.next;
      this.length--;

      return removed;
    }

    reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let prev = null;
      let next;
      for (let i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
      //  ['Hello', 'Goodbye', '!', '<3', ':)']
      //   Node      Next
      //   Hello -> null
      //   Prev     Node
      //   Prev     Node     Next
      //   Goodbye -> Hello -> null
      //             Prev     Node   Next
      //   ! -> Goodbye -> Hello -> null
      //                     Prev   Node   Next
      //   <3 -> ! -> Goodbye -> Hello -> null
      //                         Prev   Node   Next
      //   :) -> <3 -> ! -> Goodbye -> Hello -> null
    }

    print() {
      let arr = [];
      let current = this.head;
      while (current) {
        arr.push(current.val);
        current = current.next;
      }
      console.log(arr);
    }
  }

  let list = new SinglyLinkedList();

  list.push("Hello");
  list.push("Goodbye");
  list.push("!");
  list.push("<3");
  list.push(":)");

  // console.log(list.pop());
  // console.log(list.pop());
  // console.log(list.pop());

  // console.log(list.shift());
  // console.log(list.shift());
  // console.log(list.shift());

  // console.log(list.set(2,"!!!"));
  // console.log(list.get(2));
  // console.log(list.unshift("Hi"));

  // console.log(list.insert(0,"!!!"));

  console.log(list.print());
  console.log(list.reverse());
  console.log(list.print());

  // console.log(list);
  // let first = new Node("Hi")
  // first.next = new Node("there")
  // first.next.next = new Node("there")
  // console.log(first);

  return <div></div>;
}
