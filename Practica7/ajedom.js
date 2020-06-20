//Se pide la dimension del ajedrez y es misma se almacena dentro de una variable
var dimAjedrez= prompt("Inserta la dimension del tablero");
//En caso de no ser un número se pida que lo que se inserta sea un número
if (isNaN(dimAjedrez))
alert("Escribe un valor numerico")
//Si este es un valor numérico a través de DOM se crea una tabla y a la misma se la da estilo
else
{
  var body= document.getElementsByTagName("body")[0];
  var table= document.createElement("table");
  table.setAttribute( "style", "border-collapse:collapse");
  table.setAttribute( "height", "500px");
  table.setAttribute( "width", "500px");
  //Se crean las filas y celdas correspondientes con DOM y se les da estilo de acuerdo a su "posicion", para asi poder poder alternar los colores
  for (var i= 1; i <= dimAjedrez; i++){
    var tr= document.createElement("tr");
    for (var x= 1; x <= dimAjedrez; x++){
      var td=document.createElement("td");
      if( i % 2 == x % 2){
        td.setAttribute( "style", "background-color: #68B5FF;");
        tr.appendChild(td);

      }else {
        td.setAttribute( "style", "background-color: #FF5733;");
        tr.appendChild(td);
      }
    }
    table.appendChild(tr);
  }
  body.appendChild(table);
}
