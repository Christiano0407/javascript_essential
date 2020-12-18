
import User, { printName as printUserName, printAge, printLove } from "./moduleApp.js";

const user = new User("Tony", 35, "Cader");
console.log(user);
printUserName(user);
printAge(user);
printLove(user);

