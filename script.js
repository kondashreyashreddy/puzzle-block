// Create your variables here
var screen = 1;
var blockno = 0;
var visiblescore = 0;
//Block 1
var r1a = 180;
var r1b = 0;
var r1c = 90;
var r1d = 270;
//Block 2
var r2a = 90;
var r2b = 270;
var r2c = 180;
var r2d = 270;
//Block 3
var r3a = 90;
var r3b = 180;
var r3c = 270;
var r3d = 0;
//Block 4
var r4a = 180;
var r4b = 270;
var r4c = 0;
var r4d = 90;
//Block 5
var r5a = 180;
var r5b = 270;
var r5c = 0;
var r5d = 90;
var r5e = 180;
var r5f = 270;
var r5g = 0;
var r5h = 90;
var r5i = 180;
var r5j = 270;
var r5k = 0;
var r5l = 90;
var r5m = 180;
var r5n = 270;
var r5o = 0;
var r5p = 90;
//Gallery
var counter = 0;

// Create your sprites here
var button = createSprite(200, 300);
button.setAnimation("button");
button.scale = 2;
var backbutton = createSprite(2000, 300);
backbutton.setAnimation("screen2back");
var block1 = createSprite(2000, 300);
block1.setAnimation("block1");
var block2 = createSprite(2000, 300);
block2.setAnimation("block2");
var block3 = createSprite(2000, 300);
block3.setAnimation("block3");
var block4 = createSprite(2000, 300);
block4.setAnimation("block4");
var block5 = createSprite(2000, 300);
block5.setAnimation("block5");
var gallery = createSprite(2000, 300);
gallery.setAnimation("gallery");
//Block 1
var a1 = createSprite(2000, 300);
a1.setAnimation("1a");
var b1 = createSprite(2000, 300);
b1.setAnimation("1b");
var c1 = createSprite(2000, 300);
c1.setAnimation("1c");
var d1 = createSprite(2000, 300);
d1.setAnimation("1d");
var final1 = createSprite(2000, 300);
final1.setAnimation("final1");
//Block2
var a2 = createSprite(2000, 300);
a2.setAnimation("2a");
var b2 = createSprite(2000, 300);
b2.setAnimation("2b");
var c2 = createSprite(2000, 300);
c2.setAnimation("2c");
var d2 = createSprite(2000, 300);
d2.setAnimation("2d");
var final2 = createSprite(2000, 300);
final2.setAnimation("final2");
//Block3
var a3 = createSprite(2000, 300);
a3.setAnimation("3a");
var b3 = createSprite(2000, 300);
b3.setAnimation("3b");
var c3 = createSprite(2000, 300);
c3.setAnimation("3c");
var d3 = createSprite(2000, 300);
d3.setAnimation("3d");
var final3 = createSprite(2000, 300);
final3.setAnimation("final3");
//Block4
var a4 = createSprite(2000, 300);
a4.setAnimation("4a");
var b4 = createSprite(2000, 300);
b4.setAnimation("4b");
var c4 = createSprite(2000, 300);
c4.setAnimation("4c");
var d4 = createSprite(2000, 300);
d4.setAnimation("4d");
var final4 = createSprite(2000, 300);
final4.setAnimation("final4");
//Block5
var a5 = createSprite(2000, 300);
a5.setAnimation("5a");
var b5 = createSprite(2000, 300);
b5.setAnimation("5b");
var c5 = createSprite(2000, 300);
c5.setAnimation("5c");
var d5 = createSprite(2000, 300);
d5.setAnimation("5d");
var e5 = createSprite(2000, 300);
e5.setAnimation("5e");
var f5 = createSprite(2000, 300);
f5.setAnimation("5f");
var g5 = createSprite(2000, 300);
g5.setAnimation("5g");
var h5 = createSprite(2000, 300);
h5.setAnimation("5h");
var i5 = createSprite(2000, 300);
i5.setAnimation("5i");
var j5 = createSprite(2000, 300);
j5.setAnimation("5j");
var k5 = createSprite(2000, 300);
k5.setAnimation("5k");
var l5 = createSprite(2000, 300);
l5.setAnimation("5l");
var m5 = createSprite(2000, 300);
m5.setAnimation("5m");
var n5 = createSprite(2000, 300);
n5.setAnimation("5n");
var o5 = createSprite(2000, 300);
o5.setAnimation("5o");
var p5 = createSprite(2000, 300);
p5.setAnimation("5p");
var final5 = createSprite(2000, 300);
final5.setAnimation("final5");
//Gallery
var ship = createSprite(50, 50);
ship.setAnimation("ship");
ship.rotation = 90;
ship.scale = 0.25;
ship.alpha = 0;
var final1i = createSprite(400, 200);
final1i.setAnimation("final1i");
final1i.alpha = 0;
var final2i = createSprite(600, 200);
final2i.setAnimation("final2i");
final2i.alpha = 0;
var final3i = createSprite(800, 200);
final3i.setAnimation("final3i");
final3i.alpha = 0;
var final4i = createSprite(1000, 200);
final4i.setAnimation("final4i");
final4i.alpha = 0;
var final5i = createSprite(1200, 200);
final5i.setAnimation("finl5i");
final5i.alpha = 0;
var init = createSprite(1200, 200);
init.setAnimation("initialize");
init.alpha = 0;
var stop = createSprite(1200, 200);
stop.setAnimation("stop");
stop.alpha = 0;
function draw() {
  // draw background
  screen1();
  if (screen == 2) {
    screen2();
  } else if ((screen == 3)) {
    screen3();
  } else if ((screen == 4)) {
    screen4();
  } else if ((screen == 5)) {
    screen5();
  } else if ((screen == 6)) {
    screen6();
  } else if ((screen == 7)) {
    screen7();
  } else if ((screen == 8)) {
    screen8();
  }

  // update sprites

  drawSprites();
}

