/* 
Page generation.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

import ContentGenerator from "./contentGenerator.js";

let url = "./javascript/content.json";

let generateImages = new ContentGenerator(
  url,
  "images",
  `
  <img id="portrait" src="/content/images/portrait_placeholder.jpg" alt="${content.portrait_alt}" />
  <img id="workplace" src="/content/images/workplace_placeholder.jpg" alt="${content.workplace_alt}" />
  `
);
