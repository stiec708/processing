// Where is the circle
let x, y,z,k, a, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Starts in the middle
  k = width / 100;
  z = width / 100;
  x = width / 3;
  y = height;
  a=  150;
  b= 170;
}


function draw() {
  background('#d1deff');
  fill('white');
  ellipse(z,90, 60, 50)
  ellipse(z,100, 100, 30)

  ellipse(z+600,120, 60, 50)
  ellipse(z+600,130, 100, 30)

  ellipse(z+900,220, 60, 50)
  ellipse(z+900,230, 100, 30)

  ellipse(k+9,220, 60, 50)
  ellipse(k+9,230, 100, 30)

  ellipse(z+500,200, 200, 60)
  ellipse(z+490,170, 100, 60)
  ellipse(z+530,180, 80, 30)

  ellipse(z+1000,200, 100, 60)
  ellipse(z+1060,170, 100, 60)
  ellipse(z+1080,200, 160, 50)

  ellipse(k+100,230, 100, 60)
  ellipse(k+160,200, 100, 60)
  ellipse(k+180,230, 160, 50)

  ellipse(z+100,590, 60, 50)
  ellipse(z+100,600, 100, 30)

  ellipse(z+700,620, 60, 50)
  ellipse(z+700,630, 100, 30)

  ellipse(z+1000,720, 60, 50)
  ellipse(z+1000,730, 100, 30)

  ellipse(k+109,720, 60, 50)
  ellipse(k+109,730, 100, 30)

  ellipse(z+600,700, 200, 60)
  ellipse(z+590,670, 100, 60)
  ellipse(z+630,680, 80, 30)

  ellipse(z+1100,700, 100, 60)
  ellipse(z+1160,670, 100, 60)
  ellipse(z+1180,700, 160, 50)

  ellipse(k+200,730, 100, 60)
  ellipse(k+260,700, 100, 60)
  ellipse(k+280,730, 160, 50)

  ellipse(z+400,390, 60, 50)
  ellipse(z+400,400, 100, 30)

  ellipse(z+1000,420, 60, 50)
  ellipse(z+1000,430, 100, 30)

  ellipse(z+1300,520, 60, 50)
  ellipse(z+1300,530, 100, 30)

  ellipse(k+409,520, 60, 50)
  ellipse(k+409,530, 100, 30)

  ellipse(z+900,500, 200, 60)
  ellipse(z+890,470, 100, 60)
  ellipse(z+930,480, 80, 30)

  ellipse(z+1400,500, 100, 60)
  ellipse(z+1460,470, 100, 60)
  ellipse(z+1480,500, 160, 50)

  ellipse(k+500,530, 100, 60)
  ellipse(k+560,500, 100, 60)
  ellipse(k+580,530, 160, 50)

  if (mouseIsPressed) {
    stroke(50);
  line(mouseX, mouseY+100, mouseX, mouseY+400);
  noStroke();
  fill('#F95087');
  ellipse(mouseX, mouseY, a, b);
  triangle(mouseX, mouseY+50, mouseX + 25, mouseY + 100, mouseX - 25, mouseY + 100);
  } else {
    stroke(50);
  line(x, y+100, x, y+400);
  noStroke();
  fill('#F95087');
  ellipse(x, y, a, b);
  triangle(x, y+50, x + 25, y + 100, x - 25, y + 100);}

  x = x + 0.75;
  z = z + 0.2;
  k = k + 0.35;
  
  // Moving up at a constant speed
  y = y - 1;

  if (y < 0) {

  }
  
}