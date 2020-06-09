const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var colourballs = [];
var plinkos = [];
var divisions = [];
var divH = 250;

function setup(){
    var canvas = createCanvas(480, 600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,595,480,10,random(100,255),random(100,255),random(100,255));

    for(var d = 0; d<=width; d=d+80)
    {
        divisions.push(new Ground(d, height-divH/2, 10, divH, random(100,255), random(100,255), random(100,255)));
    }

    for(var p = 0; p<=500; p = p+40)
    {
        plinkos.push(new Plinko(p, 60, 10));
    }

    for(var p = 20; p<=480; p = p+40)
    {
        plinkos.push(new Plinko(p, 160, 10));
    }

    for(var p = 0; p<=500; p = p+40)
    {
        plinkos.push(new Plinko(p, 260, 10));
    }
    
   if(frameCount%60===0)
   {
       colourballs.push(new Colourball(random(50,430),10,10))
   }
}

function draw(){

   
   background(0);
   Engine.update(engine);
   ground.display();

  
   
   for(var a = 0; a<divisions.length; a++)
   {
       divisions[a].display();
   }

   for(var b = 0; b<plinkos.length; b++)  
   {
       plinkos[b].display();
   }
    
   for(var c = 0; c<colourballs.length; c++)  
   {
       colourballs[c].display();
       
   }

    

  
}

