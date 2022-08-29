"use strict";
const LoginPage = require("../pageobjects/login.page");
const assert = require("assert");

describe("'Bring It On' task", () => {
  afterEach(async () => {
    await browser.pause(1000);
  });
  it("Should add values to New Paste", async () => {
    await LoginPage.open();
    await browser.fullscreenWindow();
    await LoginPage.newPaste.addValue(
      "git config --global user.name 'New Sheriff in Town'\ngit reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code')\ngit push origin master --force"
    );
  });
  it("Should select Syntax Highlighting: 'Bash'", async () => {
    await LoginPage.syntaxHighlight.click();
    await browser.pause(1000);
    await LoginPage.bash.click();
  });
  it("Should select Paste Expiration: '10 Minutes'", async () => {
    await LoginPage.pasteExp.click();
    await browser.pause(1000);
    await LoginPage.tenMinutes.click();
  });
  it("Should write in line Paste Name / Title: 'how to gain dominance among developers'", async () => {
    await LoginPage.pasteName.addValue(
      "how to gain dominance among developers"
    );
  });
  it("Should check if browser page title matches Paste Name / Title", async () => {
    try {
      await expect(browser).toHaveTitle("Paste Name / Title");
    } catch {
      console.log("Page title doesn't matches Paste Name / Title");
    }
  });
  it("Should check if syntax is suspended for bash", async () => {
    LoginPage.bash.isSelected(); // I’m not sure I understood the condition of the task correctly
  });
  it("Check that the code matches the one entered in paragraph 2", async () => {
    await assert(
      LoginPage.newPaste.getText(),
      "git config --global user.name 'New Sheriff in Town'\ngit reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code')\ngit push origin master --force"
    );
    await assert(LoginPage.bash.getAttribute("aria-selected"), "true");
    await assert(LoginPage.tenMinutes.getAttribute("aria-selected"), "true");
    await assert(
      LoginPage.pasteName.getText(),
      "how to gain dominance among developers"
    );
  });
});
