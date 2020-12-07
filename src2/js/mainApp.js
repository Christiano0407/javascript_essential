//Programa una función que obtenga un número aleatorio entre 500 a 600
/* const numAleatorio = () => {
    console.log(Math.round((Math.random()*100) + 500));
}
numAleatorio();
//numAleatorio(); */

//Capicúa(Se lee igual en un sentido u otro):
/* const numCapicua = (number=0) => {
    if(!number)return console.warn("No ingresaste un número");

    if(typeof number !== "number")return console.error(`El valor ${number}, no es un número...es un string`);

    number = number.toString();
    let alReves = number.split("").reverse().join("");

    return(number === alReves)
    ? console.info(`Sí es un número. Número original ${number}, Número al revés ${alReves}`)
    :  console.info(`No es un número. Número original ${number}, Número al revés ${alReves}`)
}
numCapicua();
numCapicua("30");
numCapicua(18.99);
numCapicua(202); */

//Factorial de un número:
//Factorial de 5, devuelva 120 = 5*4=20 20*3=60 60*2=120 120*1=120;
/* const factNumber = (number = undefined) => {
  if(number === undefined)return console.warn("No es un número");
  if(typeof number !== "number")return console.error(`El valor ${number} ingresado, ,No es un número`);
  if(number === 0) return console.info("El número no pude ser 0");
  if(Math.sign(number)=== -1)return console.error("El número no puede ser un número negativo");
  
  let factorial = 1; 

  for (let i = number; i >= 1; i--){
      factorial *= i; 
  }
  return console.info(`El factorial de ${number} es ${factorial}`)
}

factNumber(); 
factNumber("5"); 
factNumber(0); 
factNumber(-1); 
factNumber(5);  */