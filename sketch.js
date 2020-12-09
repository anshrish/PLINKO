const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particle = [];
var plinko = [];
var division = [];

var divisionHeight = 300;

var plinko1 = 150;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(240,800,480,10);
    ground2 = new Ground(0,400,10,800);
    ground3 = new Ground(480,400,10,800);

    divisionBottom = new Division(240,795,490,10)
    

    for(var k = 0; k <=width; k = k + 80){
      division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }

    for(var i = 48; i <=width-10; i = i + 48){
      plinko.push(new Plinko(i,plinko1,10,plinko1));
    }

    for(var x = 24; x <=width; x = x + 48){
      plinko.push(new Plinko(x,plinko1+80,10,plinko1));
    }

     for(var z = 48; z <=width-10; z = z + 48){
       plinko.push(new Plinko(z,plinko1+160,10,plinko1));
    }

    for(var y = 24; y <=width; y = y + 48){
      plinko.push(new Plinko(y,plinko1+240,10,plinko1));
   }

   
}

function draw() {
  background(0); 
  Engine.update(engine); 
  

  divisionBottom.display();

  ground1.display();
  ground2.display();
  ground3.display();



for(var k = 0; k < division.length; k++){
  division[k].display();
}
for(var i = 0; i < plinko.length; i++){
  plinko[i].display();
}
for(var x = 0; x < plinko.length; x++){
  plinko[x].display();
}
for(var z = 0; z < plinko.length; z++){
  plinko[z].display();
}
for(var y = 0; y < plinko.length; y++){
  plinko[y].display();
}

if(frameCount%30 === 0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10));
}
for(var a = 0; a < particle.length; a++){
  particle[a].display();
}

drawSprites();
}
