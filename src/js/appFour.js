//Delete Properties 
/* let dog = {
    name: "Dog",
    age: 4,
    legs: 4,
}
delete dog.age;
console.log(dog); */

//Obj/array/lookup

/* phoneticLookup = () => {

    let result = "";
    let lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank",
    };
    result = lookup;
    //return result;
    console.log(result);
    //console.log(result);
}
phoneticLookup(); */
/* let myObj = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
};

checkObj = (checkProp) => {
  if (myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp];
  }else {
      return "Not Found"
  }
};
console.log(checkObj("Hello")); */

//Manipulating Complex Object: Tipo JSON:
/* let myMusic = [
    {
     "artist": "Billy Joel",
     "title": "Piano Man",
     "realese_year": 1973,
     "formats": [
         "CD",
         "ST",
         "LP",
     ],
     "gold":true      
    },
    {
      "artist": "Beau Carnes",
      "title": "Cereal Man",
      "format": [
          "Video",
          "Social Media",
          "Podcast",
      ]
    },
];
console.log(myMusic[0]); */

//2) Objeto con otro Objeto (anidados):
/* let myStorage = {
    "car": {
        "inside":{
               "glove box": "maps",
               "passenger seat": "crumbs"
        }, 
        "outside": {
            "trunk": "jack"
        }
    }
}; */
//console.log(myStorage.car.outside["trunk"]);
//console.log(`My trunk is: ${myStorage.car.outside["trunk"]}`);

//3) Array: Acceder a matrices anidadas:
/* let myPlants = [
    {
     type: "flowers",
     list: [
         "rose",
         "tulipan",
         "dandelion",
     ]
    },
    {
     type: "trees",
     list: [
         "fir",
         "pino",
         "birch",
     ]
    },
    {
     "navidad": {
          "nochebuena":[
              "Red",
              "white",
              "green",
          ]
     }
    }
];
console.log(`My first flower is: ${myPlants[0].list[0]}`); */

//4)
/* let collection = {
    "2548": {
        "album": "Slippery",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love",
        ]
    },
    "2468":{
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red",
        ]
    },
    "1245": {
        "artist": "Roberts Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
}; 

let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id][prop];
    }else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
       collection[id][prop] = value;
    }

    return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA")); */
//console.log(collectionCopy);

//Iterate with "While" Loops: Bucles - ejecutar el mismo código varias veces:
/* let myArray = [];
let i = 0;

while (i <= 5) {
    myArray.push(i);
    i++;
}
console.log(myArray); */
//Iterate with "for" Loops:
//A)
//let ourArray = [];
//declaración / condición / expresión (iterar=incrementar).
/* for (let i = 0; i <= 5; i++) {
    ourArray.push(i);
}
console.log(ourArray); */

//B)
/* let myArray = [];

for (let i = 0; i <= 8; i++) {
      myArray.push(i);
}
console.log(myArray.length) */

//Iterate odd Numbers with a for Loop.
//Incrementar cada 2 valores: "+=2".
/* let usArray = [];

for(let i = 0; i <= 10; i += 2){
    usArray.push(i);
}
console.log(usArray); */

//bucle = cuenta hacia atrás :
//a)
/* let restApp = [];
for(let i = 10; i >= 0; --i) {
    restApp.push(i);
}
console.log(restApp);
//b)
let restVal = [];
for (let i = 10; i >= 0; i -= 2) {
    restVal.push(i);
}
console.log(restVal.length); */
/* let taco = [];
tacos = () => {
  for (let i = 0; i <= 5; ++i){
     if(i === 2) {
        console.log("De al pastor");
     }else if(i === 5){
       console.log("para llevar de Bisteck");
     }else {
      console.log("Ya no hay tacos")
     }
  }
 console.log(i);

}
tacos(taco); */

//Iterar a través de una matriz(Array):
/* let ourArray = [12, 11, 10, 9];
let sumTotal = 0;

for(let i = 0; i < ourArray.length; i++) {
    sumTotal += ourArray[i];
}
console.log(sumTotal); */
//
/* let myArr = [2,3,4,5,6];
let total = 0;

for(let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
console.log(total); */

//Matriz Multidimensional y anidadas:
