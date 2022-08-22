"use strict";
const Page = require("./page");

class LoginPage extends Page {
  get newPaste() {
    return $("//*[@id='postform-text']");
  }
  get syntaxHighlight() {
    return $("//span[@id='select2-postform-format-container']");
  }
  get bash() {
    return $("//html/body/span[2]/span/span[2]/ul/li[2]/ul/li[1]");
  }
  get pasteExp() {
    return $("//span[@id='select2-postform-expiration-container']");
  }
  get tenMinutes() {
    return $("//li[@class='select2-results__option'][2]");
  }
  get pasteName() {
    return $("//*[@id='postform-name']");
  }
  get button() {
    return $("//button[@class='btn -big']");
  }
  open() {
    return super.open(`https://pastebin.com/`);
  }
}

module.exports = new LoginPage();
