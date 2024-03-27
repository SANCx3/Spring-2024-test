

function setup() {
  var canvas=createCanvas(600, 400);
  canvas.parent('project');
    background(220);
  strokeWeight(4);
}


function draw() {
  
  if (mouseIsPressed){
    ellipse(mouseX,mouseY,10);
    stroke(1)
    
  } else if(keyIsPressed){
    rect(mouseX,mouseY,12,12);
    stroke(random(255),random(132),random(245));
  }
  
   rect(2,300,700,900);
 rect(2,1,120,300);
fill(1)
}