const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

interface IUser {
    id: number,
    name: string,
    group: number
}

let user1:IUser = array[0];
console.log(user1);

type CarsType = {
    manufacturer?: string;
    model?: string;
}

let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';

const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

type ArrayCarsType = {
    cars?: Array<CarsType>;
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type DoneType = boolean
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students: Array <StudentType>// массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

const student1: StudentType = {
    id: 1,
    name: 'alex',
    group: 1,
    marks: [{subject:"math", mark: 2, done: true}, {subject: "physics", mark: 1, done: false}]
}

const student2: StudentType = {
    id: 2,
    name: 'george',
    group: 2,
    marks: [{subject:"math", mark: 6, done: false}, {subject: "physics", mark: 4, done: true}]
}

const Group: GroupType = {
    students: [student1, student2],
    studentsFilter: function (group: number) {
        return this.students.filter(student => student.group === group)
    },
    marksFilter: function (mark:number) {
        return this.students.filter(student => student.marks.some(marks => marks.mark === mark))
    },
    deleteStudent: function (id: number): void {
        let target = this.students.filter(student => student.id === id);
        this.students.splice(target.id, 1);
    },
    mark: 2 as MarkFilterType,
    group: 2 as GroupFilterType
}


console.log(Group.marksFilter(1));

console.log('Group :', Group.students);
console.log('Удаляем первого студента ...'); Group.deleteStudent(Group.students[0].id)
console.log('Group :', Group.students);