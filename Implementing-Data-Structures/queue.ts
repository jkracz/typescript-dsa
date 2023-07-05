class QueueNode {
    value: string;
    next: QueueNode | null;

    constructor(value: string) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    first: QueueNode | null;
    last: QueueNode | null;
    length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(): string | null {
        if (this.first !== null && this.last !== null) {
            return this.first.value;
        } else {
            return null;
        }
    }
    enqueue(value: string) {
        // create a new node
        const newNode: QueueNode = new QueueNode(value);
        // set last.next to new node
        // set new node next to current last
        if (this.first !== null && this.last !== null) {
            this.last.next = newNode;
            this.last = newNode;
        } else {
            this.last = newNode;
            this.first = newNode;
        }
        ++this.length;
    }
    dequeue() {
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
            --this.length;
        } else if (this.first !== null && this.last !== null) {
            this.first = this.first.next;
            --this.length;
        }
    }
    isEmpty() {
        if (this.first !== null && this.last !== null && this.length !== 0) {
            return false;
        }
        return true;
    }
    //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("joy");
console.log(myQueue.peek());
myQueue.enqueue("matt");
myQueue.enqueue("pavel");
myQueue.enqueue("samir");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir
