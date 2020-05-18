function telephoneCheck(str) {
    /*en condicion tenemos las condiciones como se debe establecer el numero telenonico donde establecimos 
    que si se desea puede empezar con uno, tambien que se pueden ingresar los primeros 3 numeros dentro de un espacio
    luego tenemos otros tres numeros y tambien esta establecido que debe terminar con 4 numeros, tambien 
    se pueden igresar guiones o no*/
    let condition = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/
    return condition.test(str);
    
    }
    
    telephoneCheck("555-555-5555");
    