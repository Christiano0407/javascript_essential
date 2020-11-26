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
/* function Person(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Person.prototype.saludar = function() {
    console.log(`Hola, yo soy ${this.nombre}, y me apellido ${this.apellido}`);
}

function Friend(nombre, apellido, pais){
  this.persons = Person;
  this.persons(nombre,apellido);
  this.pais = pais;
}
//Heredando de Person (arriba).
Friend.prototype = new Person();
Friend.prototype.constructor = Friend;

//sobrecribir un método:
Friend.prototype.saludar = function() {
    console.log("Yo soy su amigo.");
}
//New Método (de los que ya existe):
Friend.prototype.abrazar = function() {
    console.log( `Yo siempre te voy a abrazar ${this.nombre}`);
}

const human = new Person("Luisa", "Rosas");
      humans = new Person("Mauricio", "Chávez");
const friends = new Friend("Chris", "Evas", "E.U.A");
console.log(human);
console.log(humans);
console.log(friends);
human.saludar();
humans.saludar();
friends.saludar();
friends.abrazar(); */

//CLASES Y HERENCIA: aZÚCAR SINTÁCTICA / Mejor prototipos....
/* class Animal {
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
    }

    sonar() {
        console.log(`Se llama ${this.nombre}, y es ${this.raza}`);
    }
}
const puppy = new Animal("Puppy", "Golden");
console.log(puppy);
puppy.sonar(); */

//Heredar Clases:
/* class Animal {
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
    }

    sonar() {
        console.log(`Se llama ${this.nombre}, y es ${this.raza}`);
    }
}
class Perro extends Animal{
    constructor(nombre,raza,genero) {
      //super() = método manda llamar el constructor de la clase padre.
      super(nombre, raza);
      this.genero = genero;
    }
    sonar() {
        console.log(`Es una ${this.genero}`);
    }
}

const puppy = new Animal("Puppy", "Golden");
const puppys = new Perro("Betwoven", "Grande", "Hembra");
console.log(puppy);
console.log(puppys);
puppy.sonar(); 
puppys.sonar() */

//Métodos estáticos / getters and setters
//estático: Se pueden ejecutar sin necesidad de instanciar la clase. 

/* static queEres() {
    console.log("Soy unAnimal");
}
Animal.queEres(); //=> Estática */