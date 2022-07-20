var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");


function setGradient() {
	body.style.background = 
	"linear-gradient(180deg, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

const setBg = () => {
  const randomColor1 = Math.floor(Math.random()*11111111).toString(16);
  const randomColor2 = Math.floor(Math.random()*16777215).toString(20);
  body.style.background = 
	"linear-gradient(180deg, " 
	+ document.body.style.background = "#" + randomColor1
	+ ", " 
	+ document.body.style.background = "#" + randomColor2
	+ ")";

   
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

genNew.addEventListener("click", setBg);
setBg();


