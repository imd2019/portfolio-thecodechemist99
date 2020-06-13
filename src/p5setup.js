/* 
p5 setup.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

let sketch = new p5();

function setup() {
  let sketchCanvas = sketch.createCanvas(windowHeight / 9 * 16, windowHeight);
  sketchCanvas.class("speechbubble");
  sketchCanvas.parent(document.getElementById("sketch"));
  frameRate(30);

  // set text properties according to css
  window.font = sketchCanvas.style("font-family");
  window.fontSize = Number(sketchCanvas.style("font-size").replace("px", ""));
  window.fontLeading = Number(sketchCanvas.style("line-height").replace("px", ""));

  textFont(window.font);
  textSize(window.fontSize);
  textLeading(window.fontLeading);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowHeight / 9 * 16, windowHeight);
  clear();
}
window.addEventListener("resize", windowResized);