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
    return $("//button[@class='btn -big']"); //$("button=Create New Paste");
  }
  open() {
    return super.open(`https://pastebin.com/`);
  }
}

module.exports = new MainPage();
