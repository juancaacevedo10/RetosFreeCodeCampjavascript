// Create an array of objects which hold the denominations and their values
var denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];
  
  function checkCashRegister(price, cash, cid) {
    var salida = { status: null, change: [] };
    var change = cash - price;
  
    //convertimos la matriz cid en un objeto
    var registro = cid.reduce((acc, curr) =>{
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      },
      { total: 0 }
    );
  
    // establecemos que el cambio sea exacto 
    if (registro.total === change) {
      salida.change = cid;
      salida.status = "CLOSED";
      return salida;
    }
  
    // si los fondos son insuficientes mostramos el mensaje respectivo
    if (registro.total < change) {
      salida.status = "INSUFFICIENT_FUNDS";
      return salida;
    }
  
    // en esta sentencia recorremos la denominaciones
    var arreglo_cambio = denom.reduce(function(acc, curr) {
      var valor = 0;
      // Si aun tenemos dinero en el cajon 
      // Y mientras la denominación es mayor que el cambio restante
      while (registro[curr.name] > 0 && change >= curr.val) {
        change -= curr.val;
        registro[curr.name] -= curr.val;
        valor += curr.val;
  
        // redondeamos el valor para una mejor presicion
        change = Math.round(change * 100) / 100;
      }
      // agregamos una denominacion a la salida dado el caso que se halla usado alguna
      if (valor > 0) {
        acc.push([curr.name, valor]);
      }
      return acc; // Devuelve el actual arreglo_cambio 
    }, []); // Valor inicial de matriz vacía para reducir
  
    //Si no hay elementos en o si tenemos cambios restantes, regresamos arreglo_cambio 
    // la cadena "Fondos insuficientes"
    if (arreglo_cambio.length < 1 || change > 0) {
      salida.status = "INSUFFICIENT_FUNDS";
      return salida;
    }
    //finalmene establecemos la salida 
    salida.status = "OPEN";
    salida.change = arreglo_cambio;
    return salida;
  }
  
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
  ]);