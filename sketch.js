const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball



let boxes = [];
text("move slider to chenge color of background and gravity",10,200)
function setup() {
  createCanvas(600, 400);
 engine=Engine.create();

  world=engine.world;
  var ground_options={
      isStatic:true
  }
  ground=Bodies.rectangle(200,390,800,20,ground_options);
  World.add(world,ground);
  colorMode(HSB);
  gSlider = createSlider(0,255,100);
  gSlider.position(10, 10);
  gSlider.style('width', '80px');
  gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

}

function mousePressed() {
  boxes.push(new Bubble(mouseX, mouseY, random(10, 40), random(10, 40)));

}

function draw() {
  textSize(32);
  text('word', 10, 30);

  let val = gSlider.value();
  background(val, 100, 100, 1);
  var fVal = gSlider.value();
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
  fill("brown")

for (let bubble of boxes) {
    //bubble.move();
    bubble.show();
  }

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  
}
}

function Bubble(x, y, w, h) {
  var options = {
    restitution: 0.6
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow") 
    rect(0, 0, this.w, this.h);
    pop();
  }
}
