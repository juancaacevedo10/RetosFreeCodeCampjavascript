'use strict';

function palindrome(str) {

// Paso la frase a minusculas y quito espacios
str=str.toLowerCase().replace(/\s|[\W_]/g,"");

//s para ver si hay espacios g busca todos los espacios 
//replace () busca en una cadena un valor especificado, o una expresión regular , y devuelve una nueva cadena donde se reemplazan los valores especificados.

  let fraseinvertida=str.split("").reverse().toString();
  //split () se utiliza para dividir una cadena en una matriz de subcadenas

 
  for (var i = 0; i < ((fraseinvertida.length)-1); i++) {
    fraseinvertida=fraseinvertida.replace(",","");
  };

  // Comparo las dos frases.
  if(str==fraseinvertida){
    return true;
  }
  else{
    return false;
  }
}

palindrome("eye");
