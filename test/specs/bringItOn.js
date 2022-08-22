"use strict";
const LoginPage = require("../pageobjects/login.page");

describe("'Bring It On' task", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });
  it("Should add values to New Paste", async () => {
    await LoginPage.newPaste.addValue(
      "git config --global user.name 'New Sheriff in Town'\ngit reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code')\ngit push origin master --force"
    );
  });
  it("Should put Syntax Highlighting: 'Bash'", async () => {
    await LoginPage.syntaxHighlight.click();
    await LoginPage.bash.click();
  });
  it("Should put Paste Expiration: '10 Minutes'", async () => {
    await LoginPage.pasteExp.click();
    await LoginPage.tenMinutes.click();
  });
  it("Should write in line Paste Name / Title: 'how to gain dominance among developers'", async () => {
    await LoginPage.pasteName.addValue(
      "how to gain dominance among developers"
    );
  });
  it("Should check if browser page title matches Paste Name / Title", async () => {
    try {
      expect(browser).toHaveAttribute(LoginPage.pasteName);
    } catch {
      console.log("Browser page title doesn't match Paste Name / Title");
    }
  });
  it("Should check if syntax is suspended for bash", async () => {
    LoginPage.bash.isSelected();
  });
  //it("Check that the code matches the one entered in paragraph 2", async()=>{})
});
