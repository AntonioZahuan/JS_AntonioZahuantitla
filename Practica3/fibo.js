//Se pide el tamaño de la matriz y se almacena en una variable
let n= prompt("Defina la dimension de la matriz")
//Se definen las variable start y limit para el tamaño de la matriz
let start=0;
let limit= n-1;
//La variable n se eleva  al cuadrado pues tecnicamente esa será el area de la matriz y este valor se almacena en la variable num
let num= Math.pow(n,2);
//Se crea un arreglo con los numeros de la serie de fibonacci que tendrá a los números 0 y 1 y posteriormente donde se almacenarán a los numeros fibonacci necesarios para llenar a la matriz
let fibarray= new Array(0,1);
//Se crea la funcion fib que tendrá como parametro la variable num, es decir generará tantos numeros en la serie de fibonacci necesarios conforme al area de la matriz
function fib(num){
  var fib_array = [0, 1];
  for (var i = 2; i < num; i++) {
    fib_array[i] = fib_array[i - 1] + fib_array[i - 2];
    fibarray.push(fib_array[i]);
  }
}
//Se llama a la funcion fib
fib(num);
//Se crea la matiz que será un arreglo y el espiral, asimismo se llena esta matriz con los número de fibonacci
let a=1;
let matrix= new Array(n);
for(x=0; x<=n;x++){
  matrix[x]= new Array(n);
}
while(a<=(num)){
  for(x=start; x<=limit; x++){
    matrix[start][x]=fibarray[a-1];
    a++;
  }
  for (x= start+1; x<= limit; x++){
    matrix[x][limit]=fibarray[a-1];
    a++;
  }
  for (x= limit-1; x>= start; x--){
    matrix[limit][x]=fibarray[a-1];
    a++;
  }
  for (x= limit-1; x>= start+1; x--){
    matrix[x][start]=fibarray[a-1];
    a++;
  }
  start= start+1;
  limit = limit-1;
}
//Se imprime la matriz en la comnsola
console.log(matrix);
