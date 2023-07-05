class StackNode {
    value: string;
    next: StackNode | null;

    constructor(value: string) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    top: StackNode | null;
    bottom: StackNode | null;
    length: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(): string | null {
        if (!this.isEmpty() && this.top) {
            return this.top.value;
        }
        return null;
    }
    push(value: string) {
        // create new node
        const pushNode: StackNode = new StackNode(value);

        if (!this.isEmpty() && this.top !== null) {
            const oldTop = this.top;
            this.top = pushNode;
            this.top.next = oldTop;
        } else {
            this.top = pushNode;
            this.bottom = pushNode;
        }
        ++this.length;

        // HAPPY PATH - SOME ITEMS EXIST
        // make current top point to it
        // set top to new node

        // UNHAPPY PATH - STACK EMPTY
        // new node equal bottom
        // new node equal top

        // increment length
    }
    pop() {
        // HAPPY PATH - SOME ITEMS EXIST
        // remove top? but then the one before becomes top... how do I set that?
        // I did the order wrong. next shoulld go top down, not bottom up
        if (!this.isEmpty() && this.top !== null) {
            this.top = this.top.next;
            --this.length;
        }
        // if there's just one element, set both top and bottom to null
        else if (this.length === 1) {
            this.top = null;
            this.bottom = null;
            --this.length;
        }
        // if there's no item, then do nothing
    }

    isEmpty(): boolean {
        if (this.length === 0) {
            return true;
        }
        return false;
    }
}

const myStack = new Stack();
console.log(myStack.peek());
myStack.push("Google");
console.log(myStack.peek());
myStack.push("Udemy");
console.log(myStack.peek());
myStack.push("Discord");
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack);

//Discord
//Udemy
//google
