
function rot13(str) {

    //en una constante guardamos todo el abecedario
    const abecedario = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    //establesco una variable donde almacenare el resultado
        let resultado='';
    //establesco un avariable donde tendre la suma o resta de las posiciones
        let res;
    //recorremos cada valor de la frace a cifrar
        for(var i=0;i<str.length;i++){
            //identificamos la primera letra de nuestra palabra en nuestro abecedario para conocer su posicion y establecer si subar 13 pasos o restarlos
            if(abecedario.indexOf(str[i]) <13){  
            res = 13;
            }else{
            res = -13;
            }
            //verificamos que no sea un valor vacio y agregamos en resultado el valor cifrado de la palabra, ademas acumularemos las palabras en resultado hasta haver cifrado toda la palabra
            if(abecedario.indexOf(str[i])!='-1'){
            resultado = resultado + abecedario[Number(abecedario.indexOf(str[i]) )+res]
            }else{
            resultado = resultado +str[i];
            }
        }
        return resultado;
    }
    
    rot13("SERR PBQR PNZC");

  
        
    