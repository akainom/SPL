abstract class BaseUser {
    id: number;
    name: string;
    role: string;

    getRole(): string{
        return this.role;
    }

    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }

    abstract getPermissions(): Array<string>
}

class Guest extends BaseUser {
    constructor (_id, _name) {
        super(_id, _name);
        this.role = "Guest";
    }

    getPermissions(): Array<string> {
        return new Array<string> ("Просмотр контента");
    }
}

class Admin extends BaseUser {
    constructor (_id, _name) {
        super(_id, _name);
        this.role = "Admin";
    }

    getPermissions(): Array<string> {
        return new Array<string> ("Просмотр контента", "Добавление комментариев", "Удаление комментариев", "Управление пользователями");
    }
}

class User extends BaseUser {
    constructor (_id, _name) {
        super(_id, _name);
        this.role = "User";
    }

    getPermissions(): Array<string> {
        return new Array<string> ("Просмотр контента", "Добавление комментариев", "Удаление комментариев");
    }
}

const guest = new Guest(2, "name");
console.log(guest.getPermissions());
const admin = new Admin(1, "name");
console.log(admin.getPermissions());