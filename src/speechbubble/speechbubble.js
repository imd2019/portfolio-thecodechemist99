/* 
Draw a speechbubble.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

import InteractiveObject from "./interactiveObject.js";

export default class Speechbubble extends InteractiveObject {
  constructor(
    x,
    y,
    width,
    height,
    direction = "right",
    colour = color("#000000")
  ) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.direction = direction;
    this.colour = colour;
    this.rotation = random(-0.1, 0.1);

    if (this.direction === "left") {
      this.x += this.width;
    }
  }

  draw() {
    if (this.direction === "left") {
      scale(-1, 1);
    }

    // draw shapes
    fill(this.colour);
    noStroke();
    beginShape();
    vertex(0, 10);
    vertex(this.width, 0);
    vertex(this.width - 10, this.height - 63);
    vertex(this.width - 60, this.height - 65);
    vertex(this.width - 50, this.height);
    vertex(this.width - 140, this.height - 65);
    vertex(15, this.height - 75);

    // inner part
    beginContour();
    vertex(30, this.height - 85);
    vertex(this.width - 130, this.height - 75);
    vertex(this.width - 60, this.height - 20);
    vertex(this.width - 80, this.height - 73);
    vertex(this.width - 20, this.height - 71);
    vertex(this.width - 20, 20);
    vertex(20, 30);
    endContour();
    endShape(CLOSE);
  }
}
