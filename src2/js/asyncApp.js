/* //Promise: 1:
const somethingOne = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve(`You resoolved this problem`), 2000)
    : reject(new Error(`This is error`))
    });
}

//Async and await:2:
const somethingTwo = async () => {
    const something = await somethingOne();
    console.log(something);
}
console.log(`BEFORE`);
somethingTwo();
console.log(`AFTER`); */

//Two)
/* const OneAsync = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve(`Yes`),3000)
    : reject(new Error(`You error`))
    });
}

const twoAsync = async () => {
    const problem =  await OneAsync();
    console.log(problem);
}

console.log(`OneValue`);
twoAsync();
console.log(`TwoValue`); */

//Three:
/* const threeAsync = () => {
    return new Promise((resolve, reject) => {
     //(true)
     (false)
     ? setTimeout(() => resolve(`This is the way`), 5000)
     :reject(new Error(`Not is the way`))
    });
}

const fourAsync = async () => {
  try {
   const elseAsync = await threeAsync();
   console.log(elseAsync);
  }catch(error){
   console.log(error);
  }
}
console.log(`OneERROR`);
fourAsync(); */

/* simbols */
//Identificar las propiedades de objeto.
//Se mantienen privados.

/* let id = Symbol("id");
let id2 = Symbol("id2"); */
//console.log(id === id2);
//console.log(id,id2);
//console.log(typeof id, typeof id2);

/* const NAME = Symbol();
const FIRSTNAME = Symbol();
const person = {
    [NAME]:"Chris",
    [FIRSTNAME]: "Velázquez"
}
console.log(person); */

/* SETS */
//Arreglo mejorado en js; sólo acepta valores únicos. 
//OBJECT
/* const set = new Set([1,2,3,4,5,6,7,8,9]);
console.log(set);
//ARRAY
let arr = Array.from(set);
console.log(arr);

//MÉTODO (HAS = ayuda a comprobar)/ validar un dato. 
console.log(set.has(1)); */

/* const set2 = new Set();
set2.add(11);
set2.add(12);
console.log(set2); */