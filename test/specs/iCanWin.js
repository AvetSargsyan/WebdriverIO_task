"use strict";
const MainPage = require("../pageobjects/main.page");

describe("'I Can Win' task", () => {
  afterEach(async () => {
    await browser.pause(1000);
  });
  it("Shoult open page nad add value to New Paste: 'Hello from WebDriver'", async () => {
    await MainPage.open();
    await browser.fullscreenWindow();
    await MainPage.newPaste.addValue("Hello from WebDriver");
  });
  it("Should select Paste Expiration: '10 Minutes'", async () => {
    await MainPage.pasteExp.click();
    await browser.pause(1000);
    await MainPage.tenMinutes.click();
  });
  it("Should put Paste Name / Title: 'helloweb'", async () => {
    await MainPage.pasteName.addValue("helloweb");
    await browser.pause(3000);
  });
});
