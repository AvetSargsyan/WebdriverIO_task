"use strict";
const Page = require("./page");

class MainPage extends Page {
  get newPaste() {
    return $("//textarea[@class='textarea -form js-paste-code']");
  }
  get syntaxHighlight() {
    return $("//span[@id='select2-postform-format-container']");
  }
  get bash() {
    return $("li=Bash");
  }
  get pasteExp() {
    return $("//span[@id='select2-postform-expiration-container']");
  }
  get tenMinutes() {
    return $("li=10 Minutes");
  }
  get pasteName() {
    return $("//input[@id='postform-name']");
  }
  get button() {
    return $("//button[@class='btn -big']");
  }
  open() {
    return super.open(`https://pastebin.com/`);
  }
  async check(name, code, syntax) {
    await this.newPaste.addValue(code);
    await this.pasteExp.isClickable();
    await this.pasteExp.click();
    await this.tenMinutes.isClickable();
    await this.tenMinutes.click();
    await this.pasteName.addValue(name);
    if (syntax) {
      await this.syntaxHighlight.isClickable();
      await this.syntaxHighlight.click();
      await this.bash.isClickable();
      await this.bash.click();
    }
  }
}

module.exports = new MainPage();
