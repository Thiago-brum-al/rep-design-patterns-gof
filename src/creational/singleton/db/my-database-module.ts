import type { User } from "../interfaces/user";

const users: User[] = [];

export const MyDatabaseModule = {
    add(user: User) {
        users.push(user);
    },

    remove(i: number): void {
        users.splice(i, 1);
    },

    show(): void {
        for (const u of users) {
            console.log(u);
        }
    }
}