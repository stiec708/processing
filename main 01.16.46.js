var d = 200;
var b= 200;

function setup() {
    console.log('--setup--');
    createCanvas(windowWidth, windowHeight);
    
}

function draw()  {
   d = d + 50;
   b = b - 50;
   if (mouseIsPressed === true){ 
        ellipse(810, 400, d, d);
        fill('rgba(0,255,0,0.2)');
        noStroke();
        } else {
          ellipse(810, 400, b, b);
          fill('rgba(255,113,181,0.1)');
          noStroke();
         }
         
         }
    

    