/* 
HTML content generator.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

export default class ContentGenerator {
  constructor() {
  }

  generateHTML(elementId, code) {
    document.getElementById(elementId).innerHTML = code;
  }
}
