class SimpleHashMap<T> {
    private data: (T | undefined)[];

    constructor(private size: number = 100) {
        this.data = new Array(this.size);
    }

    private hash(key: number): number {
        if (key < 0 || key >= this.size) throw new Error("Key out of bounds");
        return key; // Perfect hash for 0–99
    }

    set(key: number, value: T): void {
        const index = this.hash(key);
        this.data[index] = value;
    }

    get(key: number): T | undefined {
        const index = this.hash(key);
        return this.data[index];
    }

    has(key: number): boolean {
        return this.get(key) !== undefined;
    }

    delete(key: number): void {
        const index = this.hash(key);
        this.data[index] = undefined;
    }
}

const map = new SimpleHashMap<string>();

map.set(5, "apple");
map.set(42, "banana");

console.log(map.get(5));   
console.log(map.get(42));  
console.log(map.has(10));  

map.delete(5);
console.log(map.get(5));   



