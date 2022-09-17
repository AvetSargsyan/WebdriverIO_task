"use strict";
const Page = require("./page");

class PastePage extends Page {
  get newPasteData() {
    return $("//textarea[@class='textarea -raw js-paste-raw']");
  }
  get syntaxHighlightData() {
    return $("//div[@class='left']/a[@class='btn -small h_800']");
  }
  get pasteExpData() {
    return $("//div[@class='expire']");
  }
}

module.exports = new PastePage();
