const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    box1=new Box(800,580);
    box2=new Box(800,500);
    box3=new Box(800,420);
    box4=new Box(800,340);
    box5=new Box(800,260);
    box6=new Box(800,180);
    box7=new Box(800,100);
    box8=new Box(800,20);

    box11=new Box(700,580);
    box12=new Box(700,500);
    box13=new Box(700,420);
    box14=new Box(700,340);
    box15=new Box(700,260);
    box16=new Box(700,180);
    box17=new Box(700,100);
    box18=new Box(700,20);

    ball=new Ball(550,340,50)
    rope=new Chain(ball.body,{x:500,y:100})
}

function draw(){
        background("white");
    
    Engine.update(engine);

    ground.display();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    ball.display()
    rope.display()
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}