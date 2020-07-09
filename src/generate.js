/*
 * Build html page and draw content to the sketch canvas.
 * Distributed under the MIT license.
 * (c) 2020 Florian Beck
*/

import ScrollEventAgent from "./scrollEventAgent.js";
import AnimationProcessor from "./animationProcessor.js";
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
let images = [];
let portrait, workplace;

function generate() {
  // html
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

  // images
  portrait = {
    img: document.getElementById("portrait"),
    opacity: 1
  };
  images.push(portrait);

  workplace = {
    img: document.getElementById("workplace"),
    opacity: 0
  }
  images.push(workplace);

  // images animations
  animate.addAnimation("fadePortrait", portrait, "opacity", 1, 0, 2.7);

  // speech bubbles
  let greetingBubble = new Textbubble(
    windowWidth / 2,
    200,
    400,
    c.greeting,
    "left",
    color(255, 255, 255, 0)
  );
  views.addView("greeting", greetingBubble);
  bubbles.push(greetingBubble);
  
  let jobDescription = new Textbubble(
    (windowWidth / 2) - 600,
    (windowHeight / 2) - 200,
    400,
    c.jobdescription,
    "left",
    color(255, 255, 255, 0)
  );
  views.addView("jobDescription", jobDescription);
  bubbles.push(jobDescription);

  // let selfDesc = new Sprite(0, 0);
  // selfDesc.resize(windowHeight / 9 * 16, windowHeight);
  // views.addView("selfDesc", selfDesc);

  let descBubble_1 = new Textbubble(
    800,
    300,
    600,
    c.selfdescription[0].replace("&hellip;", "..."),
    "left",
    color(24, 19, 12, 0)
  );
  views.addView("selfDesc_1", descBubble_1);
  bubbles.push(descBubble_1);

  let descBubble_2 = new Textbubble(
    400,
    200,
    600,
    c.selfdescription[1].replace("&hellip;", "..."),
    "left",
    color(24, 19, 12, 0)
  );
  views.addView("selfDesc_2", descBubble_2);
  bubbles.push(descBubble_2);

  let descBubble_3 = new Textbubble(
    1500,
    600,
    600,
    c.selfdescription[2].replace("&hellip;", "..."),
    "left",
    color(24, 19, 12, 0)
  );
  views.addView("selfDesc_3", descBubble_3);
  bubbles.push(descBubble_3);

  let descBubble_4 = new Textbubble(
    400,
    400,
    600,
    c.selfdescription[3].replace("&hellip;", "..."),
    "left",
    color(24, 19, 12, 0)
  );
  views.addView("selfDesc_4", descBubble_4);
  bubbles.push(descBubble_4);

  let descBubble_5 = new Textbubble(
    1400,
    300,
    600,
    c.selfdescription[4].replace("&hellip;", "..."),
    "left",
    color(24, 19, 12, 0)
  );
  views.addView("selfDesc_5", descBubble_5);
  bubbles.push(descBubble_5);
  
  let mindInviteBubble = new Textbubble(
    1000,
    200,
    600,
    c.mindinvitation,
    "left",
    color(24, 19, 12, 0)
  );
  views.addView("mindInvite", mindInviteBubble);
  bubbles.push(mindInviteBubble);
}

function updateLang (newLang) {
  lang = newLang;
  generate(content);
}

/* sketch */

let framerate = 30;

let world = new Sprite(0, 0);
world.resize(windowHeight / 9 * 16, windowHeight);

let views = new ViewController();

function draw() {
  clear();
  views.display();

  // update images
  for (let elem of images) {
    if(elem.opacity) {
      elem.img.style.opacity = String(elem.opacity);
    }
  }
}
window.draw = draw;

/* animations */

let animate = new AnimationProcessor(framerate);

// animate.addAnimation();

// animate.addAnimation();

// animate.addAnimation();

// animate.addAnimation();

// animate.addAnimation();

// animate.addAnimation();

// animate.addAnimation();

// animate.addAnimation();

// animate.addAnimation();

/* interactions */

// scroll events

let scrollAgent = new ScrollEventAgent(framerate);
window.addEventListener("wheel", (e) => {
  scrollAgent.scroll(e.deltaY);
});

scrollAgent.addEvent(20, function (delta) {
  animate.start("fadePortrait");
});


// let bubblesAlpha = 0;

// // animation presets

// function fadeBubbleInOut (bubble, delta, steps) {
//   if (delta > 0) {
//     bubblesAlpha += steps;
//   } else {
//     bubblesAlpha -= steps;
//   }
//   bubble.colour.setAlpha(bubblesAlpha);
//   bubble.y += (10 / steps) *(delta / abs(delta));  
// }

