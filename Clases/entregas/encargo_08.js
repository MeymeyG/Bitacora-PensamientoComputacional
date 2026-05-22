//creamos propio
let berlin

// vamos a cambiar la posicion de akrila
let posX = 0;
let posY = 0;

// variable para guardar la dirección
let dirX = 1;
let dirY = 1;

//velocidades
let velX = 1;
let velY = 1;
// porbar algo
let c = 0;
let dir = 1;

function setup() {
  createCanvas(400, 400);
  berlin = loadImage("./berlin.jpg");
}

function draw() {
  background(100,c,c)
  image(berlin, posX, posY, 100, 100);
  
  //actualizamos la posicion de akrila
  //dir es hacia la derecha si es 1
  // hacia la izquierda si es -1
  posX = posX + velX * dirX;
  
  if (posX > width - 100){
  dirX = -1;
  velX = random(1, 10);
}
    
  if (posX > width*4/5 - 100){
  dirX = -1;
  velX = random(1, 10);
}

if (posX < width*1/5){
  dirX = 1;
  velX = random(1, 10);
}
  
  //moviiento vertical
posY = posY + velY * dirY;

if (posY > height - 100){
  dirY = -1;
  velY = random(1, 10);
}

if (posY < 0){
  dirY = 1;
  velY = random(1, 10);
}
  
  c = c + dir;

if (c >= 255) {
  dir = -1;
}

if (c <= 0) {
  dir = 1;
}
  
  
  line(width*1/5, 0, width*1/5,height);
  line(width*4/5, 0, width*4/5,height);
  
  //desafío:
  //implementar este rebote en el eje vertical listo
  //que además cambie de velocidad aleatoriamente listo
  //y que cambie el color del fondo
  
  //y que sea otra imagen y no akrila listi
  //opcional : que haya otra imagen de fondo
  
}
