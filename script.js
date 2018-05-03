let palleteOfColors = ["red"];
let brushColor = palleteOfColors[0];

// 4. Expand the palette with more colors. (i.e. red, orange, yellow, green, blue, purple, brown, gray, black, white, etc.)
palleteOfColors.push("orange", "yellow", "green", "blue", "purple", "brown", "gray", "black", "white");
console.log(palleteOfColors);

document.body.style.cursor = "copy"

// 1. Create a small, 2x2 grid canvas made up of white, square div tags with a border.
// 1a. function that creates n*n grid of white backgroundColor tiles:
// 1b. Add an event listener to each div so when clicked the background turns red.

let body0 = document.getElementsByTagName("body")[0];

// function tiles(n) {

  for (let i = 0; i < 4; i++) {
    let square = document.createElement("div");
    // square.style.width= 100/n + "%";
    square.style.width= "20%";

    square.style.float = "left";
    // square.style.paddingBottom = 100/n + "%";
    square.style.paddingBottom = "20%";

    square.style.background = "white";
    square.style.border = "solid black 0.2px";
    // square.style.aspectRatio = "16:9"

    body0.appendChild(square);

    square.addEventListener('click', function(){
      square.style.background = brushColor;
    });
  }
// }

// tiles(2);

// 2. Create a small palette of two colors (e.g. red and blue) below the canvas using more div tags.
// 2a. Add an event listener to these div tags so when clicked the brush color is saved.

let body1 = document.getElementsByTagName("body")[1];


// 3. Expand the dimensions of the pixel canvas.
// 5. Expand the palette with a brush color indicator.
// 6. Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!
