//Puedes pasar (concatenar) argumentos a funciones.
//Método concat().
/* let myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5])); */

//2):
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

//Hight Order Arrow Functions:
//INCREMENT:
/* const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    }
})();
console.log(increment(5,2));
console.log(increment(5)); */

//Rest Operators with Function Parameters
//.reduce() = Ejecuta una función REDUCTORA sobre cada elemento de un Array, devolviendo como resultado un único valor. 

/* const sum = (function() {
    //1)
    return function sum (x, y, z) {
        const arg = [x, y, z];
        return arg.reduce((a, b) => a + b, 0);
    } 
    //2)
    return function sum(...args) {
      return args.reduce((a,b) => a + b, 0);
    }
})();
console.log(sum(1,2,3,4)); */

//USE Spread Operators to Evaluate Arrays In-Place:
//Operador de propagación se parece al operador de resto tres puntos.

/* const arr1 = [`JAN`, `FEB`, `MAR`, `APR`, `MAY`];

let arr2; 
(function() {
    arr2 = arr1;
    arr1[0] = `December`
})();
console.log(arr2); 
console.log(arr1.length); */

//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLE FROM OBJECT(dESTRUCTURACIÓN DE ASIGNACIÓN):
//Asignar cuidadosamente valores tomados de un objeto a una variable.
//1)
/* let voxel = {x: 3.6, y: 7.4, z: 6.54};
let x = voxel.x; //3.6
let y = voxel.y; //7.7
let z = voxel.z //6.54

const {x : a, y : b, z : c} = voxel; //a = 3.6, b = 7.4, c = 6.54
console.log(voxel); */
//
/* const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79,
};

function getTempOfTomorrow(avgTemperatures) {

    const  { tomorrow : tempOfTom} = avgTemperatures;
    return tempOfTom;
}
console.log(getTempOfTomorrow(AVG_TEMPERATURES)); */

//NESTED OBJECT : asignar variables de objetos anidados.
/* const LOCAL_FOREST = {
    today: {min: 72, max: 83},
    tomorrow : {min: 80, max: 84.6}
};
getMaxOfTmrw = (forecast) => {
  const {tomorrow: {max: maxValue}} = forecast;
  return maxValue;
}
console.log(getMaxOfTmrw(LOCAL_FOREST)); */

//USE DESTRUCTURING ASSIGNMENT TO ASSING VARIABLE FROM ARRAY:
//aSIGNACIÓN DE ESTRUCTURACIÓN PARA ASIGNAR VARIABLES DE ARREGLOS

//1)
/* const [z,x,y] = [1,2,3,4,5,6];
if(z === 1 && x === 2) {
    console.log("Z es igual a 1, y x es 2");
}else {
    console.log("Nada!");
}
console.log(z,x,y); */

//REST OPERATORS:
/* const SOURCE = [1,2,3,4,5,6,7,8,9,10];
removeFirst = (list) => {
    const [, , ...arr ] = list;
    return arr;
}
const arr = removeFirst(SOURCE);
console.log(arr);
console.log(SOURCE.length); */

//USE Destructuring Assignment to Pass an Object as a Function´s Parameters.
//Ayuda  API (Solicitar información):

/* const data = {
    max: 56.78, 
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85,
};

const half = (function(){
    return function half({max, min, median}) {
        return(max + min + median);
    };

})();
console.log(data);
console.log(half(data)); */


