//Destructuring / Destructuración:

//ARRAY:
/* const number = [1,2,3,4,5];
//Sin destructurar:
let uno = number[0],
    dos = number[1],
    tres = number[2];
console.log(uno,dos, tres);

//Destructuración:
const [one, two, three, four] = number;
console.log(one, two, three, four); */

//OBJECT:
/* let person = {
    name: "Luis",
    subName: "Chávez",
    age: 28,
}
let{name, subName} = person;
console.log(name, subName); */

//Objetos Literales:
/* let name1 = "Luisa";
let name2 = "Alma";

const persons = { name1, name2, saludar: function() {console.log("Hola");}};
console.log(persons);
persons.saludar();
console.log(`Yo soy ${name1}, y ella es: ${name2}`); */
//2)
//const humano = {name1, name2, saludar(){console.log("Hola");}}
//humano.saludar();

//PARÁMETROS rest / Operador Spread:
//REST: traer, dar, obtener datos o información.

/* function sumar(a,b, ...c) {
  let resultado = a + b; 

  c.forEach(function(n) {
      resultado += n;
  });
    return resultado;
}
console.log(sumar(5,2));
console.log(sumar(5,2,1));
console.log(sumar(5,2,1,1)); */
//2) Expandir 
/* const arr1 = [1,2,3], 
      arr2 = [4,5,6];
      console.log(arr1, arr2);
const arr3 = [...arr1, ...arr2];
console.log(arr3); */

//Arrow Functions:
// 1) arrow = () => {};  arrow();
// 2) arrows = name => {console.log(name)}; arrows("Luisa");
// 3) suma = (a,b) => a + b; console.log(suma(5, 2));
/* const number = [1,2,3,4,5,6];

number.forEach((el,index) => console.log(`${el} está en ${index}`) ); */

//PROTOTYPE:
//POO (Programación Orientada a Objetos).
//POO = Clases, Objetos,Atributos, Métodso.
/* Atributo: Característica o propiedad del objeto (variables dentro del objeto
    Método: Acciones, son funciones dentro de un objeto*/
//OBJETOS = lowerCamelCase:

/* const animation = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Sing");
    }
}
console.log(animation); */

//class: Usar = UpperCamelCase: Inician con mayúsculas.
/* class SerHumano {
  constructor(nombre, genero) {
      this.name = nombre;
      this.genero = genero;
  }
  miNombre() {
      return `Mi nombre es: ${this.nombre}`
  }
} */
//Función Constructora:
/* function Animation(nombre, genero) {
    //Atributos
 this.nombre = nombre;
 this.genero = genero;
   //Método
 this.move = function() {
     console.log("Tengo un movimiento");
 }
} */
/* const snoopy = new Animation("Snoopy", "Masculino"),
      lolaBunny = new Animation("Lola Bunny", "Femenino");
console.log(snoopy);
console.log(lolaBunny);
snoopy.move(); */

//2)
/* function Animation(nombre, genero) {
    //Atributos
 this.nombre = nombre;
 this.genero = genero;
}
//Método agregado al prototipo:
Animation.prototype.move = function() {
    console.log("Tengo un movimiento");
}

const snoopy = new Animation("Snoopy", "Masculino"),
      lolaBunny = new Animation("Lola Bunny", "Femenino");
console.log(snoopy);
console.log(lolaBunny);
snoopy.move(); */

//Herencia Prototipal

