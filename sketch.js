
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var con

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(1100,800);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(550,780,1100,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
  con=Matter.Constraint.create({
  pointA:{x:200,y:20},
  bodyB:ball,
  stiffness:0.01,
  length:100
  
  })
  
  World.add(world,con);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  push()
  strokeWeight(2);
  stroke("white");
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  pop()
  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.10,y:0});
}
  


