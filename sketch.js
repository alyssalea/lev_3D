var goblin;
var toiletpaper;
var x = 1;
var song

function preload(){
  song = loadSound('assets/prison.mp3');
}

function setup(){
  createCanvas(1000, 1000, WEBGL);
  background(200, 190, 255);
  goblin = loadModel('assets/goblin.obj');
  toiletpaper = loadModel('assets/paper.obj');
  song.play();

}
function draw(){
  background(200, 190, 255);
  rotateX(frameCount * .0001);
  rotateY(frameCount * .0001);
  rotateY(frameCount * 0.01);
  model(goblin);
  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 80; i++){
      translate(sin(frameCount * 0.001 + j) * 1000, sin(frameCount * 0.001 + j) * 1000, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      sphere(8, 6, 4); 
      pop();
    }
    pop();
  }
//  fill(58, 99, 54);
 
 // strokeWeight (4);
  //stroke (51);
  //fill (255);
  //model(toiletpaper);
}