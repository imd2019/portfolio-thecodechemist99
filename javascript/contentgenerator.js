/* build HTML page */

let lang = "en";

function generateHTML(content) {
  // select language
  switch (lang) {
    case "en":
      content = content.en;
      break;
    case "de":
      content = content.de;
      break;
  }

  // create HTML
  document.getElementById("speechbubbles").innerHTML = `

  <p class="greeting">${content.greeting}</p>
  <p class="jobs">${content.jobdescription}</p>
    ${content.selfdescription
      .map(function (item) {
        return `<p class="self-description">${item}</p>`;
      })
      .join("")}
    `;

  // bubbles.push(
  //   new Speechbubble(
  //     100,
  //     100,
  //     400,
  //     "left",
  //     "black",
  //     "Hallo, ich bin ein Text! Ich möchte mich gerne etwas umsehen! Warum magst du mich denn nicht? Dabei bin ich doch so ein schöner Text! Also wirklich, da bin ich ja fast ein bisschen eingeschnappt ..."
  //   )
  // );

  // bubbles.push(
  //   new Speechbubble(
  //     100,
  //     100,
  //     400,
  //     "left",
  //     "black",
  //     "Hallo, ich bin ein Text! Ich möchte mich gerne etwas umsehen! Warum magst du mich denn nicht? Dabei bin ich doch so ein schöner Text! Also wirklich, da bin ich ja fast ein bisschen eingeschnappt ... Hallo, ich bin ein Text! Ich möchte mich gerne etwas umsehen! Warum magst du mich denn nicht? Dabei bin ich doch so ein schöner Text! Also wirklich, da bin ich ja fast ein bisschen eingeschnappt ..."
  //   )
  // );

  bubbles.push(
    new Speechbubble(100, 100, 400, "left", "black", content.jobdescription)
  );
}
