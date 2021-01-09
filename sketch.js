
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1, mango2, mango3, mango4,mango5, tree1, stone1, boy1, treeImage, boyImage;
function preload()
{ treeImage= loadImage("tree.png");
 boyImage = loadImage("boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 tree1 = createSprite(750,600,70,70);
 treeImage = addImage(treeImage);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



