/* 
Page generation.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

import ContentGenerator from "./contentGenerator.js";

// load JSON file
let url = "./content/text/content.json";
let content = loadJSON(url, generate);

// generate page
let generator = new ContentGenerator();
let lang = "en";

function generate (content) {
  switch (lang) {
    case "de":
      generator.generateHTML("images",
      `<img id="portrait" src="/content/images/portrait_placeholder.jpg" alt="${content.de.portrait_alt}" /><img id="workplace" src="/content/images/workplace_placeholder.jpg" alt="${content.de.workplace_alt}" />`
      );
      break;
    default:
      generator.generateHTML("images",
      `<img id="portrait" src="/content/images/portrait_placeholder.jpg" alt="${content.en.portrait_alt}" /><img id="workplace" src="/content/images/workplace_placeholder.jpg" alt="${content.en.workplace_alt}" />`
      );
      break;
  }
}

function updateLang (newLang) {
  lang = newLang;
  generate(content);
}