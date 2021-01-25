const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myEngine,myWorld;
var box1,box2;
var ground1;

function setup(){ 
createCanvas(800,800); 
 myEngine=Engine.create();
 myWorld=myEngine.world; 
box1=new Box(50,670,50,50); 
box2=new Box(200,670,50,50);
box3=new Box(50,570,50,50);
box4=new Box(200,570,50,50);
pig1=new pigs(120,670);
pig2=new pigs(120,570);
 ground1 = new ground(400,700,800,30);
 log1 =new logs (100,600,20,PI);
 log2 =new logs (100,570,20,PI);
console.log(box1);
 }
  function draw(){ 
background("black"); 
Engine.update(myEngine);
box1.display(); 
box2.display();
  ground1.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  log2.display();
  pig2.display();
} 