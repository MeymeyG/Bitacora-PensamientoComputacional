# Plantilla para solemne-02

## Integrantes del grupo

- Maira Ramirez [cuentaGithub](https://github.com/MeymeyG)

## Descripción del disco

![Portada de álbum xxxx yyyy](./img/cover.jpg)

- Nombre del álbum: ROSA
- Año del álbum: 2018
- Artista : Camila Gallardo (CAMI)
- Tracklist:
 1.	«Querida Rosa»	
2.	«Antorcha»	
3.	«No Es Real» (
4.	«Pa' Callar Tus Penas»	
5.	«Abrázame»	
6.	«Toditas por ti»	
7.	«Un poco más de frío»	
8.	«Ven»
9.	«Más de la mitad»	
10.	«Fuerte»


- Aspecto del álbum a desarrollar (premisa)

> Lorem ipsum blablabla

## Conclusión del proceso

El proyecto se basa del álbum “ROSA”, principalmente desde la canción “Querida Rosa”. La propuesta busca representar visualmente el desgaste emocional, la pérdida y el intento constante de conservar algo que lentamente desaparece.

A través de la interacción del usuario, se transforma una rosa de estar con vida hasta marchitarse. El clic izquierdo da paso el marchitamiento, de esta forma es que se busca que quien interactue con esto se involucre mas haya de verlo. Con el paso de los clicks aparecen cambios visuales como bordes oscuros, variaciones de color y textos que refuerzan la sensación de duelo y agotamiento emocional.
- Cosas no conseguidas
En un inicio se tenia pensado que se pudiera ir hacia adelante y hacia atras, pero al no conseguir una constancia en el retroceso se descarto, tambien antes el cursor iba a tener una forma diferente dependiendo del click pero en su momento no sabia solucionar un problema que era con el color, actualmente creo que ya se como resolver eso( ese codigo quedo abandonado pero no quise borrarlo del codigo,
-Al final queria hacer petalos pero al hacerlo los codigos no los entendia y decidi descartarlo porque si algo dentro del codigo no podia entenderlo se borraba.

- Descubrimientos al trabajar

> Lo realmente importante que es PUSH()y POP() porque al final e di cuenta que sin ellos el codigo se mezclaba con otros
> Que crear funciones me ayudaba a pensar mas cercano a como funcionan las capas en por ejemplo photoshop y se podia ver mas ordenado, asi que capaz sobreexplote el crear funciones

## Explicación del código (3 aspectos)

### Bloque de código 1

function mousePressed() {

  if (mouseButton === LEFT) {
 vidaFlor = vidaFlor - 9;
 contadorClicks = contadorClicks + 1;
  }
  // LIMITES de opacidad
  vidaFlor = constrain(vidaFlor, 0, 255);

-Explicación: al apretar el click izquierdo este le quita la opacidad a una imagen, estos son variables globables asi que se pueden ocupar en otras funciones,por eso vida flor es la opacidad/ que tanto se ve la imagen trasparente y gracias al contadorclicks cada que se detecta un clicks hace que que vida flor le quite claridad a la imagen, ya que comienza en 255 y cada click le resta -9 y se ve poco a poc en cada click como desaparece la imagen.
### Bloque de código 2

function mostrarBordes() {

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

-Explicacion: la gran parte del codigo son los rectangulos de los bordes pero la parte que late especifcamente lo que hace es convertir los valores del pulso que de 1 a -1 ya que son sin() , esto lo hace gracias al comando map() que les da valores utilizables en la variante d eopacidad, los cuales interviene en los "colores" de cada rectangulo.

### Bloque de código 3

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

-Explicacion: aqui el color del rojo varia la saturacion gracias al sin(), que afecta al rectangulo que en esta parte es el fondo, luego encima se le pone una imagen con textura con menos opacidad.

### Declaración sobre el uso de IA

- IA utilizada(s) y tipo de licencia (pago, gratuita)

> Chatgpt gratis

- Problema a resolver a través de la IA

> ayudar a construir el codigo, buscando que utilizara la mayor parte de conocimientos vistos en clases, como a resolver dudas de como funcionaban ciertas partes o de formas que me diera posibles soluciones mas sensillas a problemas donde yo me complicaba.

 Prompts utilizados

-Cómo hacer una transición de opacidad entre imágenes en p5.js”

-“Cómo usar frameCount y sin() para generar movimiento suave”

-“Cómo organizar funciones y variables en p5.js”


 Secciones de código entregadas por la IA

let pulso = sin(frameCount * 0.05); 
let opacidad = map(pulso, -1, 1, 30, 80);

if (mouseButton === LEFT) { vidaFlor = vidaFlor - 10; }

let movimiento = sin(frameCount * 0.03) * 3;
