var helper, helper_running, helper_idle;
var boy, boy_running, boy_dead, boy_idle;
var boss, boss_running, boss_idle;

function preload(){
  boy_idle = loadImage("Idle (2).png");
  boy_running = loadAnimation("Walk (1).png" , "Walk (3).png" , "Walk (5).png" , "Walk (9).png");
  boy_dead = loadAnimation("Dead (1).png" , "Dead (3).png" , "Dead (5).png");

  boss_running = loadAnimaton("Run_000.png" , "Run_005.png" , "Run_008.png" , "Run_009.png");
  boss_idle = loadImage("Idle_000.png");

  helper_running = loadAnimation("Walk (16).png" , "Walk (17).png" , "Walk (18).png" , "Walk (19).png" , "Walk (20).png");
  
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}