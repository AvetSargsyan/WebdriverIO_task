const LoginPage = require("../pageobjects/login.page");

describe("'I Can Win' task", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });
  it("Shoult add values to New Paste: 'Hello from WebDriver'", async () => {
    await LoginPage.newPaste.addValue("Hello from WebDriver");
  });
  it("Should put Paste Expiration: '10 Minutes'", async () => {
    await LoginPage.pasteExp.click();
    await LoginPage.tenMinutes.click();
  });
  it("Should put Paste Name / Title: 'helloweb'", async () => {
    await LoginPage.pasteName.addValue("helloweb");
  });
});
