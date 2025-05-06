class Task {
    static lastId = 0; // Статическая переменная для генерации id

    constructor(title) {
        this.id = ++Task.lastId; // Генерация нового id
        this.title = title;
        this.completed = false; // По умолчанию задача не выполнена
    }

    // Метод для изменения названия задачи
    updateTitle(newTitle) {
        this.title = newTitle;
    }

    // Метод для изменения состояния задачи
    toggleCompleted() {
        this.completed = !this.completed;
    }
}
const task2342 = new Task('task231321');
class Todolist {
    static lastId = 0; // Статическая переменная для генерации id

    constructor(name) {
        this.id = ++Todolist.lastId; // Генерация нового id
        this.name = name;
        this.tasks = []; // Список задач
    }

    // Метод для добавления новой задачи
    addTask(task) {
        this.tasks.push(task);
    }

    // Метод для фильтрации задач по состоянию
    filterTasks(completed) {
        return this.tasks.filter(task => task.completed == completed);
    }

    // Метод для изменения названия списка дел
    updateName(newName) {
        this.name = newName;
    }
}

// Демонстрация работы с классами
const todolist1 = new Todolist('Список покупок');
const todolist2 = new Todolist('Рабочие задачи');

// Создаем задачи
const task1 = new Task('Купить молоко');
const task2 = new Task('Написать отчет');
const task3 = new Task('Погулять с собакой');

// Добавляем задачи в списки
todolist1.addTask(task1);
todolist1.addTask(task3);
todolist2.addTask(task2);

// Изменяем состояние задач
task1.toggleCompleted(); // Задача выполнена
task2.toggleCompleted(); // Задача выполнена

// Фильтруем задачи
const completedTasks1 = todolist1.filterTasks(true);
const completedTasks2 = todolist2.filterTasks(true);

// Вывод результатов
console.log(`Задачи в списке "${todolist1.name}":`);
console.log(todolist1.tasks);

console.log(`Задачи в списке "${todolist2.name}":`);
console.log(todolist2.tasks);

console.log(`Выполненные задачи в списке "${todolist1.name}":`);
console.log(completedTasks1);

console.log(`Выполненные задачи в списке "${todolist2.name}":`);
console.log(completedTasks2);

console.log(Task.lastId);
console.log(Todolist.lastId);