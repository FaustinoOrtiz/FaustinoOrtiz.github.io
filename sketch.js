
let value = 0;
let img;

function preload() {
  img = loadImage('assets/superMarioClouds_0.png');
}

function setup() {
  createCanvas(1000,1000);
  background(83,140,232);
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  image(img, 0, 0,mouseX,mouseY);
  //image(image,mouseX,mouseY,80,80);

  function draw() {

    // fill(mouseX,mouseY,100,100);
    // rect(value, height/2,20,height);
    image(image,0,0,mouseX,mouseY);

    }
if x < width
x++;
else
x = 0;
  // If you want to scale the image to 100 x 100 pixels
  // image(img, 0, 0, 100, 100);

  // If you want to scale image by 50%
  // image(img, 10, 10, img.width/2, img.height/2);
}

// function setup() {
// 	createCanvas(500, 500);
// 	// background is very light grey
// 	background(230);
// }
//
// function draw() {
//
// 	// create bright green ellipse with white stroke
// 	// fill is bright green
// 	fill(0, 255, 0);
// 	// stroke is white
// 	stroke(255, 255, 255);
// 	strokeWeight(1); // reset to default
// 	ellipse(100, 100, 25, 25);
//
// 	// make transparent rectangle
// 	// a color fill with a fourth argument will define transparency
// 	// fill has about 50% transparency
// 	fill(255, 0, 25, 25);
// 	noStroke();
// 	rect(100, 100, 100, 80);
//
// 	// stroke weight will set thickness of line
// 	stroke(100, 200, mouseY, mouseX);
// 	strokeWeight(5);
// 	line(25, 25, mouseX, mouseY);
//
// 	fill(0,255,0);
// 	noStroke();
// 	triangle(75,85,100,25,40,58);
// }
