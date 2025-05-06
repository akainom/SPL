class ProductList {
    constructor() {
        this.products = new Set();
    }

    addProduct(product) {
        this.products.add(product);
    }

    removeProduct(product) {
        this.products.delete(product);
    }

    hasProduct(product) {
        return this.products.has(product);
    }

    getProductCount() {
        return this.products.size;
    }

    listProducts() {
        return Array.from(this.products);
    }
}

const productList = new ProductList();
productList.addProduct("Яблоко");
productList.addProduct("Банан");
console.log(productList.listProducts());
console.log(productList.hasProduct("Яблоко"));
console.log(productList.getProductCount());
productList.removeProduct("Яблоко");
console.log(productList.listProducts());

class Student {
    constructor(id, group, fullName) {
        this.id = id;
        this.group = group;
        this.fullName = fullName;
    }
}

class StudentList {
    constructor() {
        this.students = new Set();
    }

    addStudent(student) {
        this.students.add(student);
    }

    removeStudentById(id) {
        this.students = new Set([...this.students].filter(student => student.id !== id));
    }

    filterByGroup(group) {
        return Array.from(this.students).filter(student => student.group === group);
    }

    sortById() {
        return Array.from(this.students).sort((a, b) => a.id - b.id);
    }
}

const studentList = new StudentList();
studentList.addStudent(new Student(1, "A", "Иванов И.И."));
studentList.addStudent(new Student(2, "B", "Петров П.П."));
console.log(studentList.filterByGroup("A"));
console.log(studentList.sortById());
studentList.removeStudentById(1);
console.log(studentList.sortById());

class ProductStore {
    constructor() {
        this.products = new Map();
    }

    addProduct(id, name, quantity, price) {
        this.products.set(id, { name, quantity, price });
    }

    removeProductById(id) {
        this.products.delete(id);
    }

    removeProductsByName(name) {
        for (let [id, product] of this.products) {
            if (product.name === name) {
                this.products.delete(id);
            }
        }
    }

    updateQuantity(id, quantity) {
        if (this.products.has(id)) {
            this.products.get(id).quantity = quantity;
        }
    }

    updatePrice(id, price) {
        if (this.products.has(id)) {
            this.products.get(id).price = price;
        }
    }

    getTotalItems() {
        return this.products.size;
    }

    getTotalCost() {
        let total = 0;
        for (let product of this.products.values()) {
            total += product.quantity * product.price;
        }
        return total;
    }
}

const store = new ProductStore();
store.addProduct(1, "Яблоко", 10, 30);
store.addProduct(2, "Банан", 5, 20);
console.log(store.getTotalItems());
console.log(store.getTotalCost());
store.updateQuantity(1, 15);
store.removeProductsByName("Банан");
console.log(store.getTotalCost());

class Cache {
    constructor() {
        this.cache = new WeakMap();
    }

    memoize(func) {
        return (...args) => {
            if (this.cache.has(args)) {
                return this.cache.get(args);
            }
            const result = func(...args);
            this.cache.set(args, result);
            return result;
        };
    }
}

const cache = new Cache();
const expensiveCalculation = (num) => {
    return num * num;
};

const memoizedCalculation = cache.memoize(expensiveCalculation);
console.log(memoizedCalculation(5)); // 25
console.log(memoizedCalculation(5)); // 25 (из кэша)
console.log(memoizedCalculation(10)); // 100