// Create your functions here
function screen1() {
  background1();
  if (mousePressedOver(button)) {
    screen = 2;
    button.x = 676;
  }
}
function background1() {
  background("white");
  textFont("Arial");
  textSize(60);
  text("Puzzle Block", 25, 181);
}
// 
// 
//Block Selection
function screen2() {
  background2();
  if (mousePressedOver(block1)) {
    screen = 3;
    blockno = 1;
    block1.x = 676;
    block2.x = 676;
    block3.x = 676;
    block4.x = 676;
    block5.x = 676;
    gallery.x = 676;
  }
  if (mousePressedOver(block2)) {
    screen = 4;
    blockno = 2;
    block1.x = 676;
    block2.x = 676;
    block3.x = 676;
    block4.x = 676;
    block5.x = 676;
    gallery.x = 676;
  }
  if (mousePressedOver(block3)) {
    screen = 5;
    blockno = 3;
    block1.x = 676;
    block2.x = 676;
    block3.x = 676;
    block4.x = 676;
    block5.x = 676;
    gallery.x = 676;
  }
  if (mousePressedOver(block4)) {
    screen = 6;
    blockno = 4;
    block1.x = 676;
    block2.x = 676;
    block3.x = 676;
    block4.x = 676;
    block5.x = 676;
    gallery.x = 676;
  }
  if (mousePressedOver(block5)) {
    screen = 7;
    blockno = 5;
    block1.x = 676;
    block2.x = 676;
    block3.x = 676;
    block4.x = 676;
    block5.x = 676;
    gallery.x = 676;
  }
  if (mousePressedOver(gallery)) {
    screen = 8;
    blockno = 6;
    block1.x = 676;
    block2.x = 676;
    block3.x = 676;
    block4.x = 676;
    block5.x = 676;
    gallery.x = 676;
  }
}
function background2() {
  background("white");
  displayedtext();
  block1.x = 75;
  block1.y = 50;
  block2.x = 300;
  block2.y = 50;
  block3.x = 75;
  block3.y = 125;
  block4.x = 300;
  block4.y = 125;
  block5.x = 75;
  block5.y = 200;
  if (visiblescore == 5) {
    gallery.x = 200;
    gallery.y = 300;
  }
}
// 
// 
//Block 1
function screen3() {
  background3();
  //rotation
  if (mousePressedOver(a1)) {
    r1a = a1.rotation + 90;
    a1.rotation = r1a;
  }
  if (r1a == 360) {
    r1a = 0;
  }
  // 
  if (mousePressedOver(b1)) {
    r1b = b1.rotation + 90;
    b1.rotation = r1b;
  }
  if (r1b == 360) {
    r1b = 0;
  }
  // 
  if (mousePressedOver(c1)) {
    r1c = c1.rotation + 90;
    c1.rotation = r1c;
  }
  if (r1c == 360) {
    r1c = 0;
  }
  // 
  if (mousePressedOver(d1)) {
    r1d = d1.rotation + 90;
    d1.rotation = r1d;
  }
  if (r1d == 360) {
    r1d = 0;
  }
  //winning function
  if (r1a == 0 && (r1b == 0 && (r1c == 0 && r1d == 0))) {
    a1.x = 1500;
    a1.y = 1500;
    b1.x = 1500;
    b1.y = 1500;
    c1.x = 1500;
    c1.y = 1500;
    d1.x = 1500;
    d1.y = 1500;
    background("white");
    displayedtext();
    textSize(12);
    text("Good Job! You completed Block 1!", 98, 91);
    backbutton.x = 350;
    backbutton.y = 350;
    final1.x = 200;
    final1.y = 200;
    final1.scale = 2;
    visiblescore = 1;
  }
  //screen change
  if (mousePressedOver(backbutton)) {
    final1.x = 2000;
    final1.y = 2000;
    screen = 2;
    blockno = 0;
    backbutton.x = 1000;
    backbutton.y = 1000;
  }
}
function background3() {
  background("white");
  displayedtext();
  //directions
  textSize(30);
  text("Click an object to rotate it", 45, 67);
  //location
  a1.x = 150;
  a1.y = 150;
  b1.x = 250;
  b1.y = 150;
  c1.x = 150;
  c1.y = 250;
  d1.x = 250;
  d1.y = 250;
  //rotation
  a1.rotation = r1a;
  b1.rotation = r1b;
  c1.rotation = r1c;
  d1.rotation = r1d;
}
// 
// 
//Block 2
function screen4() {
  background4();
  //rotation function
  if (mousePressedOver(a2)) {
    r2a = a2.rotation + 90;
    a2.rotation = r2a;
  }
  if (r2a == 360) {
    r2a = 0;
  }
  // 
  if (mousePressedOver(b2)) {
    r2b = b2.rotation + 90;
    b2.rotation = r1b;
  }
  if (r2b == 360) {
    r2b = 0;
  }
  // 
  if (mousePressedOver(c2)) {
    r2c = c2.rotation + 90;
    c2.rotation = r2c;
  }
  if (r2c == 360) {
    r2c = 0;
  }
  // 
  if (mousePressedOver(d2)) {
    r2d = d2.rotation + 90;
    d2.rotation = r2d;
  }
  if (r2d == 360) {
    r2d = 0;
  }
  //winning
  if (r2a == 0 && (r2b == 0 && (r2c == 0 && r2d == 0))) {
    a2.x = 1500;
    a2.y = 1500;
    b2.x = 1500;
    b2.y = 1500;
    c2.x = 1500;
    c2.y = 1500;
    d2.x = 1500;
    d2.y = 1500;
    background("white");
    displayedtext();
    textSize(12);
    text("Good Job! You completed Block 2!", 98, 91);
    backbutton.x = 350;
    backbutton.y = 350;
    final2.x = 200;
    final2.y = 200;
    final2.scale = 2;
    visiblescore = 2;
  }
  //screen change
  if (mousePressedOver(backbutton)) {
    final2.x = 2000;
    final2.y = 2000;
    screen = 2;
    blockno = 0;
    backbutton.x = 1000;
    backbutton.y = 1000;
  }
}
function background4() {
  background("white");
  displayedtext();
  //directions
  textSize(30);
  text("Click an object to rotate it", 45, 67);
  //location
  a2.x = 150;
  a2.y = 150;
  b2.x = 250;
  b2.y = 150;
  c2.x = 150;
  c2.y = 250;
  d2.x = 250;
  d2.y = 250;
  //rotation
  a2.rotation = r2a;
  b2.rotation = r2b;
  c2.rotation = r2c;
  d2.rotation = r2d;
}
// 
// 
//Block 3
function screen5() {
  background5();
  //rotation
  if (mousePressedOver(a3)) {
    r3a = a3.rotation + 90;
    a3.rotation = r3a;
  }
  if (r3a == 360) {
    r3a = 0;
  }
  // 
  if (mousePressedOver(b3)) {
    r3b = b3.rotation + 90;
    b3.rotation = r1b;
  }
  if (r3b == 360) {
    r3b = 0;
  }
  // 
  if (mousePressedOver(c3)) {
    r3c = c3.rotation + 90;
    c3.rotation = r2c;
  }
  if (r3c == 360) {
    r3c = 0;
  }
  // 
  if (mousePressedOver(d3)) {
    r3d = d3.rotation + 90;
    d3.rotation = r1d;
  }
  if (r3d == 360) {
    r3d = 0;
  }
  //winning function 
  if (r3a == 0 && (r3b == 0 && (r3c == 0 && r3d == 0))) {
    a3.x = 1500;
    a3.y = 1500;
    b3.x = 1500;
    b3.y = 1500;
    c3.x = 1500;
    c3.y = 1500;
    d3.x = 1500;
    d3.y = 1500;
    background("white");
    displayedtext();
    textSize(12);
    text("Good Job! You completed Block 3!", 98, 91);
    backbutton.x = 350;
    backbutton.y = 350;
    final3.x = 200;
    final3.y = 200;
    final3.scale = 2;
    visiblescore = 3;
  }
  //screen change 
  if (mousePressedOver(backbutton)) {
    final3.x = 2000;
    final3.y = 2000;
    screen = 2;
    blockno = 0;
    backbutton.x = 1000;
    backbutton.y = 1000;
  }
}
function background5() {
  background("white");
  displayedtext();
  //directions
  textSize(30);
  text("Click an object to rotate it", 45, 67);
  //location
  a3.x = 150;
  a3.y = 150;
  b3.x = 250;
  b3.y = 150;
  c3.x = 150;
  c3.y = 250;
  d3.x = 250;
  d3.y = 250;
  //rotation
  a3.rotation = r3a;
  b3.rotation = r3b;
  c3.rotation = r3c;
  d3.rotation = r3d;
}
// 
// 
//Block 4
function screen6() {
  background6();
  //rotation functions
  if (mousePressedOver(a4)) {
    r4a = a4.rotation + 90;
    a4.rotation = r4a;
  }
  if (r4a == 360) {
    r4a = 0;
  }
  // 
  if (mousePressedOver(b4)) {
    r4b = b4.rotation + 90;
    b4.rotation = r4b;
  }
  if (r4b == 360) {
    r4b = 0;
  }
  // 
  if (mousePressedOver(c4)) {
    r4c = c4.rotation + 90;
    c4.rotation = r4c;
  }
  if (r4c == 360) {
    r4c = 0;
  }
  // 
  if (mousePressedOver(d4)) {
    r4d = d4.rotation + 90;
    d4.rotation = r4d;
  }
  if (r4d == 360) {
    r4d = 0;
  }
  //winning function
  if (r4a == 0 && (r4b == 0 && (r4c == 0 && r4d == 0))) {
    a4.x = 1500;
    a4.y = 1500;
    b4.x = 1500;
    b4.y = 1500;
    c4.x = 1500;
    c4.y = 1500;
    d4.x = 1500;
    d4.y = 1500;
    background("white");
    displayedtext();
    textSize(12);
    text("Good Job! You completed Block 4!", 98, 91);
    backbutton.x = 350;
    backbutton.y = 350;
    final4.x = 200;
    final4.y = 200;
    final4.scale = 2;
    visiblescore = 4;
  }
  //screen change
  if (mousePressedOver(backbutton)) {
    final4.x = 2000;
    final4.y = 2000;
    screen = 2;
    blockno = 0;
    backbutton.x = 1000;
    backbutton.y = 1000;
  }
}
function background6() {
  background("white");
  displayedtext();
  textSize(30);
  //directions
  text("Click an object to rotate it", 45, 67);
  //location
  a4.x = 150;
  a4.y = 150;
  b4.x = 250;
  b4.y = 150;
  c4.x = 150;
  c4.y = 250;
  d4.x = 250;
  d4.y = 250;
  //rotation
  a4.rotation = r4a;
  b4.rotation = r4b;
  c4.rotation = r4c;
  d4.rotation = r4d;
}
// 
// 
//Block 5
function screen7() {
  background7();
  //rotation functions 
  if (mousePressedOver(a5)) {
    r5a = a5.rotation + 90;
    a5.rotation = r5a;
  }
  if (r5a == 360) {
    r5a = 0;
  }
  // 
  if (mousePressedOver(b5)) {
    r5b = b5.rotation + 90;
    b5.rotation = r5b;
  }
  if (r5b == 360) {
    r5b = 0;
  }
  // 
  if (mousePressedOver(c5)) {
    r5c = c5.rotation + 90;
    c5.rotation = r5c;
  }
  if (r5c == 360) {
    r5c = 0;
  }
  // 
  if (mousePressedOver(d5)) {
    r5d = d5.rotation + 90;
    d5.rotation = r5d;
  }
  if (r5d == 360) {
    r5d = 0;
  }
  // 
  if (mousePressedOver(e5)) {
    r5e = e5.rotation + 90;
    e5.rotation = r5e;
  }
  if (r5e == 360) {
    r5e = 0;
  }
  // 
  if (mousePressedOver(f5)) {
    r5f = f5.rotation + 90;
    f5.rotation = r5f;
  }
  if (r5f == 360) {
    r5f = 0;
  }
  // 
  if (mousePressedOver(g5)) {
    r5g = g5.rotation + 90;
    g5.rotation = r5g;
  }
  if (r5g == 360) {
    r5g = 0;
  }
  // 
  if (mousePressedOver(h5)) {
    r5h = h5.rotation + 90;
    h5.rotation = r5h;
  }
  if (r5h == 360) {
    r5h = 0;
  }
  // 
  if (mousePressedOver(i5)) {
    r5i = i5.rotation + 90;
    i5.rotation = r5i;
  }
  if (r5i == 360) {
    r5i = 0;
  }
  // 
  if (mousePressedOver(j5)) {
    r5j = j5.rotation + 90;
    j5.rotation = r5j;
  }
  if (r5j == 360) {
    r5j = 0;
  }
  // 
  if (mousePressedOver(k5)) {
    r5k = k5.rotation + 90;
    k5.rotation = r5k;
  }
  if (r5k == 360) {
    r5k = 0;
  }
  // 
  if (mousePressedOver(l5)) {
    r5l = l5.rotation + 90;
    l5.rotation = r5l;
  }
  if (r5l == 360) {
    r5l = 0;
  }
  // 
  if (mousePressedOver(m5)) {
    r5m = m5.rotation + 90;
    m5.rotation = r5m;
  }
  if (r5m == 360) {
    r5m = 0;
  }
  // 
  if (mousePressedOver(n5)) {
    r5n = n5.rotation + 90;
    n5.rotation = r5n;
  }
  if (r5n == 360) {
    r5n = 0;
  }
  // 
  if (mousePressedOver(o5)) {
    r5o = o5.rotation + 90;
    o5.rotation = r5o;
  }
  if (r5o == 360) {
    r5o = 0;
  }
  // 
  if (mousePressedOver(p5)) {
    r5p = p5.rotation + 90;
    p5.rotation = r5p;
  }
  if (r5p == 360) {
    r5p = 0;
  }
  //winning function
  if (r5a == 0 && (r5b == 0 && (r5c == 0 && (r5d == 0 && (r5e == 0 && (r5f == 0 && (r5g == 0 && (r5h == 0 && (r5i == 0 && (r5j == 0 && (r5k == 0 && (r5l == 0 && (r5m == 0 && (r5n == 0 && (r5o == 0 && r5p == 0))))))))))))))) {
    a5.x = 1500;
    a5.y = 1500;
    b5.x = 1500;
    b5.y = 1500;
    c5.x = 1500;
    c5.y = 1500;
    d5.x = 1500;
    d5.y = 1500;
    e5.x = 1500;
    e5.y = 1500;
    f5.x = 1500;
    f5.y = 1500;
    g5.x = 1500;
    g5.y = 1500;
    h5.x = 1500;
    h5.y = 1500;
    i5.x = 1500;
    i5.y = 1500;
    j5.x = 1500;
    j5.y = 1500;
    k5.x = 1500;
    k5.y = 1500;
    l5.x = 1500;
    l5.y = 1500;
    m5.x = 1500;
    m5.y = 1500;
    n5.x = 1500;
    n5.y = 1500;
    o5.x = 1500;
    o5.y = 1500;
    p5.x = 1500;
    p5.y = 1500;
    background("white");
    displayedtext();
    textSize(12);
    text("Good Job! You completed Block 5!", 98, 91);
    backbutton.x = 350;
    backbutton.y = 350;
    final5.x = 200;
    final5.y = 200;
    final5.scale = 2;
    visiblescore = 5;
  }
  //screen change
  if (mousePressedOver(backbutton)) {
    final5.x = 2000;
    final5.y = 2000;
    screen = 2;
    blockno = 0;
    backbutton.x = 1000;
    backbutton.y = 1000;
  }
}
function background7() {
  background("white");
  displayedtext();
  //directions
  textSize(30);
  text("Click an object to rotate it", 45, 67);
  //scale
  a5.scale = 0.5;
  b5.scale = 0.5;
  c5.scale = 0.5;
  d5.scale = 0.5;
  //location
  a5.x = 125;
  a5.y = 125;
  b5.x = 175;
  b5.y = 125;
  c5.x = 225;
  c5.y = 125;
  d5.x = 275;
  d5.y = 125;
  //rotation
  a5.rotation = r5a;
  b5.rotation = r5b;
  c5.rotation = r5c;
  d5.rotation = r5d;
  //scale
  e5.scale = 0.5;
  f5.scale = 0.5;
  g5.scale = 0.5;
  h5.scale = 0.5;
  //location
  e5.x = 125;
  e5.y = 175;
  f5.x = 175;
  f5.y = 175;
  g5.x = 225;
  g5.y = 175;
  h5.x = 275;
  h5.y = 175;
  //rotation
  e5.rotation = r5e;
  f5.rotation = r5f;
  g5.rotation = r5g;
  h5.rotation = r5h;
  //scale
  i5.scale = 0.5;
  j5.scale = 0.5;
  k5.scale = 0.5;
  l5.scale = 0.5;
  //location
  i5.x = 125;
  i5.y = 225;
  j5.x = 175;
  j5.y = 225;
  k5.x = 225;
  k5.y = 225;
  l5.x = 275;
  l5.y = 225;
  //rotation
  i5.rotation = r5i;
  j5.rotation = r5j;
  k5.rotation = r5k;
  l5.rotation = r5l;
  //scale
  m5.scale = 0.5;
  n5.scale = 0.5;
  o5.scale = 0.5;
  p5.scale = 0.5;
  //location
  m5.x = 125;
  m5.y = 275;
  n5.x = 175;
  n5.y = 275;
  o5.x = 225;
  o5.y = 275;
  p5.x = 275;
  p5.y = 275;
  //rotation
  m5.rotation = r5m;
  n5.rotation = r5n;
  o5.rotation = r5o;
  p5.rotation = r5p;
}
// 
// 
//Gallery
function screen8() {
  background8();
  //movement statements
  if (mousePressedOver(init)) {
    final1i.velocityX = counter - 1;
    final2i.velocityX = counter - 1;
    final3i.velocityX = counter - 1;
    final4i.velocityX = counter - 1;
    final5i.velocityX = counter - 1;
    counter = final1i.velocityX;
  }
  if (mousePressedOver(stop)) {
    final1i.velocityX = counter + 1;
    final2i.velocityX = counter + 1;
    final3i.velocityX = counter + 1;
    final4i.velocityX = counter + 1;
    final5i.velocityX = counter + 1;
    counter = final1i.velocityX;
  }
  //return to screen statements
  if ((final1i.x) <= -400) {
    final1i.x = 600;
  }
  if ((final2i.x) <= -400) {
    final2i.x = 600;
  }
  if ((final3i.x) <= -400) {
    final3i.x = 600;
  }
  if ((final4i.x) <= -400) {
    final4i.x = 600;
  }
  if ((final5i.x) <= -400) {
    final5i.x = 600;
  }
  if (final1i.x >= 1300) {
    final1i.x = -300;
  }
  if (final2i.x >= 1300) {
    final2i.x = -300;
  }
  if (final3i.x >= 1300) {
    final3i.x = -300;
  }
  if (final4i.x >= 1300) {
    final4i.x = -300;
  }
  if (final5i.x >= 1300) {
    final5i.x = -300;
  }
  if (mousePressedOver(gallery)) {
    screen = 2;
    //new locations
    gallery.x = 5000;
    gallery.y = 5000;
    ship.x = 5000;
    ship.y = 5000;
    final1i.x = 5000;
    final1i.y = 5000;
    final2i.x = 5000;
    final2i.y = 5000;
    final3i.x = 5000;
    final3i.y = 5000;
    final4i.x = 5000;
    final4i.y = 5000;
    final5i.x = 5000;
    final5i.y = 5000;
    init.x = 5000;
    stop.x = 5000;
  }
}
function background8() {
  //displayed text
  background("black");
  textSize(24);
  text("Click the gallery button to return", 0, 385);
  textSize(12);
  text("Click init to start gallery + increase speed; click stop to decrease speed", 0, 365);
  text("notice: there may be a warp in reality if you go fast", 0, 350);
  textSize(12);
  text("You have finished the game!", 2, 15);
  text("Final Score:", 220, 15);
  text(visiblescore, 290, 15);
  //location
  gallery.x = 200;
  gallery.y = 50;
  init.x = 300;
  init.y = 300;
  stop.x = 100;
  stop.y = 300;
  //visibility
  ship.alpha = 1;
  final1i.alpha = 1;
  final2i.alpha = 1;
  final3i.alpha = 1;
  final4i.alpha = 1;
  final5i.alpha = 1;
  init.alpha = 1;
  stop.alpha = 1;
}
// 
// 
//Main Displayed Text
function displayedtext() {
  textSize(60);
  text("Block", 0, 390);
  text(blockno, 153, 390);
  textSize(12);
  text("Score:", 0, 20);
  text(visiblescore, 39, 20);
}
