//console.log("Hola Mundo");
/* hola = () => {
    let saludo = "Hola Mundo";
    if(saludo === "Hola Mundo"){
        console.log("Ella es una persona amable");
    }else {
        console.log("No lo es");
    }

    console.log(saludo.length);
}
hola();

const NUM = 10;

for(let i = 0; i <= NUM; i++){
    if(i <= 5){
        console.log("Reprobado");
    }else if(i === 8 || i === 9){
        console.log("Sólo son esta calificación van a pasar");
    }else if(i === 10){
        console.log("Excelencia académica");
    }else {
        console.log("Reprobados");
    }
    console.log(i); 
} */

/* const names = ["Alma", "Luisa", "Chris", "Mau", "Pamela"];
console.log(names.length);
console.log(names[1]); */
/* for(let i = 0; i <= names.length; i++){
    console.log(i); 
} */
//1)
/*  function character(cadena=""){
if(cadena === ""){
    console.warn("No ingresaste ningún dato");
}else {
    console.info(`Ella dijo: ${cadena}, y tiene ${cadena.length}`);
}
}
character("Hola Luisa");  */
//2)
/* const recortar = (cadena="", longitud=undefined) => 
(cadena === "")
   ? console.log("No tienes texto")
   : console.log(cadena.slice(0, longitud));
   recortar("Chris Anderson", 5);

const tijera = ""; 
function recorte (cadena="", longitud=undefined) {
  if(cadena === ""){
      console.log("No hay texto");
  }else {
      console.log(cadena.slice(0, longitud));
  }
}
recortar("Hola Mundo", 4); */
//3)
/* const cadenaAAray = (cadena="", separador = undefined) => 
//(!cadena)
(cadena === "")
  ?console.warn("No ingresaste ningún dato")
  :(separador === undefined)
    ?console.warn("No ingresaste el caracter separador")
    :console.info(cadena.split(separador));

cadenaAAray("Chris tiene un hermoso perro llamado ángel; tiene un tamaño pequeño", " "); */

/* const FRIEND = ["Alma", "Luisa", "Mauricio", "Obi Wan", "Natasha", "Aníbal"]; 
const friendsYears = (names = FRIEND, distance = undefined) => 
(names === FRIEND)
  ?console.info("Tienes amigos")
  :(distance === undefined)
     ?console.warn("Otra vez, recuerda agregar a tus amigos")
     :console.info(distance.split(names));

friendsYears(console.log(FRIEND, " "));
console.log(`Ella es la amiga de la familia:`,FRIEND[1]); */
//4)Programa una función que repita un texto "X" veces.

//Math.sign() - Retorna el signo de un número (positivo, negativo o 0).

/* repetirTexto = (texto = "", veces= undefined) => {
  if(texto === ""){
    console.warn("No ingresaste ningún dato o valor")
  }else if(veces === undefined){
    console.warn("No ingresaste el número de veces a repetir el texto")
  }else if(veces === 0){
    console.error("El número de veces no puede ser 0")
  }else if(Math.sign(veces) === -1){
    console.error("El número no puede ser negativo")
  }else {
  console.log("Vuelve a repetir el procesos")
  }

  for(let i = 0; i <= veces; i++) {
      console.info(`${texto}, ${i}`)
  }
}
repetirTexto("Hola Mundo", 3); */
/* repetirTexto("Hola", 0);
repetirTexto("Saludo", -1); */
/* oaracionNueva = (frase = "", repeticiones = undefined) => {
  if(frase === ""){
      console.log("No ingresaste ninguna frase o dato")
  }else if(repeticiones === undefined){
    console.log("Te faltó ingresar el número de veces que, necesitas.")
  }else if(repeticiones === 0){
   console.error("No es posible ingresar ese valor")
  }else if(Math.sign(repeticiones) === -1){
    console.error("El valor no puede ser negativo")
  }else {
   console.log("Te solicitamos volver a ingresar tus datos")
  }

  for(let i = 1; i <= repeticiones; i++) {
      console.log(`${frase}, ${i}`)
  }
}
oaracionNueva("Mi nombre es usuario", 3); */

//5)Programar una función que invierta las palabras de una cadena de texto.
//6)Programa una función para contar el número de veces que se repite una palabra en un texto largo.
//7)Programa una función que valide si una palabra o frase dada, es igual a un palídromo (se lee igual en un sentido que es otro).
//8)Programa una función que elimine cierto patrón de caracteres de un texto dado. 

//5)
//Prototype join() - Une todos los elementos de una matriz(un objeto o matriz)en una cadena, y devúelve una cadena. 
/* const invertirCadena = (cadena= "") => {
   (cadena === "")
    ?console.warn("No ingresaste ningún dato")
    :console.info(cadena.split("").reverse().join(""));
}
invertirCadena();
invertirCadena("Hola Mundo"); */

/* const elements = ["Fire", "Air", "Water"];

element = () => {
    if(elements[0] === "Fire"){
        console.log("Está que arde")
    }else {
        console.log("Nada")
    }
}
element();
console.log(elements.join());
console.log(elements.join(" ")); */

//6)
/* const textoCadena = (cadena="",texto="") => {
 if(cadena === ""){
     console.warn("No ingresaste tus datos...")
 }else if(texto=== "" ){
     console.warn("No ingresaste ningún texto...")
 }else {
     console.log("Salte por favor")
 }

 let i = 0;
  contador = 0;
 while(i !== -1){
     i = cadena.indexOf(texto, i);
     if(i !== -1){
         i++;
         contador++;
     }
 }
 console.log(`La palabra ${texto}, se repite ${contador} veces`);
}
textoCadena();
textoCadena("","mundo");
textoCadena("Hola mundo, nos vemos mundo"); */

// Palíndromo:
/* const palindromo = (palabra = "") => {
 if(!palabra)
     return console.warn("No ingresaste ninguna palabra en el computador");
 palabra = palabra.toLowerCase();
 let alReves = palabra.split("").reverse().join("");
 return(palabra === alReves)
     ?console.info(`Sí, es un palíndromo. Palabra original ${palabra}; palabra al reves ${alReves}`)
     :console.info(`No es un palíndromo ${palabra}; palbra al reves ${alReves}`);
}
palindromo();
palindromo("Hola Mundo");
palindromo("Salas"); */

//Elimina patrones de caracteres de un texto:
//RegExp(Es un objeto que se utiliza para hacer coincidir texto con patrón)//expresión regular.
//i = No distingue entre minúsculas y mayúsculas / g = No se detiene en el primer patrón.
/* const characterExt = (texto="", patron="") => {
  (!texto)
   ?console.warn("No ingresaste ningún texto")
   :(!patron)
    ?console.warn("No ingresaste ningún patrón de caracter")
    :console.info(texto.replace(new RegExp(patron, "ig"),""));
}
characterExt();
characterExt("xyz1,xyz2,xyz3,xyz4,xyz5");
characterExt("xyz1,xyz2,xyz3,xyz4,xyz5","xyz"); */

/* const elimiNated = (text="", patern="") => {
    if(text === ""){
        console.warn("No ingresaste un texto");
    }
    if(patern === ""){
        console.warn("Ingresa tu patrón de texto");
    }else if(patern !== patern) {
        console.warn("No coincide tu patrón...");
    } else {
        console.info(text.replace(new RegExp(patern, "ig"),""));
    }
}
elimiNated();
elimiNated("xyz1,xyz2,xyz3,xyz4,xyz5");
elimiNated("xyz1,xyz2,xyz3,xyz4,xyz5", "xyz"); */

//