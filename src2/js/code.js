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

/* Callbacks */
/*  function oneCall(value, callback){
    setTimeout(() => {
    callback(value, value * value)
    }, 0 | Math.random() * 100);
}

oneCall(1,(value, result) => {
    console.log("Inicio de Callback");
    console.log(`callback ${value}, ${result}`);
    oneCall(2,(value, result) => {
        console.log("Inicio de Callback");
        console.log(`callback ${value}, ${result}`);
        oneCall(3,(value, result) => {
            console.log("Inicio de Callback");
            console.log(`callback ${value}, ${result}`);
        });
    });
});  */

/* function twoCall(valor, callback){
    setTimeout(() => {
     callback(valor)
    }, 1000);
}
twoCall(5,(valor) => {
    console.log(`Es el valor ${valor}`);
}) */

/* function saludar (nombre){
    console.log(`Hola`, nombre)
}
function entradaPro(callback){
    let nombre = prompt(`Por favor de ingresar el nombre`);
    callback(nombre);
}
entradaPro(saludar);  */
/* let name = "Chris";
//let name2 = "Luisa"; 
entrada = (saludo) => {
    console.log(`Hola mi querido ${name}`, saludo );
}

proEntradas= (callback) => {
    let saludo = prompt(`Ingresa tú saludo`);
    callback(saludo); 
    proEntradass= (callback) => {
        let saludo = prompt(`Ingresa otro saludo`);
        callback(saludo); 
        
    }
}
proEntradas(entrada);
proEntradass(entrada); */

/* PROMESAS */
//new Promise(ejecutor / function(resolver, rechazzar));
//Representa un valor que puede ser ejecutado ahora, después, o nunca.

/* function cuadradoPromise(value){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(value)
    }, 1000); 
    }); 
}

cuadradoPromise(5)
.then(value => console.log(`Es el valor estimado ${value}`))
.catch( err => console.error(err)); */

/* function miPromise(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, 1000);
    })
}

miPromise("Éxito")
.then(message => console.log(`Compra con mucho ${message}`))
.catch(err => console.err(err)); */

//promise.all: Cuando todas las promesas se han cumplido.
/* let p1 = Promise.resolve(3);
let p2 = 15;
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Va")
    }, 1000);
})
Promise.all([p1, p2, p3]).then(values => {
    console.log(values); 
})  */
 //
 /* RESOLVE() */




