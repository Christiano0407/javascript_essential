//Callback = Promeses = Generators = Async / Await.

/* num = () => {
 let numeros = 20;
 if(numeros === 20) {
     console.log("Soy un número.");
 }else {
     console.log("No es ciero");
 }
}
num(); */
/* nombres = (nom1, nom2) => {
  console.log(`Hola, yo soy ${nom1}, y mi esposa es ${nom2}`);
}
nombres("Mauricio", "Sadri"); */
/* person = (pers1 = "Lizbeth", pers2 = "Natalia") => {
   console.log(`Yos soy ${pers1}, y mi hermana es ${pers2}.`);
}
person(); */
/* nombres = () => {
    let names = {name: "Luisa", edad: 29};
 console.log(names.name);
}
nombres(); */

//función anónima 
/* const anonima = (a = "Liz", b = "CDMX") => {
  console.log(`Hola yo soy ${a}, y soy de ${b}`);
}
anonima(); */
/* const a = [1,2,3,4,5];
const b = ["Luisa", "Natasha", "Mariam"];
const c = [];
const d = [{name: "Alma"}, "New York", "CDMX"];

console.log(a.length);
console.log(a[0]);
console.log(b[1]);
console.log(c);
console.log(d);
console.log(d[0]); */
//MÉTODO ".of".
//.push()/pop()
/* const e = Array.of("a", "b", "c", 5, 8);
console.log(e);
console.log(e[4]); */
/* const f = new Array(5,6,7,8);
console.log(f); */

//MÉTODO:
//forEach()
/* const color = ["Azul", "Verde", "Rojo"];
color.forEach((el, index) => {
    console.log(`<li>id="${index}" ${el}</li>`);
}); */

//Objects:
//const b = {name:"Bruno", age: 20};
//const c = new Object("Alma");
//console.log(b);
//console.log(c);

/* const chris = {
  name: "Chris",
  apellido: "Evans",
  edad: 35,
  personaje: ["Capitán América", "Antorcha Humana"],
  soltero: true,
  pelicula: {avenger: "End Game", capitan: "Soldado Invierno"},
  saludar: function(){
    console.log("Saludo, desde Marvel Studios");
  }
}
//Propiedades:
console.log(chris);
console.log(chris.pelicula.avenger);
console.log( `Yo soy el ${chris.personaje[0]}`);
//Método:
chris.saludar(); */
/* const jon = {
  name: "Johny",
  apellido: "Bravo",
}
console.log(`Hola, yo soy ${jon.name}, ${jon.apellido}`); */
//
// !-Not = Niega / ||-Or = O con que se cumpla una condicional / &&- Cumplan las dos condicionales.
/* let pay = 5;
if(pay === 5 && pay <= 5) {
  console.log("Pagamos muy poco");
}else {
  console.log("Es mucho...?");
}
let pasteles = 2;
if(pasteles === 2 || pasteles == true) {
  console.log("Son de chocolate");
}else {
  console.log("No lo son");
} */
//
//CONDICIONALES Y CICLOS:
/* let a = 5;
for(i = 0; i <= a; i++) {
  console.log(i);
} */
//While (Mientras):
/* let count = 0;

while(count <= 10) {
  console.log(count);
  count++;
} */
/* let contador = 2;

while(contador <= 12){
   if(contador === 10) {
     console.log("Siempre ganando");
   }else {
     console.log("No impotan");
   }
  console.log(contador);
  contador++;
} */
//
//DO WHILE
/* let num = 1;
do {
 console.log(num);
 num++;
}while(num <= 10); */
//
//FOR(Declaración/Condicional/Iteración o incremento e decremento):
/* const numeros = [10,20,30,40,50,60,70,80,90];
for(let i = 0; i < numeros.length; i++) {
  if(numeros[i] === 50 || numeros[i] === 80) {
    console.log("Es la mitad");
  }else if(numeros[i] === 90) {
    console.log("Faltan diez");
  }else {
    console.log("Vamos a pagar cada uno, diez");
  }
  console.log(numeros[i]);
} */
//
//For in:Recorrer e iterar propiedades de un arreglo or object.
/* const person = {
  name: "Luisa",
  apellido: "Vazquez",
  edad: 25,
}
for(const propiedad in person) {
   console.log(`Key: ${propiedad}, value: ${person[propiedad]}`);
} */
/* const mujer = {
  name: "Kader",
  apellido: "Velázquez",
  edad: 25,
}
for(const data in mujer) {
  console.log(`${data} ${mujer[data]}`);
} */
//For of = Recorrer todos los elementos de cualquier objetos o Array(más) / iterar.
/* const number = [10,20,30,40,50];
for(const data of number) {
  console.log(data);
} */
//
//Try and Catch.
/* try {
(El código a evaluar)
}catch(error){
(errores en el try o surgidos del try)
}finally{
(se ejecutará siempre al final de un bloque try-catch)
} */
//
//throw = Marca una excepción.
try {
  let numero = "Chris";
  if(isNaN(numero)) {
  throw new Error("No es un número")
  }
  console.log(numero * numero);
}catch(error){
  console.log(`Tenemos un error ${error}`);
}