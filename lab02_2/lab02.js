"use strict";
const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
let user1 = array[0];
console.log(user1);
let car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
const car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
const car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
const arrayCars = [{
        cars: [car1, car2]
    }];
const student1 = {
    id: 1,
    name: 'alex',
    group: 1,
    marks: [{ subject: "math", mark: 2, done: true }, { subject: "physics", mark: 1, done: false }]
};
const student2 = {
    id: 2,
    name: 'george',
    group: 2,
    marks: [{ subject: "math", mark: 6, done: false }, { subject: "physics", mark: 4, done: true }]
};
const Group = {
    students: [student1, student2],
    studentsFilter: function (group) {
        return this.students.filter(student => student.group === group);
    },
    marksFilter: function (mark) {
        return this.students.filter(student => student.marks.some(marks => marks.mark === mark));
    },
    deleteStudent: function (id) {
        let target = this.students.filter(student => student.id === id);
        this.students.splice(target.id, 1);
    },
    mark: 2,
    group: 2
};
console.log(Group.marksFilter(1));
console.log('Group :', Group.students);
console.log('Удаляем первого студента ...');
Group.deleteStudent(Group.students[0].id);
console.log('Group :', Group.students);
