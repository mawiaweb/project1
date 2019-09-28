
// every times the page loads, it picks 6 random colors, and it assigns each color to one of the div


//var colors = generateRandomColors(6);single arg decide how many color to generate in array
// it starts with 6 when the page loads 

// to not use the same six color every single time
// generate six random colors
// fill this array with six random colors

//*****************************************************************\\
// to loop through, first we need to select

// Loop: "i" will go from 0(1), 1, 2, 3, 4, 5, will loop through each square, 
// tak the first square = 0, give it a background color "0" which is "rgb(255, 0, 0)"; and so on...
//******************************************************************\\
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector(".easy");
var	hardBtn = document.querySelector(".hard"); 


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors  = generateRandomColors(numSquares); //  to assign 3 squares new colors
	pickedColor = pickColor(); // color 3 zing ah pakhat mil a awm tir
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){ // loop through all of the squares and
		if(colors[i]){//check if there is a color at that index
			squares[i].style.backgroundColor = colors[i]; // if there is, then change the color of those
			// first 3
		}else{ //hide the bottom 3 using else
			squares[i].style.display = "none";
		 }
	}


});  





hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares); // to assign every square a new color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){ // loop through all of the squares and
			squares[i].style.backgroundColor = colors[i]; 
			squares[i].style.display = "block";
		//squares[i].style.display = "block" hian hardBtn click ciah in 6 square a display leh nghal
	}
});  




resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	 pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
}) 




colorDisplay.textContent = pickedColor;  // page load in a awm nghal a hnuai a mi nen hian

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i]; // square 6 vawikhat a 6 random colors pe tu...

	// add click listeners to squares 
	squares[i].addEventListener("click", function(){
	// grab color of clicked square
	var clickedColor = this.style.backgroundColor; 
	// compare color to pickedColor 
	if(clickedColor === pickedColor){ // random color picked
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor); // when u got it right, all squares to match that answer
		// to do that write a separate function .... e.g changeColors(color){}
		// it will overwrite it and changes every square colors to be the picked color...

//Note: color square 6 a nia, kan click a piang kha clickedColor a nia, chu mi zing ah 
// pickedColor kan click fuh in clickedColor and pickedColor kha === a lo ni ang, ti chuan
// clickedColor leh pickedColor a lo in ang tak chuan chu mi pickedColor vek chu an lo
// ni tawh ang... changeColors(clickedColor) hian square 6 kha

		h1.style.backgroundColor = clickedColor;
	}else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}

	});
}


// write a separate function to keep code organized

// note: he mi 6 square color awm sa hi,  changeColors(clickedColor) pickedColor color hian 
// a overwrite vek....... 

function changeColors(colorsss){ // it takes a single arg "color string"
// loop through all squares
for(var i = 0; i < squares.length; i++){
// change each color to match given color
squares[i].style.backgroundColor = colorsss;
}

}


//getting random color in the array, and then picking a random color from that array.
// to get number betwwen 0 and 6, Math.random() * 6 + 1 (note: 6 a tling lo a 1 kan belh a ngai)
// Math.floor will chopp of the remaining decimal points...

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}


function generateRandomColors(num){ 
	// make an array 
	var arr = []
	//add num random colors to array 
	// repeat num 6 times, each time through, it pushes in random color to arr
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor()); // here randomColor() calls the colors
	}
	//return that array
	return arr;
}


function randomColor(){
	// pick a "red" from 0 - 255
	// use 256 to get random number to get number between 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}






































































/*var mycolor = document.querySelectorAll(".square");

for(var i = 0; i < mycolor.length; i++){
	mycolor[i].style.backgroundColor = colors[i];

	mycolor[i].addEventListener("click", function(){
		alert("you clicked a square!");
	})
}*/


