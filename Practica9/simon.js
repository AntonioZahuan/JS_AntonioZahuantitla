//se crea un numero ale
function numerorndom(){
  return Math.round(Math.random()*100)+1;
}
//Se logra el funcionamiento del programa pero el callback no como un parametro  de pedir un numero si no que en el callback se imprime el mensaje Simon dice recuerda el numero a continuacion
function recordarNumero(callback){
  setTimeout(()=>{
    callback();
    var a = numerorndom();
    console.log(a);
    var uno= prompt("Inserte el primer numero");
    if (a == uno){
      setTimeout(()=>{
        callback();
        var b = numerorndom();
        console.log(b);
        var uno= prompt("Inserte el primer numero");
        var dos= prompt("Inserte el segundo numero");
        if ((a== uno)&&(b==dos)){
          setTimeout(()=>{
            callback();
            var c = numerorndom();
            console.log(c);
            var uno= prompt("Inserte el primer numero");
            var dos= prompt("Inserte el segundo numero");
            var tres= prompt("Inserte el tercer numero");
            if ((a== uno)&&(b==dos)&&(c==tres)){
              setTimeout(()=>{
                callback();
                var d= numerorndom();
                console.log(d);
                var uno= prompt("Inserte el primer numero");
                var dos= prompt("Inserte el segundo numero");
                var tres= prompt("Inserte el tercer numero");
                var cuatro= prompt("Inserte el cuarto numero");
                if ((a== uno)&&(b==dos)&&(c==tres)&&(d==cuatro)){
                  setTimeout(()=>{
                    callback();
                    var e = numerorndom();
                    console.log(e);
                    var uno= prompt("Inserte el primer numero");
                    var dos= prompt("Inserte el segundo numero");
                    var tres= prompt("Inserte el tercer numero");
                    var cuatro= prompt("Inserte el cuarto numero");
                    var cinco= prompt("Inserte el quinto numero");
                    if ((a== uno)&&(b==dos)&&(c==tres)&&(d==cuatro)&&(e==cinco)){
                      console.log("Simon esta feliz porque has ganado ;)");
                    }else{
                      console.log("Simon esta triste te has equivocado :C")
                    }
                  },1000)
                }else{
                  console.log("Simon esta triste te has equivocado :C")
                }
              },1000)
            }else {
              console.log("Simon esta triste te has equivocado :C")
            }
          },1000)
        }else{
          console.log("Simon esta triste te has equivocado :C")
        }
      },1000)
    }else {
      console.log("Simon esta triste te has equivocado :C")
    }
  },1000);
}
//Mensaje que aparecerá en la consola antes de cualquier otro numero; 
recordarNumero(()=>{
  console.log("Simon dice recuerda el numero a continuacion");
});
