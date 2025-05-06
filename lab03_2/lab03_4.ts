function createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T {
    return new cls(...args);
 }

 class item {
    name: string;
    price: number;

    constructor (_name: string, _price: number) {
        this.name = _name;
        this.price = _price;
    }
 }

const item1 = createInstance<item>(item, "dsada", 31231321);
console.log(item1);