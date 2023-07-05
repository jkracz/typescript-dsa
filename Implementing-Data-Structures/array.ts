// implementing an array

class MyArray {
    length: number;
    data: any;
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index: number) {
        return this.data[index];
    }

    push(item: any) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index: number) {
        const item = this.data[index];
        this.#shiftItems(index);
        return item;
    }

    #shiftItems(index: number) {
        for (let i: number = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("there");
newArray.push("!");
newArray.delete(1);
console.log(newArray);
