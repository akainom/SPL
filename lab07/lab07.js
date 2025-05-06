const person = {
    firstName: 'игорь',
    lastName: 'лепехин',
    age: 25,
    greet: function() {
        console.log(`привет ${this.firstName} ${this.lastName}.`);
    },
    ageAfterYears: function(years) {
        return this.age + years;
    }
};

person.greet();

const car = {
    model: 'машына',
    year: 3070,
    getInfo: function() {
        console.log(`Модель: ${this.model}, Год: ${this.year}`);
    }
};

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.getTitle = function() {
        return this.title;
    };
    this.getAuthor = function() {
        return this.author;
    };
}



const team = {
    players: ['playa1', 'playa2', 'playa3'],
    showPlayers: function() {
        this.players.forEach(function(player) {
            console.log(`Игрок: ${player}`);
        });
    }
};

team.players[1] = 'plaa33333';

const counter = (function() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();

const item = {};
Object.defineProperty(item, 'price', {
    value: 100,
    writable: true,
    configurable: true
});
Object.defineProperty(item, 'price', {
    writable: false,
    configurable: false
});

const circle = {
    radius: 5,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
    get radiusValue() {
        return this.radius;
    },
    set radiusValue22(value) {
        this.radius = value;
    }
};

circle.radiusValue22 = 12;


let carImmutable = {};
Object.defineProperties(carImmutable, {
    make: { value: 'Toyota', writable: true, configurable: true, enumerable: true },
    model: { value: 'Camry', writable: true, configurable: true, enumerable: true },
    year: { value: 2020, writable: true, configurable: true, enumerable: true }
});

Object.defineProperties(carImmutable, {
    make: { writable: false, configurable: false },
    model: { writable: false, configurable: false },
    year: { writable: false, configurable: false }
});

console.log(carImmutable.make, carImmutable.model, carImmutable.year);
console.log("++++++++++++++++++");
console.log(carImmutable);
const numbers = [1, 2, 3];
Object.defineProperty(numbers, 'sum', {
    get: function() {
        return this.reduce((acc, num) => acc + num, 0);
    },
    configurable: false
});

const rectangle = {
    width: 5,
    height: 10,
    get area() {
        return this.width * this.height;
    },
    get widthValue() {
        return this.width;
    },
    set widthValue(value) {
        this.width = value;
    },
    get heightValue() {
        return this.height;
    },
    set heightValue(value) {
        this.height = value;
    }
};

const user = {
    firstName: 'Иван',
    lastName: 'Иванов',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.greet();
console.log('Возраст после 5 лет : ', person.ageAfterYears(5));

console.log ('тачка');
car.getInfo();

console.log('книга :');
const book1 = new Book('олегатор', 'олег');
console.log(book1.getTitle());
console.log(book1.getAuthor());

console.log('кОМАНДА!!');
team.showPlayers();

console.log('счетчик');
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.getCount()); 

console.log('item');
console.log(item.price);

console.log('krug(circle)');
console.log(circle.area);
circle.radiusValue = 10;
console.log(circle.area);

console.log('массив numbers');
console.log(numbers.sum);

console.log('прямоугольник');
console.log(rectangle.area);
rectangle.widthValue = 7;
console.log(rectangle.area);
console.log(user.fullName);

console.log('');
user.fullName = 'андрей андрейченко';
console.log(user.firstName);
console.log(user.lastName);