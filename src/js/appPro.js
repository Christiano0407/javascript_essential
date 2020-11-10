/* function printNumber() {
    let num = 5;
    for(i = 0; i < num; i++) {
       function eventNumber(n) {
        setTimeout(() => {
            console.log(n)
        }, 1000);
       }
       eventNumber(i);
    }
}
printNumber(); */

/* scope => Para importar archivos */
/* import mediaPlayer from ../js/archivo.js  (parte de arriba)*/

/* export default mediaPlayer (ejem / parte de abajo) */

//Clousures 
//Valores pre-definidos para traer nuevas funciones.
/* let color = `green`;

function printColor() {
    console.log(color)
}
printColor(); */

//2
/* function makeColor(color) {
    let colorMessage = `The color is ${color}`;

    return function() {
        console.log(colorMessage);
    }

}
let colorOnes = makeColor(`Azul`);
console.log(colorOnes()); */

//3
 function makeCounter(n) {
    let count = n;

    return  {
        increase: function() {
            count = count + 1;
        },
        decrease: function() {
            count = count -1;
        },
        getCount: function () {
            return count;
        },
    };
}
let counter = makeCounter(7);
console.log( `The counter is`, counter.getCount());
counter.increase();
console.log( `The counter is`, counter.getCount());
counter.decrease();
console.log( `The counter is`, counter.getCount());