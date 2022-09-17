"use strict";
const MainPage = require("../pageobjects/main.page");

describe("'I Can Win' task", () => {
  it("Shoult open page, add some values, select some options", async () => {
    await MainPage.open();
    await MainPage.check("helloweb", "Hello from WebDriver");
  });
});
