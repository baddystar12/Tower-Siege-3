const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11;
var box12, box13, box14, box15;
var box16, box17, box18;
var box19, box20;
var box21;
var box22, box23, box24, box25;
var box26, box27, box28;
var box29, box30;
var box31;
var slingShot, polygon1;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(350, 350, 170, 10);
  ground2 = new Ground(600, 150, 100, 10);
  // level one ground one
  box1 = new Box(300, 330,20, 30 );
  box2 = new Box(320, 330, 20,30);
  box3 = new Box(340, 330, 20, 30);
  box4 = new Box(360, 330, 20, 30);
  box5 = new Box(380, 330, 20, 30);
  box6 = new Box(400, 330, 20, 30);
  // level two ground one
  box7 = new Box2(310, 300, 20, 30);
  box8 = new Box2(330, 300, 20, 30);
  box9 = new Box2(350, 300, 20, 30);
  box10 = new Box2(370, 300, 20, 30);
  box11 = new Box2(390, 300, 20, 30);
  // level three ground one
  box12 = new Box3(320, 270, 20, 30);
  box13 = new Box3(340, 270, 20, 30);
  box14 = new Box3(360, 270, 20, 30);
  box15 = new Box3(380, 270, 20, 30);
  // level four ground one
  box16 = new Box4(330, 240, 20, 30);
  box17= new Box4(350, 240, 20, 30);
  box18= new Box4(370, 240, 20, 30);
  // level five ground one
  box19 = new Box5(340, 210, 20, 30);
  box20 = new Box5(360, 210, 20, 30);
  // level six ground one
  box21 = new Box6(350, 180, 20, 30);
  // level one ground two
  box22 = new Box(570, 130, 20, 30);
  box23 = new Box(590, 130, 20, 30);
  box24 = new Box(610,130, 20, 30);
  box25 = new Box(630, 130, 20, 30);
  // level two ground two
  box26 = new Box2(580, 100, 20, 30);
  box27 = new Box2(600, 100, 20, 30);
  box28 = new Box2(620, 100, 20, 30);
  // level three ground two
  box29 = new Box3(590, 70, 20, 30);
  box30 = new Box3(610, 70, 20, 30);
  // level four ground two
  box31 = new Box4(600, 40, 20, 30);
  polygon1 = new Polygon(50, 200, 35);
  slingShot = new SlingShot(polygon1.body, {x:100, y:200});

  Engine.run(engine);
}

function draw() {
  background("#0018b5"); 
  Engine.update(engine); 
  ground1.display();
  ground2.display();
  // level one ground one
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  // level two ground one
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  // level three ground one
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  // level four ground one
  box16.display();
  box17.display();
  box18.display();
  // level five ground one
  box19.display();
  box20.display();
  // level six ground one
  box21.display();
  // level one box two
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  // level two box two
  box26.display();
  box27.display();
  box28.display();
  // level three box two
  box29.display();
  box30.display();
  // level four box two
  box31.display();
  polygon1.display();
  slingShot.display();
  // detectCollision function
  /*detectCollision(polygon1, box1);
  detectCollision(polygon1, box2);
  detectCollision(polygon1, box3);
  detectCollision(polygon1, box4);
  detectCollision(polygon1, box5);
  detectCollision(polygon1, box6);
  detectCollision(polygon1, box7);
  detectCollision(polygon1, box8);
  detectCollision(polygon1, box9);
  detectCollision(polygon1, box10);
  detectCollision(polygon1, box11);
  detectCollision(polygon1, box12);
  detectCollision(polygon1, box13);
  detectCollision(polygon1, box14);
  detectCollision(polygon1, box15);
  detectCollision(polygon1, box16);
  detectCollision(polygon1, box17);
  detectCollision(polygon1, box18);
  detectCollision(polygon1, box19);
  detectCollision(polygon1, box20);
  detectCollision(polygon1, box21);
  detectCollision(polygon1, box22);
  detectCollision(polygon1, box23);
  detectCollision(polygon1, box24);
  detectCollision(polygon1, box25);
  detectCollision(polygon1, box26);
  detectCollision(polygon1, box27);
  detectCollision(polygon1, box28);
  detectCollision(polygon1, box29);
  detectCollision(polygon1, box30);
  detectCollision(polygon1, box31);*/
  drawSprites();
}

/*function detectCollision(lpolygon, lbox){
  boxBodyPosition = lbox.body.position;
  polygon1BodyPosition = lpolygon.body.position;
  var distance = dist(polygon1BodyPosition.x, polygon1BodyPosition.y, boxBodyPosition.x, boxBodyPosition.y);
  if(distance<=lbox.width+lpolygon.radius){
    Matter.Body.setStatic(lbox.body, false);
  }
}*/
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon1.body, {x:50, y:200});
    slingShot.attach(polygon1.body);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}