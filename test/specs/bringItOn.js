"use strict";
const MainPage = require("../pageobjects/main.page");
const PastePage = require("../pageobjects/paste.page");

describe("'Bring It On' task", () => {
  it("Shoult open page nad add value to New Paste: 'Hello from WebDriver'", async () => {
    await MainPage.open();
    await MainPage.check(
      "how to gain dominance among developers",
      "git config --global user.name 'New Sheriff in Town'\ngit reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code')\ngit push origin master --force",
      "Bash"
    );
  });
  it("Should check that the code matches the one entered in paragraph 2", async () => {
    const pasteName = await MainPage.pasteName.getText();
    const pasteCode = await MainPage.newPaste.getText();
    await MainPage.button.click();
    await expect(browser).toHaveTitleContaining(pasteName);
    await expect(PastePage.syntaxHighlightData).toBeExisting();
    await expect(PastePage.syntaxHighlightData).toHaveText("Bash");
    await expect(PastePage.newPasteData).toHaveTextContaining(pasteCode);
    await expect(PastePage.pasteExpData).toHaveTextContaining("10 MIN");
  });
});
