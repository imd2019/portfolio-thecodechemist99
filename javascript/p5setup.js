/* setup for p5.js */

let sketch = new p5();

function setup() {
  let myCanvas = sketch.createCanvas(windowWidth, windowHeight);
  myCanvas.class("speechbubble");
  frameRate(30);

  // set text properties according to css
  window.font = myCanvas.style("font-family");
  window.fontSize = Number(myCanvas.style("font-size").replace("px", ""));
  window.fontLeading = Number(myCanvas.style("line-height").replace("px", ""));

  textFont(window.font);
  textSize(window.fontSize);
  textLeading(window.fontLeading);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
  clear();
}
window.addEventListener("resize", windowResized);