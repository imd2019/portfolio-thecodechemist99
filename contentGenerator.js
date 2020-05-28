/* 
HTML content generator.
Distributed under the MIT license.
(c)2020 Florian Beck
*/

export default class ContentGenerator {
  constructor(content, element, code, lang = "en") {
    this.content = content;
    this.lang = lang;
    this.code = code;
    this.element = document.getElementById(element);
  }

  selectLanguage() {
    switch (this.lang) {
      case "en":
      case "en-US":
      case "en-UK":
        this.content = content.en;
        break;
      case "de":
        this.content = content.de;
        break;
      case "fr":
        this.content = content.fr;
        break;
    }
  }

  updateLanguage(lang) {
    this.lang = lang;
    generateHTML();
  }

  generateHTML() {
    this.selectLanguage();

    this.element.innerHTML = this.code;
    console.log(this.code)
  }
}
