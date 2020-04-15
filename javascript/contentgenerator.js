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
}
