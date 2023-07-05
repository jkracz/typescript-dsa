// to make a linked list, you could implement using an obj of objs
// each internal obj is a node that keeps track

class doubleListNode {
    value: number;
    next: doubleListNode | null;
    prev: doubleListNode | null;
    constructor(value: number, next?: doubleListNode | null, prev?: doubleListNode | null) {
        this.value = value;
        this.next = next || null;
        this.prev = prev || null;
    }
}

class DoublyLinkedList {
    head: doubleListNode | null;
    tail: doubleListNode | null;
    length: number;
    constructor(value: number) {
        this.head = new doubleListNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    printList(): number[] {
        const arr: number[] = [];
        let currNode: doubleListNode | null = this.head;
        while (currNode !== null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr;
    }

    append(value: number) {
        // create the new node
        const newNode: doubleListNode = new doubleListNode(value, null, this.tail);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value: number) {
        const newHead: doubleListNode = new doubleListNode(value, this.head);
        this.head.prev = newHead;
        this.head = newHead;
        this.length++;
    }

    traverseToIndex(index: number): doubleListNode | null {
        let counter: number = 0;
        let currNode: doubleListNode | null = this.head;
        while (counter !== index && currNode !== null) {
            currNode = currNode.next;
            counter++;
        }
        return currNode;
    }

    insert(index: number, value: number) {
        if (index <= 0) {
            this.prepend(value);
        } else if (index === this.length - 1 || index >= this.length) {
            this.append(value);
        } else {
            const prevNode: doubleListNode | null = this.traverseToIndex(index - 1);
            if (prevNode === null || prevNode.next === null) {
                console.log("index DNE");
            } else {
                const newNode: doubleListNode = new doubleListNode(value, prevNode.next, prevNode);
                prevNode.next.prev = newNode;
                prevNode.next = newNode;
            }
        }
        this.length++;
    }

    remove(index: number) {
        if (this.length === 0 || this.head === null) {
            console.log("nothing to remove");
        } else if (this.length === 1 || this.head.next === null) {
            this.tail = null;
            this.head = null;
        } else if (index <= 0) {
            this.head.next.prev = null;
            this.head = this.head.next;
        } else if (index >= this.length - 1) {
            const prevNode: doubleListNode | null = this.traverseToIndex(this.length - 2);
            if (prevNode !== null && prevNode.next !== null) {
                prevNode.next.prev = null;
                prevNode.next = null;
                this.tail = prevNode;
            }
        } else {
            const prevNode: doubleListNode | null = this.traverseToIndex(index - 1);
            if (prevNode === null || prevNode.next === null || prevNode.next.next === null) {
                console.log("something went wrong");
            } else {
                prevNode.next.next.prev = prevNode;
                prevNode.next = prevNode.next.next;
            }
        }
        this.length--;
    }
}

const myDoublyLL: DoublyLinkedList = new DoublyLinkedList(10);
myDoublyLL.append(5);
myDoublyLL.append(16);
myDoublyLL.prepend(1);
myDoublyLL.insert(2, 99);
myDoublyLL.remove(2);
console.log(myDoublyLL.printList());
