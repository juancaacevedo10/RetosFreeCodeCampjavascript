var convertToRoman = function(num) {
    //establesco los valores principales los cuales tienen letra identificadoras establecidas
    var valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    //establecemos tambien los valores a los que se les antepone una letra para definir por medio de la resta su conversion romana
    var letras = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    //establecemos la variable por medio de la cual tendremos el resultado
    var romanos = "";
  
    //establecemos un ciclo por medio del cual analizaremos cada valor del vector 'valores' para interpretar las letras
    for (var i = 0; i < valores.length; i++) {
        //Por medio de otro ciclo establecemos el valor del arreglo 'valor' sea menor al numero ingresado 
      while (valores[i] <= num) {
        romanos = romanos + letras[i]; //guardamos la letra en la variable establecida para esto
        num = num - valores[i]; //restamos el valor del arreglo al numero ingresado, para establecer otras letras, ademas este sera el controlador del bucle
      }
    }
  
    return romanos;
  };
  
  // test here
  convertToRoman(36);