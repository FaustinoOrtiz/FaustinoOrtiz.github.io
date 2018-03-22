var xoffset = 50;
var yoffset = 50;

var secs = 0;
var mins = 0;
var secD = .08;
var minD = .09;

function setup() {
  createCanvas(200, 200);
  //noLoop();
}
function draw() {
  background(50);

  var s = second();
  var m = minute();


  // draw a face!
  // ellipse(xoffset,yoffset, 40, 40);
  // ellipse(xoffset+100,yoffset, 40, 40);
  // arc(xoffset+50, yoffset+50, 100, 50, 0, PI);
push(); // seconds hand
  //rotate(.1)
  translate(width/2,height/2) // shift it over
  fill(255,0,0);
  line(0,0,10,10);  // draw an anchor
  rotate(radians(s*6)); //rotate on the shift
  translate(10,10); // shift from anchor
  scale(2,2);
  drawhead();
pop();

push(); // hour hand
  //rotate(.1)
  translate(width/2,height/2) // shift it over
  fill(255,0,0);
  line(0,0,25,25);  // draw an anchor
  rotate(radians(s*0.1)); //rotate on the shift
  translate(10,10); // shift from anchor
  scale(1.5,1.5);
  drawhead();
pop();

push(); // min hand
  //rotate(.1)
  translate(width/2,height/2) // shift it over
  fill(255,0,0);
  line(0,0,75,75);  // draw an anchor
  rotate(radians(s*0.4)); //rotate on the shift
  translate(10,10); // shift from anchor
  scale(1.5,1.5);
  drawhead();
pop();

push();
  //rotate(.1)
  translate(width/2,height/2) // shift it over
  fill(255,255,0);
  ellipse(0,0,15,15);  // draw an anchor
  rotate(radians(m*6)); //rotate on the shift
  translate(100,40); // shift from anchor
  scale(1.5,1.5);
  drawhead();
pop();


// push();
// translate(mouseX,mouseY);
//  drawhead();
// pop();

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
  // stroke(255);
  // strokeWeight(8);
  // line(0,0,75,75);
  //ellipse(0+100,0, 40, 40);
  //arc(0+50, 0+50, 100, 50, 0, PI);
}
