
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var ground1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new Bob(400)
bob2= new Bob(400)
bob3= new Bob(400)
bob4= new Bob(400)
bob5= new Bob(400)

ground1= new Roof(400,100,500);

rope1= new Rope(bob1.body,ground1.body,-80);
rope2= new Rope(bob2.body,ground1.body,-40);
rope3= new Rope(bob3.body,ground1.body,0);
rope4= new Rope(bob4.body,ground1.body,40);
rope5= new Rope(bob5.body,ground1.body,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  ground1.display()

  rope1.display()
  rope3.display()
  rope2.display()
  
  rope4.display()
  rope5.display()

  bob1.display()
  bob3.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()



 


  drawSprites();
 
}
function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}


