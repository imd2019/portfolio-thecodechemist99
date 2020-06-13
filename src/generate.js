/*
 * Build html page and draw content to the sketch canvas.
 * Distributed under the MIT license.
 * (c) 2020 Florian Beck
*/

import ScrollEventAgent from "./scrollEventAgent.js";
import ContentGenerator from "./contentGenerator.js";
import ViewController from "./viewController.js";
import Sprite from "./speechbubble/sprite.js";
import Textbubble from "./speechbubble/textbubble.js";

/* html generation */

// load JSON file
let url = "/src/content/content.json";
let content = loadJSON(url, generate);

// generate page
let generator = new ContentGenerator();
let lang = "en";

let bubbles = [];

function generate() {
  let c;
  switch (lang) {
    case "de":
      c = content.de;
      break;
    default:
      c = content.en;
      break;
  }

  generator.generateHTML("images",
  `<img id="portrait" src="/src/content/img/portrait_placeholder.jpg" alt="${c.portrait_alt}" /><img id="workplace" src="/src/content/img/workplace_placeholder.jpg" alt="${c.workplace_alt}" />`
  );

  let greetingBubble = new Textbubble(
    1200,
    200,
    400,
    c.greeting,
    "left",
    color("#ffffff")
  );
  views.addView("greeting", greetingBubble);
  bubbles.push(greetingBubble);
  
  let jobDescription = new Textbubble(
    1200,
    200,
    400,
    c.jobdescription,
    "left",
    color("#ffffff")
  );
  views.addView("jobDescription", jobDescription);
  bubbles.push(jobDescription);
  
  for(let i in c.selfdescription) {
    let bubble = new Textbubble(
      1200,
      200,
      400,
      c.selfdescription[i],
      "left",
      color("#ffffff")
    );
    views.addView("selfDesc_" + i, bubble);
    bubbles.push(bubble);
  }
  
  let mindInviteBubble = new Textbubble(
    1200,
    200,
    400,
    c.mindinvitation,
    "left",
    color("#ffffff")
  );
  views.addView("mindInvite", mindInviteBubble);
  bubbles.push(mindInviteBubble);
}

function updateLang (newLang) {
  lang = newLang;
  generate(content);
}

/* sketch */

let world = new Sprite(0, 0);
world.resize(windowHeight / 9 * 16, windowHeight);

let views = new ViewController();

function draw() {
  views.display();
}
window.draw = draw;

/* interactions */

// scroll events

let scrollAgent = new ScrollEventAgent();
window.addEventListener("wheel", (e) => {
  scrollAgent.scroll(e.deltaY);
});

scrollAgent.addEvent(function (scrollPos) {
  if (scrollPos < 0 || scrollPos > 10) return;
  
  

});

scrollAgent.addEvent(function (scrollPos) {
  if (scrollPos < 0 || scrollPos > 10) return;


  
});

scrollAgent.addEvent(function (scrollPos) {
  if (scrollPos < 0 || scrollPos > 10) return;


  
});

scrollAgent.addEvent(function (scrollPos) {
  if (scrollPos < 0 || scrollPos > 10) return;



});

scrollAgent.addEvent(function (scrollPos) {
  if (scrollPos < 0 || scrollPos > 10) return;


  
});

scrollAgent.addEvent(function (scrollPos) {
  if (scrollPos < 0 || scrollPos > 10) return;


  
});

// mouse events

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