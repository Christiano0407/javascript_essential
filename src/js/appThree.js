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
 