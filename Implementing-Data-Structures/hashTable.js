class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // take key and hash it
    // hash indicates arr index
    // at location, create 2 element arr w. key and val
    set(key, val) {
        const address = this._hash(key);
        console.log(this.data[address]);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, val]);
        return this.data;
    }

    get(key) {
        const address = this._hash(key);
        if (!this.data[address]) {
            return undefined;
        }
        for (let i = 0; i < this.data[address].length; ++i) {
            if (this.data[address][i][0] === key) {
                return this.data[address][i][1];
            }
        }
        return undefined;
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.data.length; ++i) {
            if (this.data[i]) {
                keys.push(this.data[i][0][0]);
            }
        }
        return keys;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
console.log(myHashTable.keys());
