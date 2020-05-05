/* 
HTML content generator.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

export default class ContentGenerator {
  constructor(url, element, code, lang = "en") {
    this.content = loadJSON(url, this.generateHTML);
    this.lang = lang;
    this.code = code;
    this.element = document.getElementById(element);
  }

  selectLanguage() {
    switch (this.lang) {
      case "en":
        content = content.en;
        break;
      case "de":
        content = content.de;
        break;
      case "fr":
        content = content.fr;
        break;
    }
  }

  updateLanguage(lang) {
    this.lang = lang;
    generateHTML();
  }

  generateHTML() {
    this.selectLanguage();

    element.innerHTML = this.code;
  }
}
