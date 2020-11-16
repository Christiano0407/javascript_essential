//In line comments 
//Data Types and Variables (undefined, null(nada-valor nada), boolean(true o false), string(cadena de texto), symbol, number, object(Puede almacenar clave-valor)).
// Var (No es muy recomendada porque, la lee todo el progama).
//let(local) y const(valor no se mueve) (scope).

//Variables w/Assigment Operators(+,=,-,*...etc)
/* let a = 9; */

//DECLARATIONS:
/* var studVar; */
//ASSIGMENTS:
/* studVar = 10; */
//numbers
/* let num;
num = 10;
console.log(num); */
//increment Number (++)
/* let num = 10;
console.log(num += 5); */
//Decrement(- o --)
//
/* let rema;
rema = 11 % 3;
console.log(rema); */
//+=, -=, ++, --, incrementan el mismo valor. 
/* let a = 10;
a += 12;
console.log(a);
let b = 25;
b -= 22;
console.log(b); 
let c = 2;
c *= 2;
console.log(c);*/

//Variable w/ string (+ + = Concatenar texto, ${})
/* let firstName = "Alan";
console.log(`Hola, yo soy ${firstName}`);
let divNumber = {
    name: "Luisa",
    age: 25,
    country: "Canadá",
}
console.log(`hOLA!, yo soy ${divNumber.name}, y tengo ${divNumber.age}. Soy de ${divNumber.country}`);
 */
//Concatenar texto
/* let myStr = "First sentence ";
myStr += "I´m second sentence";
console.log(myStr); */
//método = .lenght = Lee los caracteres o datos que tiene.
/* let firstData = 0;
let firstName = "Alan";
firstData = firstName.length;
console.log(firstData); */
//2
/* firstName = "Alana"; */
/* console.log(firstName[1]); */
/* console.log(firstName.length); */
/* function names() {
    let name1 = "samantha";

    if(name1[0] === "s") {
        console.log("Tu nombre comienza con una s");
    }else {
        console.log("Nos equivocamos");
    }
    console.log(name1.length); 
}
names(); */
//3
/* function wordBlank(myName, myCountry, myColor) {
   let result = "";
    result += "Hola " + myName + " " + myCountry + " " + myColor;
   return result;
}
console.log(wordBlank("Chris", "Canadá", "Blue"));
new wordBlank(console.log("Alma", "México", "Red")); */

//ARRAY []
/* let array = ["John", 23];
let myArray = [["Luisa", 1], ["Natasha", 25]];
console.log(myArray);

let data = [50, 60, 70];
let myData = data[0];
console.log(myData);
 */
/* let personas = [ 
    {name:"Nayeli",
     pais: "Canadá"},
    {name:"Luis", pais: "Italia"},
]
console.log(personas); */
//3 Remplazar datos
/* let ourArray = [18, 20, 25];
ourArray[1] = 60;
console.log(ourArray) */
//4 Dimensional
/* let myArray = [[1,2,3], [4,5,6], [7,8,9], [[10, 11, 12], 13,14]];
let myData = myArray[2][1];
console.log(myData); */
//=8
/* MATRIZ */
//Proto = prototipe(agregan o quitan).
//.push() = Agregar al final de la matriz.
//.pop() = pODEMOS ELIMINAR UN ELEMENTO DE UNA MATRIZ.
//.shift() = Eimina el primer elemento de la matriz, en lugar del último.
//.unshift() = Agrega un elemento al comienzo de la matriz.
/* let ourArray = ["Alma", "A", "Perro"];
 ourArray.shift();
 ourArray.unshift("Luisa");
console.log(ourArray); */

//Ejemplo de una Matriz en ShopingList:
/* let myList = [["cereal", 3], ["Milk", 2], ["bananas", 3], ["Juice", 2], ["Eggs", 12]];
console.log(myList); */

/* FUNCTIONS */
/* ourFunction = () => {
    console.log("Hola Mundo");
}
ourFunction(); */
//2)
//Parámetros:
/* ourFunction = (a, b) => {
   console.log(`Hola ${a}, mi ${b}`);
}
ourFunction("Maria", "Money"); */
//3)
//Global Scope and Functions (var, let, const).

/* var myGlobal = 10; 

fun1 = () => {
    oopsGlobal = 5;
}

fun2 = () => {
    let output = "";
    if(typeof myGlobal != "undefined") {
      output += "myGlobal:" + myGlobal;
    }else if(typeof oopsGlobal != "undefined"){
      output += "oopsGlobal:" + oopsGlobal;
    }else {
    console.log("No funcionó nada");
    }
    console.log(output);
}
fun1();
fun2(); */

//Return: Retorna una función.
/* miNum = (num) => {
    return num -7;
}
console.log(miNum(10)); */
/* var processed = 0;
processArg = (num) => {
    return (num + 5) / 5;
}
console.log(processed - processArg(10)); */

//JSON y Array.
//JSON.stringify() = convierte un objeto a valor de javascript en una cadena de texto en JSON.
/* nextLine = (arr, item) => {
arr.push(item);
return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];

console.log("Before:" + JSON.stringify(testArr));
console.log(nextLine(testArr, 8));
console.log("After: " + JSON.stringify(testArr)); */

/* let text = [1,2,3,4,5];
text.shift();
text.push(9);
console.log("Text:" + JSON.stringify(text) ); */

//Booleano: TRUE OR FALSE 
//Condicionales (if):

/* ourTrue = (isTrue) => {
    if(isTrue) {
     return "Yes I´m true";
    }else {
        console.log("False!")
    }
}
console.log(ourTrue(true)); */
//Operadores de comparación (==, === etc).
/* testEqual = (val) => {
if(val === 12) {
    return "Equal";
}else {
    return "Not Equal";
}
} 
console.log(testEqual(12)); */
/*  value = (a, b) => {
     if(a === b) {
         console.log("Vaya!");
     }else if(a != b ){
         console.log("No lo son")
     }else {
         console.log("Demonios!");
     }
 }
value(5, 10);  */

/* num = () => {
 let = 5;
 for (i = 0; i = num; i++){
    if(num === 5) {
        console.log("Yes")
    }else {
        console.log("No!");
    }
 }
}
num() */

