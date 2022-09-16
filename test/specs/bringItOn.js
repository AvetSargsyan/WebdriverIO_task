"use strict";
const MainPage = require("../pageobjects/main.page");
const PastePage = require("../pageobjects/paste.page");

describe("'Bring It On' task", () => {
  it("Should add values to New Paste", async () => {
    await MainPage.open();
    await browser.fullscreenWindow();
    await MainPage.newPaste.addValue(
      "git config --global user.name 'New Sheriff in Town'\ngit reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code')\ngit push origin master --force"
    );
  });
  it("Should select Syntax Highlighting: 'Bash'", async () => {
    await MainPage.syntaxHighlight.click();
    await MainPage.bash.click();
  });
  it("Should select Paste Expiration: '10 Minutes'", async () => {
    await MainPage.pasteExp.click();
    await MainPage.tenMinutes.click();
  });
  it("Should write in line Paste Name / Title: 'how to gain dominance among developers'", async () => {
    await MainPage.pasteName.addValue("how to gain dominance among developers");
  });
  it("Should check that the code matches the one entered in paragraph 2", async () => {
    const pasteName = await MainPage.pasteName.getText();
    await MainPage.button.click();
    await expect(PastePage.syntaxHighlightData).toBeExisting();
    await expect(browser).toHaveTitleContaining(pasteName);
    await expect(PastePage.syntaxHighlightData).toHaveText("Bash");
    await expect(PastePage.newPasteData).toHaveTextContaining(
      "git config --global user.name 'New Sheriff in Town'\ngit reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code')\ngit push origin master --force"
    );
    await expect(PastePage.pasteExpData).toHaveTextContaining("10 min");
  });
});
