/* function multiPlay(arr) {
  let product = 1;
 
  for(let i=0; i < arr.length; i++) {
    for(let j=0; j < arr[i].length; j++) {
        product += arr[i][j];
    }
  }
  return product;
}

let product = multiPlay([[1,2],[3,4],[5,6,7]]);
console.log(product); */
// = 29 (1 + 28)
//Do..While Loop 
/* let myArray = [];
let i = 10;

 do {
  myArray.push(i);
  i++;
} while(i < 5)
console.log(i, myArray); */
//Condición (11), y matriz 10.
/* let contacts = [
  {
    "firstName": "Akira", 
    "lastName": "Laine", 
    "number": "004",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry", 
    "lastName": "Potter", 
    "number": "005",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock", 
    "lastName": "Holmes", 
    "number": "006",
    "likes": ["Intriguins", "Violin", "Cuestions"]
  },
  {
    "firstName": "Kristian", 
    "lastName": "Vos", 
    "number": "007",
    "likes": ["Javascript", "Gaming", "Foxes"]
  }
]; */

/* lookProfile = (name, prop) => {
  for(let i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No Property";
    }else {
       console.log("Nothing");
    }
  }
  return "No such contacts"
}
let data = lookProfile("Akira", "likes");
console.log(data); */

//random (números aleatorios):
/* randomFunction = () => {
  return Math.random();
}
console.log(randomFunction()); */
//num aleatorio en lugar del decimal
//floor = num entero más cercano.
/* let randomNumber = Math.floor(Math.random() * 20); */

/* randomWhoNum = () => {
  return Math.floor(Math.random() * 10);
  
} */
//console.log(randomNumber);
//console.log(randomWhoNum());

//Random whole numbers withing a Range:
/* ourRandomRange= (ourMin, ourMax) => {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(1, 9));
 */
/* maxNumber = (ourMin, ourMax) => {
  console.log(Math.floor(Math.random() * (ourMax - ourMin)) + ourMin)
}
maxNumber(5, 15); */

//ParseInt Function:
//Tima un "string" y devuelve un número entero

/* convertToInteger = (str) => {
  return parseInt(str);
}
console.log(convertToInteger("56")); */

//Operador ternario (TERNARY OPERATORS) = tipo expresión "if-else":
//condition ? statement-if-true : statement-if-false;
/* checkEqual = (a, b) => {

  return a === b ? true : false;

  return a === b;
}
console.log(checkEqual(1, 2)); */
//Otra forma:
/* checkEqual = (a, b) => {
    if(a === b) {
    console.log(true);
  }else {
    console.log(false);
  } 
}
checkEqual(1, 2);  */
//Anidar operadores ternario:
/* checkSing = (num) => {
return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkSing(10))  */// = "Positive".
//console.log(checkSing(0));  = Valor "Zero".

//DIFERENCE BETWEEN THE VAR AND LET KEYWORDS: 
