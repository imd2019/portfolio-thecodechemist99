/* 
Page generation.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

/* setup for p5.js */

let sketch = new p5();
let width = windowWidth;
let height = windowHeight;
let content;

function preload() {
  /* load JSON file */
  let url = "./javascript/content.json";
  content = loadJSON(url);
}

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







import ContentGenerator from "./contentGenerator.js";

console.log(window.loadedContent);

let generateImages = new ContentGenerator(
  content,
  "images",
  `
  <img id="portrait" src="/content/images/portrait_placeholder.jpg" alt="${content.portrait_alt}" />
  <img id="workplace" src="/content/images/workplace_placeholder.jpg" alt="${content.workplace_alt}" />
  `
);

generateImages.generateHTML();