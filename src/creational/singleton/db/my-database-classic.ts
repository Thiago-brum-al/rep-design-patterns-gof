import type { User } from "../interfaces/user";

export class MyDatabaseClassic {
    private static _instance: MyDatabaseClassic | undefined = undefined;
    private readonly users: User[] = [];
    private constructor() { };

    static get instance(): MyDatabaseClassic {
        if (MyDatabaseClassic._instance) return MyDatabaseClassic._instance;
        MyDatabaseClassic._instance = new MyDatabaseClassic();
        return MyDatabaseClassic._instance;
    }

    add(user: User){
        this.users.push(user);
    }

    remove(i: number): void {
        this.users.splice(i, 1);
    }

    show(): void {
        for(const u of this.users){
            console.log(u);
        }
    }
}