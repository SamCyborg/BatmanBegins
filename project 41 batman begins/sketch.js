const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var batman;
var drops =[];
var maxDrops = 150;
var thunderEffect1,thunderEffect2,thunderEffect3,thunderEffect4,thunderbolt; 
var thunderCount=0;


function preload(){
    thunderEffect1 = loadImage("images/thunderbolt/1.png");
    thunderEffect2 = loadImage("images/thunderbolt/2.png");
    thunderEffect3 = loadImage("images/thunderbolt/3.png"); 
    thunderEffect4 = loadImage("images/thunderbolt/4.png"); 
    bgImg = loadImage("images/background/bg1.jpg");
    
}

function setup(){
   createCanvas(500,windowHeight);
   engine = Engine.create();
   world = engine.world;
   batman = new Umbrella(width/2,height/2+200);
   

   if(frameCount%100 === 0){
       for(var i=0 ; i<maxDrops ; i++){
           drops.push(new Drop(random(0,400),random(-50,400)));
       }
   }
   
   
}

function draw(){
    Engine.update(engine);
    background(bgImg);
    batman.display();

    // rand for random variable
     var rand = Math.round(random(1,4));
  if(frameCount%180===0){
    thunderCount = frameCount;
    thunderbolt = createSprite(random(10,370),random(10,60),10,10);
    switch(rand){
     case 1 : thunderbolt.addImage(thunderEffect1);
     break;
     case 2 : thunderbolt.addImage(thunderEffect2);
     break;
     case 3 : thunderbolt.addImage(thunderEffect3);
     break;
     case 4 : thunderbolt.addImage(thunderEffect4);
     break;
     default : break;
   }
   console.log(frameCount);
  }
  
  if(thunderCount + 20 === frameCount && thunderbolt){
    thunderbolt.destroy();
 }


    for(var i=0 ; i<maxDrops ; i++){
        drops[i].display();
        drops[i].update();
    }
   drawSprites();
}   