// function fadeBubbleOutIn (bubble, delta, steps) {
//   if (delta > 0) {
//     bubblesAlpha -= steps;
//   } else {
//     bubblesAlpha += steps;
//   }
//   bubble.colour.setAlpha(bubblesAlpha);
//   bubble.y -= (10 / steps) * (delta / abs(delta));
// }

// function fadeImageOutIn(img, delta, steps) {
//   let opacity = Number(img.style.opacity);
//   if (delta > 0) {
//     img.style.opacity = String(opacity - steps);
//   } else {
//     img.style.opacity = String(opacity + steps);
//   }
// }

// // scroll events

// scrollAgent.addEvent(1, 0.8, function (delta) {
//   // fade and move greeting bubble in/out
//   fadeBubbleInOut(bubbles[0], delta, 10);
// });

// scrollAgent.addEvent(20, 1.7, function (delta) {
//   // fade and move greeting bubble out/in
//   if (delta > 0) {
//     fadeBubbleOutIn(bubbles[0], delta, 5);
//   }
// });

// scrollAgent.addEvent(20, 1.7, function (delta) {
//   // greeting bubble fade in (revert)
//   if (delta < 0) {
//     fadeBubbleOutIn(bubbles[0], delta, 5);
//     views.selectView("greeting");
//   }
// }, 1);

// scrollAgent.addEvent(20, 2.7, function (delta) {
//   // transition between portrait image and workplace image
//   let portrait = document.getElementById("portrait");
//   fadeImageOutIn(portrait, delta, 0.0125);
// });

// scrollAgent.addEvent(40, 0.8, function (delta) {
//   // fade and move bubble in/out
//   views.selectView("jobDescription");
//   fadeBubbleInOut(bubbles[1], delta, 10);
// });

// scrollAgent.addEvent(50, 0.8, function (delta) {
//   // fade and move bubble out/in
//   views.selectView("jobDescription");
//   fadeBubbleOutIn(bubbles[1], delta, 10);
// });

// scrollAgent.addEvent(60, 1/30, function (delta) {
//   // transformation of workplace image
//   let img = document.getElementById("workplace");
//   if (delta > 0) {
//     img.classList.add("transform")
//   } else {
//     img.classList.remove("transform");
//   }  
// });

// scrollAgent.addEvent(70, 0.8, function (delta) {
//   // fade and move bubble in/out
//   views.selectView("selfDesc_1");
//   fadeBubbleInOut(bubbles[2], delta, 10);
// });

// scrollAgent.addEvent(80, 0.8, function (delta) {
//   // fade and move bubble out/in
//   views.selectView("selfDesc_1");
//   fadeBubbleOutIn(bubbles[2], delta, 10);
// });

// scrollAgent.addEvent(90, 0.8, function (delta) {
//   // fade and move bubble in/out
//   views.selectView("selfDesc_2");
//   fadeBubbleInOut(bubbles[3], delta, 10);
// });

// scrollAgent.addEvent(100, 0.8, function (delta) {
//   // fade and move bubble out/in
//   views.selectView("selfDesc_2");
//   fadeBubbleOutIn(bubbles[3], delta, 10);
// });

// scrollAgent.addEvent(110, 0.8, function (delta) {
//   // fade and move bubble in/out
//   views.selectView("selfDesc_3");
//   fadeBubbleInOut(bubbles[4], delta, 10);
// });

// scrollAgent.addEvent(120, 0.8, function (delta) {
//   // fade and move bubble out/in
//   views.selectView("selfDesc_3");
//   fadeBubbleOutIn(bubbles[4], delta, 10);
// });

// scrollAgent.addEvent(130, 0.8, function (delta) {
//   // fade and move bubble in/out
//   views.selectView("selfDesc_4");
//   fadeBubbleInOut(bubbles[5], delta, 10);
// });

// scrollAgent.addEvent(140, 0.8, function (delta) {
//   // fade and move bubble out/in
//   views.selectView("selfDesc_4");
//   fadeBubbleOutIn(bubbles[5], delta, 10);
// });

// scrollAgent.addEvent(150, 0.8, function (delta) {
//   // fade and move bubble in/out
//   views.selectView("selfDesc_5");
//   fadeBubbleInOut(bubbles[6], delta, 10);
// });

// scrollAgent.addEvent(160, 0.8, function (delta) {
//   // fade and move bubble out/in
//   views.selectView("selfDesc_5");
//   fadeBubbleOutIn(bubbles[6], delta, 10);
// });

// scrollAgent.addEvent(170, 0.8, function (delta) {
//   // fade and move bubble in/out
//   views.selectView("mindInvite");
//   fadeBubbleInOut(bubbles[7], delta, 10);
// });

// scrollAgent.addEvent(180, 0.8, function (delta) {
//   // fade and move bubble out/in
//   views.selectView("mindInvite");
//   fadeBubbleOutIn(bubbles[7], delta, 10);
// });

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