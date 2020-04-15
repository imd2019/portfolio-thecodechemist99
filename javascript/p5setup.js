/* setup for p5.js */

let fontSize;
let fontLeading;

function preload() {
  /* load JSON file */

  let url = "./javascript/content.json";
  content = loadJSON(url);
}

function setup() {
  /* load JSON file */

  let url = "./javascript/content.json";
  loadJSON(url, generateHTML);

  /* p5 Canvas */
  let myCanvas = createCanvas(windowWidth, windowHeight);
  frameRate(30);

  // set text properties according to css
  myCanvas.class("speechbubble");
  font = myCanvas.style("font-family");
  fontSize = Number(myCanvas.style("font-size").replace("px", ""));
  fontLeading = Number(myCanvas.style("line-height").replace("px", ""));

  textFont(font);
  textSize(fontSize);
  textLeading(fontLeading);
}

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
