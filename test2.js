var cnv;
var d;
var g;
let x, y;
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseReleased(changeGray);
  d = 200;
  g = 100;
  b = 200;
  x = width / 2;
  y = height;
}

function draw() { 
    background(g);
    if (mouseIsPressed) {
        fill('red');
        noStroke();
        ellipse(x, y, d, d);
        } else {
            fill('red');
            noStroke();
            ellipse(x, y, b, b);
         }
         y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
}

function mousePressed() {
  d = d + 50;
  b = d - 50;
}

function changeGray() {
  g = color('white');
}
