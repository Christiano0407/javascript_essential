//EXPORT
export default class Person {
 constructor(name, firstName){
   this.name = name
   this.firstName = firstName
 }
}

export function oneName(user){
  console.log(`Your names is ${user.name}`)
}
export function twoFirstName(user){
  console.log(`She firstName is ${user.firstName}`)
}

