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
