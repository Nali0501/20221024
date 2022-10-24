function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw() {
  background(0)
  rectMode(CENTER)
	noFill()
	stroke(255)
	strokeWeight(1)
  // var w=mouseX/10
  for(var j=0;j<int(height/(50));j++)
  { 
    for(var i=0;i<int(width/(50));i++)
    {
      stroke("#c7ef00")
      ellipse(25+50*i,25+50*j,mouseX/20)
      stroke("#540d6e")
      rect(25+50*i,25+50*j,mouseY/4)
      stroke("#f90093")
      ellipse(50+50*i,50+50*j,25)
    }
  }
}