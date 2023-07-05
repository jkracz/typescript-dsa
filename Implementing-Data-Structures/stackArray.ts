class ArrayStack {
    arr: string[];

    constructor() {
        this.arr = [];
    }
    peek(): string {
        return this.arr[this.arr.length - 1];
    }
    push(value: string) {
        this.arr.push(value);
    }
    pop() {
        this.arr.pop();
    }
    //isEmpty
}

const myArrayStack = new ArrayStack();

console.log(myArrayStack.peek());
myArrayStack.push("Google");
console.log(myArrayStack.peek());
myArrayStack.push("Udemy");
console.log(myArrayStack.peek());
myArrayStack.push("Discord");
console.log(myArrayStack.peek());
myArrayStack.pop();
console.log(myArrayStack.peek());
myArrayStack.pop();
console.log(myArrayStack.peek());
console.log(myArrayStack);
