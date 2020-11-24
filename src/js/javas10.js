//Tagged Templates (llamar a una function que no tiene nombre
//valores dinámicos.
//Frases con muchos diseños, y funciones.
//forEach = Recibe una función como parámetro.


taggTemplate = (strings, ...dinamicValues) => {
  //console.log(string, dinamicValue);
  let newContent = ``
  strings.forEach((string, index ) => { 
     // let strong = ``
      //if(dinamicValues[index]) {
       // strong = `<strong>${dinamicValues[index]}</strong>`
      //}
      const strong = dinamicValues[index] ? `<strong>${dinamicValues[index]}</strong>` : ``
   
      //console.log(dinamicValue[index]);
      // console.log(string);
     
    //newContent = newContent + string + strong
      newContent += `${string} ${strong}`
  })
  return `<p>${newContent}</p>`
  //console.log(newContent)
}
const message = taggTemplate`El ${`trabajo duro`} supera al ${`talento natural`}`;

document.body.innerHTML = message;