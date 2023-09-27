var canvasDiv;

function setup() {
  canvasDiv = document.getElementById("mySketch");
  
  let canvas = createCanvas(canvasDiv.offsetWidth, windowHeight/2);
  canvas.parent("mySketch");
  background(200, 200, 100);
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
  } else {
     fill(255);
  }
    line(mouseX, mouseY, pmouseX, pmouseY);
    circle(mouseX, mouseY, 30);
}

function windowResized() {
  resizeCanvas(canvasDiv.offsetWidth, windowHeight/2);
}
