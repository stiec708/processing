var cnv;
var d;
var g;
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseReleased(changeGray);
  d = 200;
  g = 100;
  b = 200;
}

function draw() { 
    background(g);
    if (mousePressed) {
        fill('red');
        noStroke();
        ellipse(x, y, d, d);
        } else {
            fill('red');
            noStroke();
            ellipse(x, y, b, b);
         }
  

function mousePressed() {
  d = d + 50;
  b = d - 50;
}

function changeGray() {
  g = color('white');
}
