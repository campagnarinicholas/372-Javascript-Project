/*
This program is just to show off what a class in JS would look like.
Class idea stolen and translated from Russ Lewis CSC120.
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    getValue() {
        return this.value;
    }
}

let head = new LinkedList(10);
head.next = new LinkedList(15);
head.next.next = new LinkedList(20);

while (head != null) {
    console.log(head.getValue());
    head = head.next;
}