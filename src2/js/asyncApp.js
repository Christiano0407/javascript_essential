//Promise: 1:
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
console.log(`AFTER`);