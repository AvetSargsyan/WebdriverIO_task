"use strict";
const MainPage = require("../pageobjects/main.page");

describe("'I Can Win' task", () => {
  it("Shoult open page nad add value to New Paste: 'Hello from WebDriver'", async () => {
    await MainPage.open();
    await MainPage.check("helloweb", "Hello from WebDriver");
  });
});
