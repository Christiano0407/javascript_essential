/* valNum = (val) => {
 if (val >= 10 && val < 11) {
     console.log("Diez!")
 }else if (val <= 9 ) {
     console.log("Nueve")
 }else {
     console.log("Ya no!")
 }
}
valNum(10); */

/* numVal = (val) => {
    if (val <= 10 || val <= 20){
        console.log("Yes");
    }else {
        console.log("Noooo");
    }
}
numVal(15); */
/* numeros = () => {
let num = 10;
  for(i = 0; i <= num; i++){
     if(num === 10) {
         console.log("Yes")
     }else {
         console.log("No")
     }
  }
  console.log(i);
}
numeros(); */

/* alert("Hola"); */
//Golf Game :
/* let golf = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey"];

golfScore = (par, strokes) => {
   if(strokes === 1) {
       console.log(golf[0]);
   }else if(strokes <= par - 2) {
      console.log(golf[1]);
   }else if(strokes == par - 1) {
      console.log(golf[2]);
   }else if(strokes == par ) {
    console.log(golf[3]);
   }else if(strokes == par + 1) {
    console.log(golf[4]);
   }else if(strokes == par + 2) {
    console.log(golf[5]);
   }else {
    console.log("Never and never game of Golf!")
   }
}
golfScore(5,5); */
//Switch:
/*  caseInSwitch = (val) => {
 let answer = "";

 switch(val){
    case 1: 
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break;
    case 3:
      answer = "Gamma";
      break;
    case 4:
      answer = "Delta";
      break;
    default:
        // console.log("Nothing");
      answer = "Nothing"
      break;
 }

 console.log(answer);
 }
 caseInSwitch(1);  */
 //2)
/*  sequentialSize = (val) => {
  let answer = "";

  switch(val) {
   case 1:
   case 2:
   case 3:
       answer = "Love";
   break;
   case 4:
   case 5:
   case 6:
       answer = "Beautiful";
   break;
   default:
       answer = "Never loved of you!"    
  }
  console.log(answer);
}
 sequentialSize(1); */
 //Puedes cambiar una condicional (if) por un switch.
 //Function and boolean: 1)
 /* isLess = (a, b) => {
 if (a < b) {
     return true;
 }else {
     return false;
 }
 }
 console.log(isLess(10, 15)); */
 //Math 1)
 //Math.round() = Retorna el valor de un número redondeando al entero más cercano.
 //Math.sqrt() = Retorna la Raíz cuadrada de un número.
/*  abTest = (a, b) => {
    if (a < 0 || b < 0) {
        console.log("Never");
    }

    console.log(Math.round(Math.sqrt(a) + Math.sqrt(b), 2));
 }
 abTest(4, 2); */

//Card Count:
/* cc = (card) => {
let count = 0;
let holdbest = `Hold`;
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5: 
        case 6: 
        count ++;
        break;
        case 7:
        case 8:
        case 9:
        count = "Awesome";
        break;
        case "10":
        case "J":
        case "Q":
        case "K":
        case "A":
        count--;
        break;
        default:
        count = "Never and never";
    }
    if( count > 0) {
        holdbest = `Bet`
    }

    console.log(count + " " + holdbest);
}
cc(4); */
//Objects = properties.
/* let ourDog = {
     name: "Camper",
     legs: 4,
     tails: 1, 
     friends: ["Everything"],
};
let myDog = {
   "name": "Alma",
   "legs": 3,
   "tails": 2,
   "friends": []
}; */
//Accesing Object Properties with Dot Notation:
//console.log(myDog);
//console.log(`Your Dog: ${ourDog.name}`);
/* let testObj = {
    "eat": "Hamburger",
    "my side": "veggies",
    "the drink": "water",
};
let value = testObj["eat"];
console.log(value); */

//Updating Object Properties (propiedad del objeto).
/* let ourDogs = {
    name: "Bongo",
    tails: 1,
    legs: 4,
    friends: ["Everything"],
};
console.log(ourDogs.name = "Happy Bongo"); */ //Agregamos un nuevo valor

//Add new Properties to an Object:
/* let ourDogs = {
    name: "Bongo",
    tails: 1,
    legs: 4,
    friends: ["Everything"],
};
ourDogs.bark = "New Properties";
ourDogs[`barks`] = "Woof!";
console.log(ourDogs); */
//document.write(ourDogs.name);