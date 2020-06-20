//Se pide un numero y el mismo se almacena en una variable
let numero=prompt("Para obtener los factores primos ingrese un numero:" );
if (numero > 1){
  function factoresPrimos(numero) {
    var arrayprimos = [];//Será el primer valor
    var result=numero ;
    while(result > 1) { //Disminuye  hasta el 1
      for (var p = 2; p<=numero ; p++) {
        if(result % p === 0) {  //Operación de modulo en que si el residuo es estrictamente igual a 0
          result = result / p;
          arrayprimos.push(p);
          break;//"Para que no itere demás el ciclo for "
        }
      }
    }
    var factors = [];
    var fprimo= arrayprimos[0];
    if (arrayprimos.length > 1) {//Si la longitud del arreglo > 1
      for(var p = 1; p < arrayprimos.length; p++){
        if (fprimo!== arrayprimos[p]) {
          factors.push(fprimo);//se almacena el factor si este no en el arreglo
          fprimo= arrayprimos[p];//se establece el nuevo factor
        }
      }
      factors.push(fprimo);
    } else { // si el numero es  primo por consecuencia solo tendrá un factor
      factors.push(fprimo);
    }
    return factors;
  }
  //Se manda a llamar a la función
  factoresPrimos(numero);
  //Se imprimen los resultados con un alert, asi como el numero que se introdujo
  alert("Factores Primos del numero" + " " + numero + ":"+ " " + factoresPrimos(numero));
  //Se imprime en la consola el numero de entrada ¡, así como el arreglo que implica a los factores primos
  console.log("Entrada: "+numero);
  console.log("Salida:");
  console.log(factoresPrimos(numero));
  //Cuando la condicion de que el número no sea mayor a 1 se regresa un alert
}else{
  alert("Ingrese un numero mayor a 1");
}
