//Se pide el piso donde esta Gama y se almacena en una variable
var gama= prompt("Piso en donde esta Gama");
//Se piden las respectivas posiciones de los elevadores  y del mismo modo se almacenan en variables
var elevadorA= prompt("Piso en donde esta el Elevador A");
var elevadorB= prompt("Piso en donde esta el Elevador B");
//Se evalua que en los tres casos no es un valor diferente a un número
if (isNaN(gama)|isNaN(elevadorA)|isNaN(elevadorB))
alert("Escribe un valor numerico o no nulo")
//De ser un número se imprime en la consola y se muestra con un alert la posicion de cada elevador
else
{
  console.log("PosA:"+elevadorA)
  console.log("PosB:"+elevadorB)
  console.log("Piso Gama:"+gama)
  //Se obtiene el valor absoluto de la resta entre la posicion de gama y la de los elevadores
  var pisosElevadorAGama= Math.abs(gama-elevadorA)
  var pisosElevadorBGama= Math.abs(gama-elevadorB)


  alert ( "Piso del Elevador B:"+ elevadorA + "      Piso del Elevador A:"+ elevadorB)
  //Se evaluan los posibles resultados de la resta, para dar a conocer cual de los dos elevadore es el más cercano a Gama y se avisa con un alert
  if (pisosElevadorAGama == pisosElevadorBGama){
    alert("Gama ambos elevadores ese encuentran a la misma distancia de ti" )
  } else if (pisosElevadorAGama < pisosElevadorBGama) {
    alert("Gama el elevador A  es el mas cercano a tu piso" )
  } else if (pisosElevadorBGama < pisosElevadorAGama) {
    alert("Gama el elevador B  es el mas cercano a tu piso" )
  }
}
