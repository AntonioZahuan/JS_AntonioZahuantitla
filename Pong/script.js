let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d"); 

var direction="up";
var direction="down";



document.addEventListener("keydown", getDirection);
   function getDirection(e){
    if(e.keyCode == 38){
      direction = "up";
    }else if(e.keyCode == 40){
      direction = "down";
    }
  }


function moverArriba(x,y){
  drawRacket(x, y+1);
}
var cvsW=cvs.width; 
var cvsH=cvs.height;


  var racketW = 5; 
  var racketH = 30; 

function drawRacket(x,y){
   ctx.fillStyle= "#FFFFFF";
   ctx.fillRect(x*racketW,y*racketH,racketW,racketH);
  }
  
function draw(){
     ctx.clearRect(0,0,cvsW,cvsH);
       drawRacket(3,2); 
       drawRacket(56,2);

  }
 



     if(direction == "up"){
     moverArriba(x,y+1)

     };


     /*
     else if(direction == "down"){
       .then()
     };
}*/
setInterval(draw,60);
