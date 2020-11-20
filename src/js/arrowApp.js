//Puedes pasar (concatenar) argumentos a funciones.
//Método concat().
/* let myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5])); */

//2)
//Método filter()
//isInteger()
//Number.isInteger() = Dteremina si el valor pasado es de tipo entero.
//.map() = Crea un nuevo Array con los resultados de la llamada a la función indicada a cada uno de sus elementos. 
/* const realNumber = [4, 5, 6, -9.8, 3.14, 42, 6, 8.34, -2 ];
const squareList = (arr) => {
 
    const squareIntegers =  arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers;
}
const squareIntegers = squareList(realNumber);
console.log(squareIntegers); */
