const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(530,235,40,40);
    box2 = new Box(560,230,40,40);
    box3 = new Box(590,235,40,40);
    box4 = new Box(620,235,40,40);
    box5 = new Box(650,235,40,40);
    box6 = new Box(560,195,40,40);
    box7 = new Box(590,195,40,40);
    box8 = new Box(620,195,40,40);
    box9 = new Box(590,135,40,40);
    bird = new Bird(110,30);
    slingshot = new SlingShot(bird.body,{x:90, y:80});
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    

    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    

    bird.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}