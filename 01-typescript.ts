interface User {
    name: string;
    id: number;
    isActive?: boolean;
    roles: string[];
    description?: string;
}

class UserClass {
    user: User;

    constructor(name: string, id: number) {
        this.user = { name, id, roles: ['admin'] };
    }
}

const userClassValue = new UserClass('Alice', 1);
console.log(userClassValue.user);
userClassValue.user.isActive = true;
console.log(`${userClassValue.user} is active`);
userClassValue.user.description = `
    This is a user description.
    It can be multiline.
`;
