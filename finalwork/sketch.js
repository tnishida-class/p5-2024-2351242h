// 最終課題を制作しよう

let x, y, p, q;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  p = width * 3 / 4
  q = height * 3 / 4
}

function draw(){
  background(0,76,153);
  noStroke()
  if (y<=50) {background(102,178,255),fill(255,51,51)}
  else if(y>50 && y<=100){background(255,100,0),fill(255,204,153)}
  else {background(0,76,153),fill(255,229,204)}
  ellipse(x, y+150, 80);
  fill(255)
  textSize(80)
  text("Happy NewYear!",x-300,y+400)
  fill(50)
  triangle(windowWidth/2,windowHeight/2-60,windowWidth/2-60,windowHeight/2,windowWidth/2+60,windowHeight/2)
  if (y<=50) {fill(0,102,204)}
  else if (y>50 && y<=100){fill(200,192,255)}
  else {fill(0,51,102)}
  rect(0,windowHeight/2,windowWidth,windowHeight/2)
  if(keyIsDown(UP_ARROW)){ y -= 1; }
  if(keyIsDown(DOWN_ARROW)){ y += 1; }
  fill(255,255,153)
  if(y>100){}
  else if(y>50 && y<=100){rect(windowWidth/2-60,windowHeight/2,120,windowHeight/2)
       triangle(windowWidth/2-60,windowHeight/2,windowWidth/2-60,windowHeight,windowWidth/2-2*y,windowHeight)
    triangle(windowWidth/2+60,windowHeight/2,windowWidth/2+60,windowHeight,windowWidth/2+2*y,windowHeight) 
      }
  else {}
  if(y<=100) {fill(204,102,0)}
  else {fill(153,76,0)}
  rect(p,q,80,30)
  triangle(p,q,p,q+30,p-20,q)
  triangle(p+80,q,p+100,q,p+80,q+30)
  if(p== windowWidth * 3/4 - 500)
  {fill (255)
  rect(0,50,120,40)
  fill(0)
  textSize(30)
  text("大吉！",20,80)}
  else if(p== windowWidth * 3/4 - 300)
  {fill (255)
  rect(0,50,120,40)
  fill(0)
  textSize(30)
  text("中吉！",20,80)}
  else if(p== windowWidth * 3/4 - 100)
  {fill (255)
  rect(0,50,120,40)
  fill(0)
  textSize(30)
  text("小吉！",20,80)}
  else if(p== windowWidth * 3/4 + 80)
  {fill (255)
  rect(0,50,120,40)
  fill(0)
  textSize(30)
  text("末吉！",20,80)}
  else {}
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){ p -= 5; } 
  else if(keyCode == RIGHT_ARROW){ p+= 5; }
  }



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
