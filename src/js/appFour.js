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
