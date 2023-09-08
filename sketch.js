let x = 50; // Posición inicial en X
let y = 50; // Posición inicial en Y
let speedX = 5; // Velocidad inicial en X
let speedY = 5; // Velocidad inicial en Y
let sideLength = 100; // Longitud de los lados del rombo

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
}

function draw() {
  background(220);
  
  // Dibuja el rombo en la posición actual
  rect(x, y, sideLength, sideLength);
  
  // Actualiza la posición del rombo
  x += speedX;
  y += speedY;
  
  // Verifica si el rombo ha chocado con los límites de la pantalla
  if (x + sideLength / 2 >= width || x - sideLength / 2 <= 0) {
    speedX *= -1; // Invierte la dirección en el eje X
  }
  if (y + sideLength / 2 >= height || y - sideLength / 2 <= 0) {
    speedY *= -1; // Invierte la dirección en el eje Y
  }
}
