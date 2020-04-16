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

  // // create HTML
  // document.getElementById("speechbubbles").innerHTML = `

  // <p class="greeting">${content.greeting}</p>
  // <p class="jobs">${content.jobdescription}</p>
  //   ${content.selfdescription
  //     .map(function (item) {
  //       return `<p class="self-description">${item}</p>`;
  //     })
  //     .join("")}
  //   `;

  bubbles.push(
    new Speechbubble(
      100,
      100,
      400,
      "left",
      "black",
      content.greeting.replace("&hellip;", "\u2026")
    )
  );
  bubbles.push(
    new Speechbubble(
      600,
      100,
      400,
      "left",
      "black",
      content.jobdescription.replace("&hellip;", "\u2026")
    )
  );

  for (let i = 0; i < content.selfdescription.length; i++) {
    bubbles.push(
      new Speechbubble(
        1100,
        100 + 300 * i,
        400,
        "left",
        "black",
        content.selfdescription[i].replace("&hellip;", "\u2026")
      )
    );
  }
}
