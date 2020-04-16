/* 
Draw a speechbubble and fit it to text.
(c)2020 Florian Beck
*/

/* class declaration */

class Speechbubble {
  constructor(getX, getY, getWidth, getDirection, getColour, content) {
    this.x = getX;
    this.y = getY;
    this.width = getWidth;
    this.direction = getDirection;
    this.colour = getColour;
    this.angle = random(-2, 2);
    this.content = content;
  }

  speechbubble(width, height) {
    // set position
    push();
    if (this.direction === "left") {
      scale(-1, 1);
      translate(-(this.x + width), this.y);
    } else {
      translate(this.x, this.y);
    }
    rotate(radians(this.angle));

    // draw shapes
    fill(this.colour);
    noStroke();
    beginShape();
    vertex(0, 10);
    vertex(width, 0);
    vertex(width - 10, height - 63);
    vertex(width - 60, height - 65);
    vertex(width - 50, height);
    vertex(width - 140, height - 65);
    vertex(15, height - 75);

    // inner part
    beginContour();
    vertex(30, height - 85);
    vertex(width - 130, height - 75);
    vertex(width - 60, height - 20);
    vertex(width - 80, height - 73);
    vertex(width - 20, height - 71);
    vertex(width - 20, 20);
    vertex(20, 30);
    endContour();
    endShape(CLOSE);

    pop();
  }

  textbubble() {
    push();
    // set text position
    translate(this.x, this.y);
    //rotate(radians(this.angle));

    // draw text
    noStroke();
    fill(this.colour);
    textAlign(LEFT, TOP);
    text(this.content, 45, 50, this.width - 75);
    pop();

    // draw speechbubble
    this.speechbubble(this.width, this.textBoxHeight());
  }

  textBoxHeight() {
    let length = this.content.length;
    let avgCharWidth = (textWidth(this.content) / length) * 1.2;
    let charPerLine = (this.width - 75) / avgCharWidth;

    return ceil(length / charPerLine) * fontLeading + 140;
  }
}

/* draw content */

let bubbles = [];

function draw() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].textbubble();
  }
}
