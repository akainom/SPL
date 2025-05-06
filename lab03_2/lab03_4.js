"use strict";
function createInstance(cls, ...args) {
    return new cls(...args);
}
class item {
    constructor(_name, _price) {
        this.name = _name;
        this.price = _price;
    }
}
const item1 = createInstance(item, "dsada", 31231321);
console.log(item1);
