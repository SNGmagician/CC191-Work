function setup() {
  createCanvas(500, 500);
  background(50, 100, 255);

}

function draw() {

//Ellipse 1 Yellow w/ red fill  Upper-left

  fill(255, 255, 0);
  stroke(255, 50, 10);
  strokeWeight(8);

  ellipse(150, 150, 140, 200);



  fill(255, 50, 10);//Ellipse 2 Red, w/ yellow fill. Mid-screen
  stroke(255, 255, 0);
  strokeWeight(8);

  ellipse(250, 250, 140, 200);

/*  (Block-Comment)
 Ellipse 3 Yellow w/ Blue fill  Lower-Right
*/

  fill(50, 100, 255);
  stroke(255, 50, 10);
  strokeWeight(8);
  ellipse(350, 350, 140, 200);
}
