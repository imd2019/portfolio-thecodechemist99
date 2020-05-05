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
  document.getElementById("images").innerHTML = `
<img id="portrait" src="/content/images/portrait_placeholder.jpg" alt="${content.portrait_alt}" />
<img id="workplace" src="/content/images/workplace_placeholder.jpg" alt="${content.workplace_alt}" />
`;

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
      width - 800,
      200,
      500,
      "left",
      "white",
      content.greeting.replace("&hellip;", "\u2026")
    )
  );
  // bubbles.push(
  //   new Speechbubble(
  //     600,
  //     100,
  //     500,
  //     "left",
  //     "black",
  //     content.jobdescription.replace("&hellip;", "\u2026")
  //   )
  // );

  // for (let i = 0; i < content.selfdescription.length; i++) {
  //   bubbles.push(
  //     new Speechbubble(
  //       1100,
  //       100 + 500 * i,
  //       500,
  //       "left",
  //       "black",
  //       content.selfdescription[i].replace("&hellip;", "\u2026")
  //     )
  //   );
  // }
}
