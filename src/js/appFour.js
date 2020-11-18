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

