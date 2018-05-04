// 2. Create a small palette of two colors (e.g. red and blue) below the canvas using more div tags.
let palleteOfColors = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "gray", "black", "white"];
let brushColor = palleteOfColors[0];
// 5. Expand the palette with more colors. (i.e. red, orange, yellow, green, blue, purple, brown, gray, black, white, etc.)
// palleteOfColors.push("orange", "yellow", "green", "blue", "purple", "brown", "gray", "black", "white");

window.onload = function(){
  document.body.style.cursor = "copy"

// 6. Expand the palette with a brush color indicator.
  addColorsToPallete(palleteOfColors);
}

// 1. Create a small, 2x2 grid canvas made up of white, square div tags with a border.
// 1a. Add an event listener to each div so when clicked the background turns red.

function squareClicked(event){
  let square = event.target;
  square.style.backgroundColor = brushColor;
}

// function to create and add a color to the pallete
function addColorsToPallete(palleteOfColors){
  palleteOfColors.forEach(function(colorName) {
    let color = document.createElement("div");
    color.className = "color";
    color.style.backgroundColor = colorName;
    color.onclick = clickColor;
    let parentDiv = document.getElementById("pallete");
    parentDiv.appendChild(color);
  })
}

// 3. Add an event listener to these div tags so when clicked the brush color is saved.
function clickColor(e){
  // console.log(e.target)
  let colorClicked = e.target;
  brushColor = colorClicked.style.backgroundColor;
  // console.log(brushColor);
}

// 4. Expand the dimensions of the pixel canvas.
// 7. Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!
