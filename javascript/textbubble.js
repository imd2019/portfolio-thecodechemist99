/* 
Draw a speechbubble and fit it to text.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

import Speechbubble from "./speechbubble.js";

export default class Textbubble extends Speechbubble {
  constructor(
    x,
    y,
    width,
    content,
    direction = "right",
    colour = color("#000000")
  ) {
    super(x, y, width, colour);
    this.content = content;
    this.height = 175;
    this.direction = direction;
    if (this.direction === "left") {
      this.x += this.width;
    }
  }

  draw() {
    this.height = this.calcTextBoxHeight();

    // draw text
    noStroke();
    fill(this.colour);
    textAlign(LEFT, TOP);
    if (this.direction === "left") {
      text(this.content, 45 - this.width, 50, this.width - 75);
      scale(-1, 1);
    } else {
      text(this.content, 45, 50, this.width - 75);
    }

    // draw shapes
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

  updateTextBox() {
    this.height = this.calcTextBoxHeight();
  }

  calcTextBoxHeight() {
    let length = this.content.length;
    let avgCharWidth = (textWidth(this.content) / length) * 1.2;
    let charPerLine = (this.width - 75) / avgCharWidth;

    return ceil(length / charPerLine) * window.fontLeading + 175;
  }
}
