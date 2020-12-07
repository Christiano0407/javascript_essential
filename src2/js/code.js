      /* Asincronismo en JS: */
      
//Temporizadores:

//1) setTimeout => Recibe uba función, y el tiempo / Una vez se ejecuta:
/* console.log("inicio");
setTimeout(() => {
    console.log("Ejecutando...");
}, 1000); */

//2)SetInterval => Varias veces: 
/* setInterval(() => {
 console.log("Ejecutando varias veces");
},1000); */

//Actualizar la hora:
/* setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);  */
//limpiar un setTimeout:
/* let temporizador = setTimeout(() => {
   console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador); */

/* EVENT LOOP */
//Single thread y Multi Thread.
//Operaciones en CPU (CRASHEA) y Operaciones I/O (Entrada y salida.
//Operaciones bloqueantes y No bloqueantes.
//Operaciones Síncronas y Asíncronas.+

//Operaciones Síncronas Bloqueantes


