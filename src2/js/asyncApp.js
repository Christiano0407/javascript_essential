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
