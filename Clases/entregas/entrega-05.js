let brillo=0
let tono=0 
let tamaño=100
let tamaño2=200
let velocidad=-2
let velocidad2=-1
let linea=1
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    //(tono, maximo hue, maxsat, maxbright, mas opacidad/alpha)
  colorMode(HSB,360,100,100,100);
  background(0,0,brillo,100);
  brillo = brillo +1
  if (brillo >= 100){
    brillo=0;
    
     if (brillo<= 1){
    brillo=1;}
    
    //circulo base que palpita 
  }
  push()
  
  fill(tono,100,100,100)
  noStroke()
  ellipse(mouseX,mouseY,tamaño,tamaño)
  tono = tono + 1
  
  tamaño = tamaño + velocidad;

  if (tono >= 360) {
    tono =0;
  }

  if (tono <= 0) {
    tono = 1;
  }
  
  if (tamaño >= 200) {
    velocidad = -2;
  }

  if (tamaño <= 50) {
    velocidad = 2;
  }
  pop()
    
  push()
  
  noFill();
  stroke(tono, 100,100, 100);
  strokeWeight(4);
    
  ellipse(mouseX, mouseY, tamaño+50, tamaño+50);
    
  pop()
    
  //se me ocurre crear como un desface al avanzar, no se pudo ahora 
  
  push()
  
  fill(tono+180,100,100,80)
  noStroke()
  ellipse(mouseX+70,mouseY,tamaño,tamaño)
  tono = tono + 1
  
  tamaño = tamaño + velocidad;

  if (tono >= 360) {
    tono =0;
  }

  if (tono <= 0) {
    tono = 1;
  }
  
  if (tamaño >= 200) {
    velocidad = -2;
  }

  if (tamaño <= 50) {
    velocidad = 2;
  }

  pop()
    
  push()
  
  noFill();
  stroke(tono+180, 100,100, 50);
  strokeWeight(4);
    
  ellipse(mouseX+70, mouseY, tamaño+50, tamaño+50);
    
  pop()
}
