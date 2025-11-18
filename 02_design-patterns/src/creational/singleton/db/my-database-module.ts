import { User } from "../interfaces/user";

const users: User[] = [];

export const MyDatabaseModule = {
  addUser(user: User): void {
    users.push(user);
  },

  removeUser(user: User): void {
    users.filter((u) => u.name !== user.name);
  },

  showUsers(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
