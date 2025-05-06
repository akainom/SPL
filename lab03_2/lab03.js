"use strict";
class BaseUser {
    getRole() {
        return this.role;
    }
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
}
class Guest extends BaseUser {
    constructor(_id, _name) {
        super(_id, _name);
        this.role = "Guest";
    }
    getPermissions() {
        return new Array("Просмотр контента");
    }
}
class Admin extends BaseUser {
    constructor(_id, _name) {
        super(_id, _name);
        this.role = "Admin";
    }
    getPermissions() {
        return new Array("Просмотр контента", "Добавление комментариев", "Удаление комментариев", "Управление пользователями");
    }
}
class User extends BaseUser {
    constructor(_id, _name) {
        super(_id, _name);
        this.role = "User";
    }
    getPermissions() {
        return new Array("Просмотр контента", "Добавление комментариев", "Удаление комментариев");
    }
}
const guest = new Guest(2, "name");
console.log(guest.getPermissions());
const admin = new Admin(1, "name");
console.log(admin.getPermissions());
