var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	
	packageSprite=createSprite(width/2, 80, 90,90);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	//packageSprite.debug = true;
//packageSprite.setCollider("circle",0,30,200);

helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6

red = createSprite(width/2,390,280,10);
red.shapeColor = color(255,0,0);

red1 = createSprite(width/2-140,280,10,150);
red1.shapeColor = color(255,0,0);

red2 = createSprite(width/2-140,280,10,150);
red2.shapeColor = color(255,0,0);

	groundSprite=createSprite(width/2, 590, width,10);
	groundSprite.shapeColor=color(255)
//groundSprite.visible = false;

	engine = Engine.create();
	world = engine.world;
	
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {'restitution':0.4,'friction':1.5,'dencity':2, isStatic:true});
	World.add(world, packageBody);
	
	redbody = Bodies.rectangle(width/2,580,30,10,{isStatic:true} )

	redbody1 = Bodies.rectangle(width/2-140,520,30,10,{isStatic:true} )

	redbody2 = Bodies.rectangle(width/2+140,520,30,10,{isStatic:true} )

	//Create a Ground
	ground = Bodies.rectangle(width/2, 590, width, 30 , {isStatic:true} );
 	World.add(world, ground);


	//Engine.run(engine);
  
}


function draw() {
  
  background(0);
 Engine.update(engine);
  rectMode(CENTER); 
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
 groundSprite.x= ground.position.x ;
 groundSprite.y= ground.position.y ;
 red.x= redbody.position.x ;
 red.y= redbody.position.y ;
 red1.x= redbody1.position.x ;
 red1.y= redbody1.position.y ;
 red2.x= redbody2.position.x ;
 red2.y= redbody2.position.y ;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody, false);
//Matter.Body.setStatic(redbody, false);
}
}



