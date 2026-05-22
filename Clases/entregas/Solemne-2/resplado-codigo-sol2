// IMÁGENES
let Flormarchita;
let Florviva;
let textura;
// trasparencia para la flor
let vidaFlor = 255;

// CLICKs
let contadorClicks = 0;

// que simbolo mostrar cuando sea necesario
let cursorActual="";

//petalos finals
let petaloX = 200;
let petaloY = 0;

function setup() {
  createCanvas(400,windowHeight);
  Flormarchita= loadImage("./marchitaFlor.jpg");
  
  Florviva = loadImage ("./Florviva.jpg");
  
  textura = loadImage("./textura.jpg");
  
}

function draw() {
  background(220);
  
  noCursor()
  mostrarFlor();
  //idea descartada donde el cursor iba a tener una forma pero me daba problemas}
  //se queda pq me da pena sacarla
  //mostrarCursor();
  
   //text(contadorClicks, 50, 50);
  
  mostrarBordes();
   mostrarTexto();
  mostrarRojo();
  mostrarTexto2();
}
//descubri que las funciones son como capaz
//y no las quiero solar

 function mousePressed() {

  if (mouseButton === LEFT) {
 vidaFlor = vidaFlor - 9;
 contadorClicks = contadorClicks + 1;
    cursorActual = "corazon";

  }

  // LIMITES de opacidad
  vidaFlor = constrain(vidaFlor, 0, 255);

  



}
function mostrarCursor() {

  if (cursorActual === "corazon") {

    corazon(mouseX, mouseY);

  }

  if (cursorActual === "gota") {

    gota(mouseX, mouseY);

  }

}

function corazon(x, y) {

  circle(x - 5, y - 5, 10);
  circle(x + 5, y - 5, 10);

  triangle(
    x - 10, y - 2,
    x + 10, y - 2,
    x, y + 12
  );

}
function gota(x, y) {

  fill(100, 150, 255);

  noStroke();

  ellipse(x, y, 12, 18);

  triangle(
    x - 6, y,
    x + 6, y,
    x, y - 12
  );

}

function mostrarFlor() {

  // FLOR MARCHITA ABAJO
  image(Flormarchita, 0, 0, 400, height);

  // TRANSPARENCIA DE LA FLOR VIVA
  tint(255, vidaFlor);

  // FLOR VIVA ENCIMA
  image(Florviva, 0, 0, 400, height);

  noTint();

}

function mostrarTexto() {
push()
  fill(255);
textFont('Courier New')
  textSize(18);

  // TEXTO 1
  if (contadorClicks > 27) {
textAlign(CENTER)
    text("He pensado en ti "+ contadorClicks + " dias", width/3*1, height/5*1);

  }

  // TEXTO 2
  if (contadorClicks > 36) {
textAlign(CENTER)
    text("Cada dia duele mas", width/3*2, height/5*2);

  }

  // TEXTO 3
  if (contadorClicks > 45) {
textAlign(CENTER)
    text("pero con el tiempo...", width/3*1, height/5*3);

  }
pop();
}

function mostrarTexto2() {

  push();

  fill(255);

  textFont('Courier New');

  textStyle(BOLD);

  textSize(21);

  let movimiento = sin(frameCount * 0.03) * 3;

  if (contadorClicks > 70) {

    textAlign(CENTER);

    text(
      "Es mas facil que no estes aqui",
      width / 2,
      height / 2 + movimiento
    );

  }

  pop();

}

function mostrarBordes() {

  // PULSO
  let pulso = sin(frameCount * 0.05);

  // OPACIDAD QUE LATE
  let opacidad = map(pulso, -1, 1, 30, 80);

  noStroke();

  // PRIMER NIVEL
  if (contadorClicks > 9) {

    fill(0, opacidad);

    rect(0, 0, width, 40);

    rect(0, height - 40, width, 40);

    rect(0, 0, 40, height);

    rect(width - 40, 0, 40, height);

  }

  // SEGUNDO NIVEL
  if (contadorClicks > 18) {

    fill(0, opacidad);

    rect(0, 0, width, 80);

    rect(0, height - 80, width, 80);

    rect(0, 0, 80, height);

    rect(width - 80, 0, 80, height);

  }

  // TERCER NIVEL
  if (contadorClicks > 27) {

    fill(0, opacidad);

    rect(0, 0, width, 120);

    rect(0, height - 120, width, 120);

    rect(0, 0, 120, height);

    rect(width - 120, 0, 120, height);

  }

}

function mostrarRojo() {

  if (contadorClicks > 65) {

    push();

    // PULSO
    let pulso = sin(frameCount * 0.05);

    // CAMBIO DE SATURACIÓN
    let rojo = map(pulso, -1, 1, 150, 255);

    // FONDO ROJO
        noStroke();
    fill(rojo, 70, 90);

    rect(0, 0, width, height);

    // TEXTURA
    tint(255, 120);

    image(textura, 0, 0, width, height);


    pop();

  }

}

