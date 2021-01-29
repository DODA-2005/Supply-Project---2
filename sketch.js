var helicopterIMG, helicopterSprite, packageSprite,packageIMG
var packageBody,ground, edgeL, edgeR, bg, bgImg, barrier,  zombie
var zom1Img, zom2Img,zomImg,zom3Img,zom4Img
var zom1, zom2, zom3, zom4
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	
	bgImg=loadImage("zombie apocalypse.jpg")
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	zomImg=loadImage("zom5.png")
	zom1Img=loadImage("zom1.png")
	zom2Img=loadImage("zom2.png")
	zom3Img=loadImage("zom3.png")
	zom4Img=loadImage("zom4.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	bg=createSprite(400,350,width,height);
	bg.addImage(bgImg);

	zombie=createSprite(100,625,10,10);
	zombie.addImage(zomImg);
	zombie.scale=0.35;

	zom1=createSprite(250,625,10,10);
	zom1.addImage(zom1Img);
	zom1.scale=0.35;

	zom2=createSprite(625,625,10,10);
	zom2.addImage(zom2Img);
	zom2.scale=0.35;

	zom3=createSprite(525,625,10,10);
	zom3.addImage(zom3Img);
	zom3.scale=0.35;

	zom4=createSprite(700,625,10,10);
	zom4.addImage(zom4Img);
	zom4.scale=0.35;

	edgeL=createSprite(10,660,10,20);
	edgeR=createSprite(790,660,10,20);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible=false;


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 groundSprite.visible=false;

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  leftKey(); safeguard();
  rightKey();
  keyPressed();
  drawSprites();
  
  function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody, isStatic=false)
	  packageSprite.visible=true;
	}
 
}
function leftKey() {
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.velocityX=-3;
		packageSprite.velocityX=-3
	  }
}
function rightKey(){
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.velocityX=3;
		packageSprite.velocityX=3
	  }
}

function safeguard(){
	if(helicopterSprite.x>800||helicopterSprite.x<0){
		helicopterSprite.x=width/2;
		helicopterSprite.velocityX=0;
	}
}
}
