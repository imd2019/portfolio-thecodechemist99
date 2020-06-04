/* 
Draw content to the sketch canvas.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

import Sprite from "./speechbubble/sprite.js";
import Textbubble from "./speechbubble/textbubble.js";

// init objects

let world = new Sprite(0, 0);
world.resize(windowHeight / 9 * 16, windowHeight);

let greetingBubble = new Textbubble(
  1200,
  200,
  400,
  "Hi, I'm Florian!",
  "left",
  color("#ffffff")
);
world.addChild(greetingBubble);

// draw

function draw() {
  fill("white");
  world.display();
}
window.draw = draw;

// interactions

function mousePressed() {
  world.mousePressed();
}
window.mousePressed = mousePressed;

function mouseClicked() {
  world.mouseClicked();
}
window.mouseClicked = mouseClicked;

function mouseReleased() {
  world.mouseReleased();
}
window.mouseReleased = mouseReleased;
