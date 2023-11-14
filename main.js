// Crea una referencia para el elemento canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function uploadimg() {

	ctx.drawImage(img_Tag, img_x, img_y, img_width, img_height);
}

//Escribe el código para obtener el evento key-pressed

window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey()
			document.getElementById("d1").innerHTML="Tú presionaste una letra alfabetica";
			console.log("Se ha presionado una letra del alfabeto");
		}
		//Escribe el código para verificar el tipo de tecla que se presionó
	    else {
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	    }

		if(keyPressed <= 57 && keyPressed >= 48)
		{
			numberkey()
			document.getElementById("d1").innerHTML="Tú presionaste un número";
			console.log("Se ha presionado un número");
		}
		if(keyPressed <= 40 && keyPressed >= 37)
		{
			arrowkey()
			document.getElementById("d1").innerHTML="Tú presionaste una flecha";
			console.log("Se ha presionado una flecha");
		}
		if((keyPressed == 18 && keyPressed == 17)|| (keyPressed == 27))
		{
			specialkey()
			document.getElementById("d1").innerHTML="Tú presionaste una tecla especial";
			console.log("Se ha presionado una tecla especial");
		}
}

function aplhabetkey()
{
	//Sube la imagen con el mensaje. 
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}

function add() {
	img_Tag = new Image(); //define una variable para una imagen nueva
	img_Tag.onload = uploadimg; // establece una función para cargar la variable
	img_Tag.src = img_image;   // carga la imagen
}
