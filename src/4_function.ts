
interface User {
    name: string;
    id: number;
}

// You can use interface to annotate parameters and return values to functions:

function getAdminUser(): User {
    //...
    return {name: "yo", id: 2,}
}

function deleteUser(user: User) {
    //...
}