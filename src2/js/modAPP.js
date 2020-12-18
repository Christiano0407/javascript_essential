
import User, { printName as printUserName, printAge } from "../js/moduleApp";

const user = new User("Tony", 35);
console.log(user);
printUserName(user);
printAge(user);

