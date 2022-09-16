"use strict";
const MainPage = require("../pageobjects/main.page");
const PastePage = require("../pageobjects/paste.page");

describe("'Bring It On' task", () => {
  afterEach(async () => {
    await browser.pause(1000);
  });
  it("Should add values to New Paste", async () => {
    await MainPage.open();
    await browser.fullscreenWindow();
    await MainPage.newPaste.addValue(
      "git config --global user.name 'New Sheriff in Town'\ngit reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code')\ngit push origin master --force"
    );
  });
  it("Should select Syntax Highlighting: 'Bash'", async () => {
    await MainPage.syntaxHighlight.click();
    await browser.pause(1000);
    await MainPage.bash.click();
  });
  it("Should select Paste Expiration: '10 Minutes'", async () => {
    await MainPage.pasteExp.click();
    await browser.pause(1000);
    await MainPage.tenMinutes.click();
  });
  it("Should write in line Paste Name / Title: 'how to gain dominance among developers'", async () => {
    await MainPage.pasteName.addValue(
      "how to gain dominance among developers"
    );
  });
  it("Should check that the code matches the one entered in paragraph 2", async () => {
    await MainPage.button.click();
    await browser.pause(2000);
    await expect(browser).toHaveTitleContaining(PastePage.pasteNameData.getText());
    await expect(PastePage.syntaxHighlightData).toHaveText("Bash");
    await expect(PastePage.newPasteData).toHaveTextContaining("git config --global user.name 'New Sheriff in Town'\ngit reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code')\ngit push origin master --force");
    await expect(PastePage.pasteExpData).toHaveTextContaining("10 min");
    await expect(PastePage.pasteNameData).toHaveText("how to gain dominance among developers");
  });
});
