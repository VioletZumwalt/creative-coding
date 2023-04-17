// JavaScript source code
// x and y for my character
var characterX = 50;
var characterY = 50;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 100;
var shapeXSpeed;
var shapeYSpeed;
var shapeZ = 30;
var shapeA = 20;
var shapeZSpeed;
var shapeASpeed;
var shapeB = 50;
var shapeC = 300;
var shapeBSpeed;
var shapeCSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup() {
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(50, 50);
}

function draw() {
    background(200, 150, 300);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10)

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(13, 145, 14);
    // draw the shape
    square(shapeA, shapeZ, 5);



    // get a random speed when the it first starts
    shapeASpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeZSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeZ += shapeZSpeed;
    shapeA += shapeASpeed;
    // check to see if the shape has gone out of bounds
    if (shapeZ > width) {
        shapeZ = 0;
    }
    if (shapeZ < 0) {
        shapeZ = width;
    }
    if (shapeA > height) {
        shapeA = 0;
    }
    if (shapeA < 0) {
        shapeA = height;
    }

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(200, 145, 14);
    // draw the shape
    circle(shapeX, shapeY, 10);



    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if (shapeX > width) {
        shapeX = 0;
    }
    if (shapeX < 0) {
        shapeX = width;
    }
    if (shapeY > height) {
        shapeY = 0;
    }
    if (shapeY < 0) {
        shapeY = height;
    }

    // potential enemy
    fill(100, 50, 200);
    // draw the shape
    circle(shapeB, shapeC, 15);



    // get a random speed when the it first starts
    shapeBSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeCSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeB += shapeBSpeed;
    shapeC += shapeCSpeed;
    // check to see if the shape has gone out of bounds
    if (shapeB > width) {
        shapeB = 0;
    }
    if (shapeB < 0) {
        shapeB = width;
    }
    if (shapeC > height) {
        shapeC = 0;
    }
    if (shapeC < 0) {
        shapeC = height;
    }

    // check to see if the character has left the exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 70, height / 2 - 70);
    }

    // create the shape based on the mouse click
    fill(120, 130, 140);
    square(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }
}
function createCharacter(x, y) {
    characterX = x;
    characterY = y;
    console.log(characterX);
    //character

    // circle(characterX,characterY,25);
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}
function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 5;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 5;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 5;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 5;
    }
  }
  */