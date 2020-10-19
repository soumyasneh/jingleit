
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var obj1;
var obj2;
var obj3;
var obj4;
var obj5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Ground(800,40,1600,80);

obj1= new paper(500,400,5);
obj2= new paper(600,400,5);
obj3= new paper(700,400,5);
obj4= new paper(800,400,5);
obj5= new paper(900,400,5);



rope1 = new SlingShot(obj1.body,{x:500,y:60});
rope2 = new SlingShot(obj2.body,{x:600,y:60});
rope3 = new SlingShot(obj3.body,{x:700,y:60});
rope4 = new SlingShot(obj4.body,{x:800,y:60});
rope5 = new SlingShot(obj5.body,{x:900,y:60});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  rope1.display();
  rope2.display();
  rope3.display();	
  rope4.display();
  rope5.display();
  
  obj5.display();
  obj4.display();
  obj3.display();
  obj2.display();
  obj1.display();
  roof.display();

}


function keyPressed() {
if (keyCode===UP_ARROW) {
	Matter.Body.applyForce(obj5.body,obj5.body.position,{x:2,y:2})
	}

}







