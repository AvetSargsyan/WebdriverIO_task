"use strict";
const Page = require("./page");

class PastePage extends Page {
  get newPasteData() {
    return $("/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/ol/li[1]/div");
  }
  get syntaxHighlightData() {
    return $("/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]");
  }
  get pasteExpData() {
    return $("/html/body/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[2]/div[5]");
  }
  get pasteNameData() {
    return $("/html/body/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/h1");
  }

}

module.exports = new PastePage();
