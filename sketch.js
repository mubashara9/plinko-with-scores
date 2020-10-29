const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//var engine, world, object;
var particles=[];
var plinko=[];
var divisions=[];
var divisionHeight=300;
var ground;
var score=0;
var particle, count=0;
var gameState="start"
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(width/2,height,width,20);

 for(var k=0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
 }

  for(var j=40; j<=width; j=j+50){
    plinko.push(new Plinko(j,75))
  }
  for(var j=15; j<=width-10; j=j+50){
     plinko.push(new Plinko(j,175))
  }
  for(var j=40; j<=width; j=j+50){
    plinko.push(new Plinko(j,275))
  }
  for(var j=15; j<=width-10; j=j+50){
    plinko.push(new Plinko(j,375))
 }
 mousePressed()
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display();

  text("Score:"+score,width-100,50)
  text(mouseX+";"+mouseY,mouseX,mouseY);

  text("500",35,530)
  text("500",120,530)
  text("500",200,530)
  text("500",270,530)
  text("200",350,530)
  text("200",440,530)
  text("200",520,530)
  text("100",600,530)
  text("100",680,530)
  text("100",760,530)

  if(gameState=="end"){
    textSize(30)
    text("Game Over",400,400)
  }

  if(particle!=null){
    particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x<315){
          score=score+500;
          particle=null;
          if(count>=5)
          gameState="end"
        }
        else if(particle.body.position.x>300&&particle.body.position.x<560){
          score=score+200;
          particle=null;
          if(count>=5)
          gameState="end"
        }
        else{
          score=score+100;
          particle=null;
          if(count>=5)
          gameState="end"
        }
      }
  }
  

  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }
  text("count"+count,50,50)

 // drawSprites();
}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}