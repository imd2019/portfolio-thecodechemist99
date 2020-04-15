/* setup file for p5.js */

function preload() {
  /* load JSON file */

  let url = "./javascript/content.json";
  content = loadJSON(url);
}

function setup() {
  /* load JSON file */

  let url = "./javascript/content.json";
  loadJSON(url, generateHTML);

  //   let screen = createCanvas(960, 680);
  //   screen.parent("screen");
  //   frameRate(30);
  // }

  // function resizeHandler() {
  //   resizeCanvas(960, 680);
  //   clear();
}

// window.addEventListener("resize", resizeHandler);

new p5();
// var width = 960;
// var height = 600;
