// Script By Jerome Mercier https://linktr.ee/jmercier
// https://formation.pizza-punk.com/

let palette = [];
let myTorus = { t: 50, rx : 0, ry : 0, rz : 0 };
let mySphere = { z : -150};
let w,h;
let he=0;

function setup() {
  angleMode(DEGREES);
  w = document.getElementById("canvas").offsetWidth;
  h = document.getElementById("canvas").offsetHeight;
  cnv = createCanvas(w,h,WEBGL);
  cnv.parent("canvas");
  
  startTime = millis(); 
  
  palette[0] = color("#EEE");
  palette[1] = color("#8D99AE");
  palette[2] = color("#EDF2F4");
  palette[3] = color("#EF233C");
  palette[4] = color("#D90429");
  palette[5] = color("#2B2D42");
  
  
}

function draw() {
  //clear();
  let currentTime = millis()*0.25; // Get the current time
  
  rotateY(45 + millis()*0.01);
  
  //rotateZ(currentTime);
  lights();
  background(palette[1]);
  push();
  noStroke();
  fill(palette[4]);
  rotateX(myTorus.rx);
  rotateY(myTorus.ry);
  rotateZ(myTorus.rz);
  torus(myTorus.t, 15);
  pop();
  push();
  noStroke();
  fill(palette[1]);
  translate(0,0,mySphere.z);
  sphere(30);
  pop();
}

let tl = gsap.timeline({repeat: 99, delay: 2, repeatDelay: .1});
tl.to(myTorus, {rx: 180, duration: 2, ease: "elastic.out(1,0.3)"})
  .to(mySphere, {z: 150,  duration: 1, ease: "elastic.out(0.5,0.6)"},'<.5')
  .to(myTorus, {rx: 360,  duration: 2, ease: "elastic.out(1,0.3)"})
  .to(mySphere, {z: -150,  duration: 1, ease: "elastic.out(0.5,0.6)"},'<.5');
  
function windowResized() {
  resizeCanvas(document.getElementById("canvas").offsetWidth, document.getElementById("canvas").offsetHeight);
}
