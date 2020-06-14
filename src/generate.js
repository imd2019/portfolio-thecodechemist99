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

  let portrait = document.getElementById("portrait");
  portrait.style.opacity = "1";

  let colour = color(255, 255, 255, 0);

  let greetingBubble = new Textbubble(
    1200,
    100,
    400,
    c.greeting,
    "left",
    colour
  );
  views.addView("greeting", greetingBubble);
  bubbles.push(greetingBubble);
  
  let jobDescription = new Textbubble(
    1200,
    200,
    400,
    c.jobdescription,
    "left",
    colour
  );
  views.addView("jobDescription", jobDescription);
  bubbles.push(jobDescription);
  
  let description = new Sprite(0, 0)
  description.resize(windowHeight / 9 * 16, windowHeight);

  let descBubble_1 = new Textbubble(
    400,
    200,
    600,
    c.selfdescription[0].replace("&hellip;", "..."),
    "left",
    colour
  );
  description.addChild(descBubble_1);
  bubbles.push(descBubble_1);

  let descBubble_2 = new Textbubble(
    400,
    200,
    600,
    c.selfdescription[1].replace("&hellip;", "..."),
    "left",
    colour
  );
  description.addChild(descBubble_2);
  bubbles.push(descBubble_2);

  let descBubble_3 = new Textbubble(
    400,
    200,
    600,
    c.selfdescription[2].replace("&hellip;", "..."),
    "left",
    colour
  );
  description.addChild(descBubble_3);
  bubbles.push(descBubble_3);

  let descBubble_4 = new Textbubble(
    400,
    200,
    600,
    c.selfdescription[3].replace("&hellip;", "..."),
    "left",
    colour
  );
  description.addChild(descBubble_4);
  bubbles.push(descBubble_4);

  let descBubble_5 = new Textbubble(
    400,
    200,
    600,
    c.selfdescription[4].replace("&hellip;", "..."),
    "left",
    colour
  );
  description.addChild(descBubble_5);
  bubbles.push(descBubble_5);

  views.addView("description", description);
  
  let mindInviteBubble = new Textbubble(
    1200,
    200,
    400,
    c.mindinvitation,
    "left",
    colour
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
  clear();
  views.display();
}
window.draw = draw;

/* interactions */

// scroll events

let scrollAgent = new ScrollEventAgent(30);
window.addEventListener("wheel", (e) => {
  scrollAgent.scroll(e.deltaY);
});

let greetingAlpha = 0;

scrollAgent.addEvent(1, 0.8, function (delta) {
  // fade and move greeting bubble in/out
  if (delta > 0) {
    greetingAlpha += 10;
  } else {
    greetingAlpha -= 10;
  }
  bubbles[0].colour.setAlpha(greetingAlpha)
  bubbles[0].y += (delta / abs(delta));
  
});

scrollAgent.addEvent(20, 1.7, function (delta) {
  // greeting bubble fade out
  if (delta > 0) {
    greetingAlpha -= 5;
    bubbles[0].colour.setAlpha(greetingAlpha)
    bubbles[0].y += -2 * (delta / abs(delta));
  }
});

scrollAgent.addEvent(20, 1.7, function (delta) {
  // greeting bubble fade in (revert)
  if (delta < 0) {
    greetingAlpha += 5;
    bubbles[0].colour.setAlpha(greetingAlpha)
    bubbles[0].y += -2 * (delta / abs(delta));
  }
}, 1);

scrollAgent.addEvent(20, 2.7, function (delta) {
  // transition between portrait image and workplace image
  let portrait = document.getElementById("portrait");
  let opacity = Number(portrait.style.opacity);

  if (delta > 0) {
    portrait.style.opacity = String(opacity - 0.0125);
  } else {
    portrait.style.opacity = String(opacity + 0.0125);
  }
    
});

scrollAgent.addEvent(50, 1/30, function (delta) {
  // transformation of workplace image
  let img = document.getElementById("workplace");

  if (delta > 0) {
    img.classList.add("transform")
    views.selectView("description")
  } else {
    img.classList.remove("transform");
    views.selectView("greeting")
  }
    
});

let bubbleAlpha = 0;

scrollAgent.addEvent(60, 0.8, function (delta) {
  // fade and move bubble in/out
  if (delta > 0) {
    bubbleAlpha += 10;
  } else {
    bubbleAlpha -= 10;
  }
  bubbles[1].colour.setAlpha(bubbleAlpha)
  bubbles[1].y += (delta / abs(delta));

  console.log(bubbles[1]);
  
});

scrollAgent.addEvent(70, 0.8, function (delta) {
  // fade and move bubble out/in
  if (delta > 0) {
    bubbleAlpha -= 10;
  } else {
    bubbleAlpha += 10;
  }
  bubbles[1].colour.setAlpha(bubbleAlpha)
  bubbles[1].y += -(delta / abs(delta));
  
});

scrollAgent.addEvent(80, 0.8, function (delta) {
  // fade and move bubble in/out
  if (delta > 0) {
    bubbleAlpha += 10;
  } else {
    bubbleAlpha -= 10;
  }
  bubbles[2].colour.setAlpha(bubbleAlpha)
  bubbles[2].y += (delta / abs(delta));
  
});

scrollAgent.addEvent(90, 0.8, function (delta) {
  // fade and move bubble out/in
  if (delta > 0) {
    bubbleAlpha -= 10;
  } else {
    bubbleAlpha += 10;
  }
  bubbles[2].colour.setAlpha(bubbleAlpha)
  bubbles[2].y += -(delta / abs(delta));
  
});

scrollAgent.addEvent(100, 0.8, function (delta) {
  // fade and move bubble in/out
  if (delta > 0) {
    bubbleAlpha += 10;
  } else {
    bubbleAlpha -= 10;
  }
  bubbles[3].colour.setAlpha(bubbleAlpha)
  bubbles[3].y += (delta / abs(delta));
  
});

scrollAgent.addEvent(110, 0.8, function (delta) {
  // fade and move bubble out/in
  if (delta > 0) {
    bubbleAlpha -= 10;
  } else {
    bubbleAlpha += 10;
  }
  bubbles[3].colour.setAlpha(bubbleAlpha)
  bubbles[3].y += -(delta / abs(delta));
  
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