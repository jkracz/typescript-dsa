// to make a linked list, you could implement using an obj of objs
// each internal obj is a node that keeps track

// type listNode = {
//     value: number;
//     next: listNode | null;
// };

class listNode {
    value: number;
    next: listNode | null;
    constructor(value: number, next?: listNode | null) {
        this.value = value;
        this.next = next || null;
    }
}

class LinkedList {
    head: listNode | null;
    tail: listNode | null;
    length: number;
    constructor(value: number) {
        this.head = new listNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    printList(): number[] {
        const arr: number[] = [];
        let currNode: listNode | null = this.head;
        while (currNode !== null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr;
    }

    append(value: number) {
        // create the new node
        const newNode: listNode = new listNode(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value: number) {
        const newHead: listNode = new listNode(value, this.head);
        this.head = newHead;
        this.length++;
    }

    traverseToIndex(index: number): listNode | null {
        let counter: number = 0;
        let currNode: listNode | null = this.head;
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
            const prevNode: listNode | null = this.traverseToIndex(index - 1);
            if (prevNode === null) {
                console.log("index DNE");
            } else {
                const newNode: listNode = new listNode(value, prevNode.next);
                prevNode.next = newNode;
            }
        }
        this.length++;
    }

    remove(index: number) {
        if (this.length === 0 || this.head === null) {
            console.log("nothing to remove");
        } else if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else if (index <= 0) {
            this.head = this.head.next;
        } else if (index >= this.length - 1) {
            const prevNode: listNode | null = this.traverseToIndex(this.length - 2);
            if (prevNode !== null) {
                prevNode.next = null;
                this.tail = prevNode;
            }
        } else {
            const prevNode: listNode | null = this.traverseToIndex(index - 1);
            if (prevNode === null || prevNode.next === null || prevNode.next.next === null) {
                console.log("something went wrong");
            } else {
                prevNode.next = prevNode.next.next;
            }
        }
    }

    reverse() {
        if (this.head === null || this.head.next === null) {
            return this;
        }
        let prevNode: listNode | null = null;
        let currNode: listNode | null = this.head;
        let nextNode: listNode | null = this.head.next;

        this.head = this.tail;
        this.tail = currNode;
        while (currNode !== null) {
            // console.log(
            //     "PREV: ",
            //     prevNode,
            //     "\n",
            //     "CURR: ",
            //     currNode,
            //     "\n",
            //     "NEXT: ",
            //     nextNode,
            //     "\n ITERATION DONE-------"
            // );
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
            if (nextNode !== null) {
                nextNode = nextNode.next;
            }
        }
        return this;
    }
}

const myLL: LinkedList = new LinkedList(10);
myLL.append(5);
myLL.append(16);
myLL.prepend(1);
myLL.insert(2, 99);
console.log(myLL.printList());
myLL.reverse();
console.log(myLL.printList());
