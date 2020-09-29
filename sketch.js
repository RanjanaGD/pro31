const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles
var plinkos
var divisions
var ground

var particle=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300;

function setup() {

  createCanvas(480,800);

  
  
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);
ground= new Ground(200,790,600,10)

for(var k=0;k<=innerWidth;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}




Engine.run(engine);

}

function draw() {
  background(0);  


ground.display();

for(var k=0;k< divisions.length;k++){
  divisions[k].display();
}


for(var j=0;j<particle.length;j++){
  particle[j].display();
}



if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}


  drawSprites();
}






