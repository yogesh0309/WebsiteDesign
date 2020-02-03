
function RandomColorSelector()
{
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256); 

	var color = "rgb(" + r+", "+ g+ ", "+ b+")"
	console.log(color)
	return color;
}

function ChangeColor(color) 
{
	for (var i = 0; i < allSquares.length; i++) {
		allSquares[i].style.backgroundColor = color;
	}
	
}

var allSquares = document.querySelectorAll(".square");

for (var i = 0; i < 6; i++) {

	allSquares[i].style.backgroundColor = RandomColorSelector();

	allSquares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor == pickedColor)
		{
			messageDisplay.textContent = "Correct!!!";
			ChangeColor(pickedColor);
			displayColor.backgroundColor = pickedColor;
		}
		else
		{
			messageDisplay.textContent = "Wrong!!!"
		}
	});
}

var randomColor =  Math.floor(Math.random() * 6);
var findColorheader = document.querySelector(".findColor");
findColorheader.innerHTML = (allSquares[randomColor].style.backgroundColor).toUpperCase()
pickedColor = (allSquares[randomColor].style.backgroundColor);
var messageDisplay = document.querySelector("#messageDisplay");
var displayColor = document.querySelector("#display");