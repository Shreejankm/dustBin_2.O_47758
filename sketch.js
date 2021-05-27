
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var waste;
var dustbinObj;
var paperObject;
var b1,b2

function preload(){
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-65, width,10);
	groundSprite.shapeColor=color("brown")

	ground = Bodies.rectangle(width/2, 496, width, 10 , {isStatic:true} );
	World.add(world, ground);

	b1 = Bodies.rectangle(width/1.17,420,20,180, {isStatic:true} );
	World.add(world,b1);

	b2 = Bodies.rectangle(width/1.055,420,30,180, {isStatic:true} );
	World.add(world,b2);

	waste = new Paper(width/9,250);

	dustbinObj = new DustBin(width/1.11,420,140,180);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine);

  waste.display();
  dustbinObj.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(waste.body,waste.body.position,{x:6.4,y:-8});
	}
}