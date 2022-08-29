"use strict";
const LoginPage = require("../pageobjects/login.page");

describe("'I Can Win' task", () => {
  afterEach(async () => {
    await browser.pause(1000);
  });
  it("Shoult open page nad add value to New Paste: 'Hello from WebDriver'", async () => {
    await LoginPage.open();
    await browser.fullscreenWindow();
    await LoginPage.newPaste.addValue("Hello from WebDriver");
  });
  it("Should select Paste Expiration: '10 Minutes'", async () => {
    await LoginPage.pasteExp.click();
    await browser.pause(1000);
    await LoginPage.tenMinutes.click();
  });
  it("Should put Paste Name / Title: 'helloweb'", async () => {
    await LoginPage.pasteName.addValue("helloweb");
    await browser.pause(3000);
  });
});
