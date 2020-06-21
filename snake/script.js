//Cuando esté body  se activa window.onload 
  //Se selecciona el Canvas. 
  var cvs = document.getElementById("canvas");
  //Context del canvas.
  var ctx =cvs.getContext ("2d"); 
  //Se almacena en una variable la longitud del canvas para su uso futuro.
  var cvsW=cvs.width; 
  var cvsH=cvs.height;

  var snakeW = 10; 
  var snakeH = 10; 

/*let boton= document.getElementById("Boton");
console.log (boton);
document.addEventListener("onclick",getBoton);
function getBoton(boton){
  if(boton== "Izquierda"){
      direction = "left";
    }else if(boton == "Arriba"){
      direction = "up";
    }else if(boton == "Derecha"){
      direction = "right";
    }else if(boton == "Abajo"){
      direction = "down";
    }
}*/

  var score = 0;
  var direction="right";
  let botonA = document.getElementById("BotonA");
  let botonI = document.getElementById("BotonI");
  let botonD = document.getElementById("BotonD");
  let botonAb = document.getElementById("BotonAb");
  //botonA.onclick = function(getDirection){
      
  //};
//EventListener de las teclas correspondientes, con las que se obtiene una dirección 
   document.addEventListener("keydown", getDirection);
   function getDirection(e){
    if(e.keyCode == 37 && direction != "right" ){
      direction = "left";
    }else if(e.keyCode == 38 && direction != "down"){
      direction = "up";
    }else if(e.keyCode == 39 && direction != "left"){
      direction = "right";
    }else if(e.keyCode == 40 && direction != "up"){
      direction = "down";
    }
  }
     
  //direcciones dadas
  /*document.addEventListener('keydown', (e) => {
    if(e.keyCode == 37){
      direction = "left";
    }else if(e.keyCode == 38){
      direction = "up";
    }else if(e.keyCode == 39){
      direction = "right";
    }else if(e.keyCode == 40){direction = "down";
    }});*/
  
  function drawSnake(x,y){
   ctx.fillStyle = "#FFF";
   ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);

   ctx.fillStyle ="#000"; 
   ctx.strokeRect =(x*snakeW,y*snakeH,snakeW,snakeH);
  }


  
  //longitud por default de la serpiente
  var len= 1;
  var snake = [];

  for(var i=len-1; i>=0; i--){
   snake.push (
     {x:i,
      y:0
     }
   );
  }
  //Comida que genera una fruta en cualquier parte del canvas
 food = {
   x : Math.round(Math.random()*(cvsW/snakeW)+1),
   y : Math.round(Math.random()*(cvsH/snakeH)+1)
 }
 //Funcion para generar comida
 function drawfood(x,y){
   ctx.fillStyle = "red";
   ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);

   ctx.fillStyle ="#000"; 
   ctx.strokeRect =(x*snakeW,y*snakeH,snakeW,snakeH);
 }
 //Función de colisión 
function Collide(x,y,array){
  for(var i=0; i<array.lenght; i++){
    if(x == array[i].x && y == array[i].y){
      return true; 
    }
    return false; 
  }
}

  //Función que dibuja al puntaje
  function drawscore(x){
    ctx.fillStyle="red";
    ctx.font="20px Arial"
    ctx.fillText("Puntaje:"+x,5,cvsH-5);
  }
  //Función para dibujar 
  function draw(){
    //La serpiente es un arreglo
     ctx.clearRect(0,0,cvsW,cvsH);
     for(var i=0; i<snake.length;i++){
        var x= snake[i].x;
        var y= snake[i].y;
        drawSnake(x,y);
     }
     //Dibujar a la fruta 
     drawfood(food.x,food.y);
     setInterval(drawfood,10000*10);
     //cabeza de la serpiente 
     var snakeX = snake[0].x; 
     var snakeY = snake[0].y; 
    //Comprobar si los objetos son iguales.
    /*const willEat = r.equals
    //Comprueba si la cabeza de la serpiente no choca con cualquier parte de su cuerpo.
    const willCrash = (cols, rows, state) => r.find(r.equals(nextHead(cols, rows, state )))(state.snake)

    //Efecto Pac man 
  
const nextHead = (cols, rows, {move, snake})=>point(
  modulo(cols)(r.head(snakeX).x + move.x),
  modulo(rows)(r.head(snakeY).y + move.y)
)*/



     
     //Dependiendo de la dirección se recorre el arreglo de una u otra manera 
     if (direction == "left") snakeX--;
     else if(direction == "up") snakeY--;
     else if(direction == "right") snakeX++;
     else if(direction == "down") snakeY++;
 //Si la serpiente colisiona consigo misma se reinicia 
  if (Collide(snakeX,snakeY,snake)){
    location.reload();
  }



 //La serpiente se come la fruta 
     if (snakeX == food.x && snakeY == food.y){
      //Para la fruta  
     food = {
         x : Math.round(Math.random()*(cvsW/snakeW-1)+1),
         y : Math.round(Math.random()*(cvsH/snakeH-1)+1)
     }
     //Nueva Cabeza que debe quedar en el lugar anterior de la cabeza 
     var newHead = {
          x : snakeX,
          y : snakeY
      };
      score++;
     }else{
      //Remover la cola de la serpiente 
     snake.pop();
     var newHead = {
          x : snakeX,
          y : snakeY
      };
     }

    snake.unshift(newHead);
    //Se dibuja el puntaje 
    drawscore(score);
  }
 setInterval(draw,60); 
