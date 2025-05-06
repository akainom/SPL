function Shape(type, color) {
    this.type = type;
    this.color = color;
}
let a = new Circle("red");
console.log(a);
Shape.prototype.getProperties = function() {
    return {
        type: this.type,
        color: this.color
    };
};

function Circle(color) {
    Shape.call(this, 'Circle', color);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Triangle(lines) {
    Shape.call(this, 'Triangle', 'white');
    this.lines = lines;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

function Square(color) {
    Shape.call(this, 'Square', color);
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

function ColoredSquare(color) {
    Square.call(this, color);
}

ColoredSquare.prototype = Object.create(Square.prototype);
ColoredSquare.prototype.constructor = ColoredSquare;

const greenCircle = new Circle('green');
const trippleLinedTriangle = new Triangle(3);
const smallSquare = new Square('yellow');
const coloredSquare = new ColoredSquare('red');

console.log('зеленый круг:', greenCircle.getProperties());
console.log('треугольник с тремя линиями:', trippleLinedTriangle.getProperties());
console.log('маленький квадрат:', smallSquare.getProperties());
console.log('цветной квадрат:', coloredSquare.getProperties());
console.log('цвет маленького квадрата:', smallSquare.color);
console.log('цвет цветного квадрата:', coloredSquare.color);
console.log('цвет треугольника:', trippleLinedTriangle.color);
console.log('цвет зеленого круга:', greenCircle.color);

class Person {
    constructor(firstName, surname, birthYear, address) {
        this.firstName = firstName;
        this.surname = surname;
        this.birthYear = birthYear;
        this.address = address;
    }

    get age() {
        return new Date().getFullYear() - this.birthYear;
    }

    setAddress(newAddress) {
        this.address = newAddress;
    }
}

const adfsada = new Person(1, 1, 1, 1);
console.log("...................", adfsada.age);

class Student extends Person {
    static studentCounter = 0;

    constructor(firstName, surname, birthYear, address, facultyCode, specializationCode, admissionYear, isPublicSector) {
        super(firstName, surname, birthYear, address);
        this.facultyCode = facultyCode;
        this.specializationCode = specializationCode;
        this.admissionYear = admissionYear;
        this.isPublicSector = isPublicSector;

        Student.studentCounter++;
        this.studentCount = Student.studentCounter;
        this.gradeBookNumber = this.calculateGradeBookNumber();
    }

    getFullName()
    {
        return `${this.firstName} ${this.surname}`
    }
    calculateGradeBookNumber() {
        const year = this.admissionYear.toString().slice(-2);
        const budgetCode = this.isPublicSector ? '1' : '2';
        const sequentialNumber = String(this.studentCount).padStart(3, '0');
        return `${this.facultyCode}${this.specializationCode}${year}${budgetCode}${sequentialNumber}`;
    }
}

class Faculty {
    constructor(name, code) {
        this.name = name;
        this.code = code;
        this.students = [];
        this.studentCount = 0;
    }

    addStudent(student) {
        this.students.push(student);
        this.studentCount++;
    }

    getDevCount() {
        return this.students.filter(student => student.specializationCode == '3').length;
    }

    getStudentCount() {
        return this.studentCount;
    }

    listAllStudents() {
        this.students.forEach(student => {
            console.log(student.getFullName(), student.gradeBookNumber);
        });
    }
}

const facultyIT = new Faculty('Факультет информационных технологий', '7');

const student1 = new Student('Иван', 'Иванов', 2004, 'Адрес 1', '7', '1', 2022, true);
const student2 = new Student('Петр', 'Петров', 2003, 'Адрес 2', '7', '2', 2023, false);
const student3 = new Student('Сергей', 'Сергеев', 2002, 'Адрес 3', '7', '3', 2021, true);
const student4 = new Student('Анна', 'Антонова', 2004, 'Адрес 4', '7', '2', 2022, false);
const student5 = new Student('Мария', 'Маркова', 2003, 'Адрес 5', '7', '1', 2021, true);
const student6 = new Student('Олег', 'Олегов', 2002, 'Адрес 6', '7', '3', 2023, false);

facultyIT.addStudent(student1);
facultyIT.addStudent(student2);
facultyIT.addStudent(student3);
facultyIT.addStudent(student4);
facultyIT.addStudent(student5);
facultyIT.addStudent(student6);

console.log('Количество студентов ДЭВИ:', facultyIT.getDevCount());
console.log('Общее количество студентов на факультете ИТ:', facultyIT.getStudentCount());
facultyIT.listAllStudents();