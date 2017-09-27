function setup() {
  createCanvas(800,600)
  background(248,248,248)
}

function draw() {

 colorMode(RGB)

 strokeWeight(5)
 stroke(0,0,0,255)
 fill(255,255,255,125)

 line(0,0,200,320);
 rect(50,50,300,150);
 ellipse(200,200,400,200);

 colorMode(HSB)
 fill(0,100,100);
 stroke(0,0,0)
 strokeWeight(2)
 rect(280,280,25,25);

 colorMode(RGB)
 stroke(0,0,0)
 noFill()
 ellipse(width/2,height/2,200,200)

 fill(255,255,255)
 stroke(0,0,0)
 ellipse(mouseX,mouseY,50,50)

 stroke(0,0,0)
 line(pmouseX,pmouseY,mouseX,mouseY)
}
