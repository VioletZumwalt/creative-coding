// JavaScript source code
var headX = 250;
var headY = 100;
var headDirection = 5;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 15;
var count = -1;
var sizeDirection = 5;


function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
}
function setup() {
    createCanvas(500, 500);
}
function draw() {
    background(120, 45, 78);
    textSize(22)
    text("Hello!", 30, 80);

    // head
    fill(255, 230, 251);
    circle(headX, headY, 175);
    headX += headDirection;
    if (headX >= 418 || headX <= 82) {
        headDirection *= -1;
    }
    headY += headDirection;
    if (headY >= 418 || headY <= 82) {
        headDirection *= -1;
    }

    // eyes
    strokeWeight(20);
    fill(0);
    point(200, 75);
    point(285, 75);

    // nose
    strokeWeight(10);
    point(245, 100);

    // mouth
    point(245, 135);
    point(230, 135);
    point(260, 135);

    // hair
    line(130, 175, 175, 50);
    line(130, 175, 200, 180);
    line(325, 50, 360, 175);
    line(285, 180, 360, 175);
    // decoration
    fill(255);
    triangle(160, 320, 250, 192, 320, 320)
    // right arm
    rotate(-50)
    fill(255, 230, 251);
    rect(330, bodyY, 100, 20);
    bodyY += bodyDirection;
    if (bodyY <= 0 || bodyY >= 450) {
        bodyDirection *= -1;
    }
    // left arm
    rotate(50)
    rotate(50)
    fill(255, 230, 251);
    rect(50, bodyY, 100, 20);
    bodyY += bodyDirection;
    if (bodyY <= 0 || bodyY >= 450) {
        bodyDirection *= -1;
    }

    // left leg
    rotate(-50)
    fill(255, 230, 251);
    rect(180, 335, 20, 100);
    // right leg
    fill(255, 230, 251);
    rect(290, 335, 20, 100);

    fill(120);
    textSize(size);
    size += sizeDirection;
    count++;
    if (count > 5) {
        sizeDirection *= -1;
        count = -20;
    }
    text("Violet Zumwalt", 270, 500);
}
