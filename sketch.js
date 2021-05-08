 var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var Snowflake=[]
  var bg1
  

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
 
}

function preload(){
 bg1=loadImage("snow1.jpg")
}
function draw() {
  background(bg1);  

  for (var j = 0; j < Snowflake.length; j++){
    Snowflake.push(new Snow(random(width/2-10,width/2+10),10,10))
  } 
  if(frameCount%60===0){
    Snowflake.push(new Snow(random(width/2-10,width/2+10),10,10))  
  }
  

  
 
  drawSprites();
}