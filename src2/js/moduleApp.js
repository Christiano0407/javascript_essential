export default class User {
    constructor(name, age, love){
        this.name = name
        this.age = age
        this.love = love
    }
}

export function printName(user) {
console.log(`User name is: ${user.name}`);
}

export function printAge(user){
    console.log(`This is age ${user.age} years old`);
}

export function printLove(user){
    console.log(`This is your love: ${user.love}`)
}


