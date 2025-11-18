import { MyDatabaseClassic } from "./db/my-database-classic";
import { MyDatabaseModule } from "./db/my-database-module";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.addUser({ name: "Welton", age: 30 });
myDatabaseClassic.addUser({ name: "Juliana", age: 26 });

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.addUser({ name: "Chigolton", age: 50 });
myDatabaseModule.addUser({ name: "Xulia", age: 16 });

export { myDatabaseClassic, myDatabaseModule };
