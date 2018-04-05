let ellipses=[];
function setup() {
  createCanvas(500, 500);
}
ell
function mousePressed() {
  // push an object with the mouse position and a random color
  // to the rectangles array
  ellipses.push({posX: mouseX, posY: mouseY, color: random(255)})
  text("this is a test", 75, 100);
  console.log(ellipses);
}

function draw() {
  background(random(255), 125, 255);

  // draw all rectangles every draw loop
  for (let i = 0; i < ellipses.length; i++) {
    fill(ellipses[i].color);
    ellipse(ellipses[i].posX, ellipses[i].posY, 100, 100);
    text("hopes",ellipses[i].posX, ellipses[i].posY, 200, 200);
    // make them fall by changing their y position every loop
    ellipses[i].posY ++;
//     if (rectangles[i].posY >= height) {
//       rectangles.splice(i,1);
   }
    }
