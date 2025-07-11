"use strict";
class SimpleHashMap {
    constructor(size = 100) {
        this.size = size;
        this.data = new Array(this.size);
    }
    hash(key) {
        if (key < 0 || key >= this.size)
            throw new Error("Key out of bounds");
        return key; // Perfect hash for 0–99
    }
    set(key, value) {
        const index = this.hash(key);
        this.data[index] = value;
    }
    get(key) {
        const index = this.hash(key);
        return this.data[index];
    }
    has(key) {
        return this.get(key) !== undefined;
    }
    delete(key) {
        const index = this.hash(key);
        this.data[index] = undefined;
    }
}
const map = new SimpleHashMap();
map.set(5, "apple");
map.set(42, "banana");
console.log(map.get(5));
console.log(map.get(42));
console.log(map.has(10));
map.delete(5);
console.log(map.get(5));
