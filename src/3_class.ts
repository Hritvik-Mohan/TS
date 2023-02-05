// TS supports classes and oop
// you can use an interface declaration with classes

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user2: User = new UserAccount("Murphy", 1);