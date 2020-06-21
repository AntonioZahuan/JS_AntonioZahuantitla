//Se obtiene body para añadir ahi los ele¡mentos
var body= document.getElementsByTagName("body")[0];
//Se crea un div que contendrá los fragmentos de texto y asudez se la da estilo
var div=document.createElement("div");
div.setAttribute("style", "border:dashed; background-color:#DADADA");
//Se crea un a, se le da el estilo requerido y el texto que irá dentro del mismo
var uno=document.createElement("a");
uno.innerHTML="<h1>Soy el m&aacutes grande...</h1>";
uno.href="https://www.spacex.com/"
//Se crea un h2 y se define el texto que estará dentrro del mismo
var dos=document.createElement("h2");
dos.innerHTML="Curso Web 2020";
//Se crea un a, se le da estilo y se dispone el texto dentro del mismo
var tres=document.createElement("a");
tres.innerHTML="<h3><i>Mediano</i></h3>";
tres.href="https://www.spacex.com/"
//Se crea un h4, se le da un color rojo
var cuatro=document.createElement("h4");
cuatro.innerHTML="Jelou";
cuatro.setAttribute("style", "color: red;");
//se crea un h5 y se dispone el texto que irá dentro del mismo
var cinco=document.createElement("h5");
cinco.innerHTML="Estoy medio chiquito :(";
//Se agregael div a body
body.appendChild(div);
//Se agregan todos los elementos creados con un prepend
div.prepend(uno,dos,tres,cuatro,cinco);
