/* 
Example file for speechbubble.js.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

import Sprite from "./speechbubble/sprite.js";
import Speechbubble from "./speechbubble/speechbubble.js";
import Textbubble from "./speechbubble/textbubble.js";

// init objects

let world = new Sprite(0, 0);
world.resize(width, height);

let bubble = new Speechbubble(200, 200, 400, 300, "left");
world.addChild(bubble);

let txtBubble = new Textbubble(
  800,
  200,
  400,
  "Hi, I'm Florian! I'm a really cool person! I like to be creative!",
  "left"
);
world.addChild(txtBubble);

// draw

function draw() {
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
