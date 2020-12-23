
const Engine = Matter.Engine;

const World= Matter.World;

const Bodies = Matter.Bodies;


var engine, world;

var star,starimg;

var alpha,alphaimg;

var beta,betaimg;

var gamma,gammaimg;

var delta,deltaimg;

function preload(){

  starimg = loadImage("star.png");

    alphaimg = loadImage("planeta.png");

    betaimg = loadImage("planetb.png");

    betaimg = loadImage("planetc.png");

    deltaimg = loadImage("planetd.png");
}
function setup(){

  
  var canvas = createCanvas(1350,800);

  engine = Engine.create();

    world = engine.world;

    engine.world.gravity.y = 0;

    star = new Star(width/2,height/2,50,50);

    push();

    alpha = new Planet(580,270,30,"planeta.png");

    beta = new Planet(620,280,40,"planetb.png");

    gamma = new Planet(540,260,50,"planetc.png");

    delta = new Planet(650,320,70,"planetd.png");

    pop();
  
}

function draw(){

  background(0);

    Engine.update(engine);

    

    

    star.display("VIVEK");

    if(frameCount<170){

      alpha.display("ALPHA");

      }

    beta.display("BETA");  

      if(frameCount<4500){

      gamma.display("GAMMA");

    }

    if(frameCount<350){

      delta.display("DELTA");

    }
}
