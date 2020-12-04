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