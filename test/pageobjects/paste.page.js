"use strict";
const Page = require("./page");

class PastePage extends Page {
  get newPasteData() {
    return $("//div[@class='de1']");
  }
  get syntaxHighlightData() {
    return $("a=Bash");
  }
  get pasteExpData() {
    return $("div= 10 min ");
  }
}

module.exports = new PastePage();
