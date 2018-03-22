
var xoffset = 50;
var yoffset = 50;

var secs = 0;
var mins = 0;
var secD = .08;
var minD = .09;

function setup() {
  createCanvas(400, 400);
  //noLoop();
}
function draw() {
  background(50);

  var s = second();
  var m = minute();


 
push(); // seconds hand
 
  translate(width/2,height/2) 
  fill(255,0,0);
  line(0,0,10,10);  
  rotate(radians(s*6)); 
  translate(10,10); 
  scale(2,2);
  drawhead();
pop();

push(); // hour hand
 
  translate(width/2,height/2) 
  fill(255,0,0);
  line(0,0,25,25);  
  rotate(radians(s*0.1)); 
  translate(10,10); 
  scale(1.5,1.5);
  drawhead();
pop();

push(); // min hand
 
  translate(width/2,height/2) 
  fill(255,0,0);
  line(0,0,75,75);  
  rotate(radians(s*0.4)); 
  translate(10,10); 
  scale(1.5,1.5);
  drawhead();
pop();

push();

  translate(width/2,height/2) 
  fill(255,255,0);
  ellipse(0,0,15,15);  
  rotate(radians(m*6)); 
  translate(100,40); 
  scale(1.5,1.5);
  drawhead();
pop();



secs+= secD;
mins+= minD;
fill(255);

text('Current second: \n' + s, 5, 50);
  text('Current minute: \n' + m, 5, 90);

}


function drawhead() {
  noFill();
  stroke(255);
  strokeWeight(8);
  line(0,0, 25, 25);
 
}
