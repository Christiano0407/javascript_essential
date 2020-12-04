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