import { User } from "../interfaces/user";

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): MyDatabaseClassic {
    if (!MyDatabaseClassic._instance) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(user: User): void {
    this.users = this.users.filter((u) => u.name !== user.name);
  }

  showUsers(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
