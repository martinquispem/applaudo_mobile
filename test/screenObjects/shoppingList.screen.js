const WDIO = require("./wdio");

const SELECTORS = {
  newListButton: WDIO.androidUISelectorAccessibilityId("NEW LIST"),
  inputShoppingListName: WDIO.androidUISelectorClassName(
    "android.widget.EditText"
  ),
  addButton: WDIO.androidUISelectorAccessibilityId("ADD"),
  archivedTab: WDIO.androidUISelectorXPath('//android.view.View[@index="3"]'),
  deleteMenuButton: WDIO.androidUISelectorAccessibilityId("Delete"),
  deleteConfirmButton: WDIO.androidUISelectorAccessibilityId("DELETE"),
  noListMsg: WDIO.androidUISelectorAccessibilityId(
    "There are no archived lists."
  ),
  noCurrentListMsg: WDIO.androidUISelectorAccessibilityId(
    "There are no current lists, create one!"
  ),
};

class ShoppingListScreen {
  async getElement(selectorKey) {
    return await $(SELECTORS[selectorKey]);
  }

  async createNewShoppingList(name) {
    await (await this.getElement("newListButton")).click();
    await (await this.getElement("inputShoppingListName")).click();
    await driver.sendKeyEvent(name);
    await (await this.getElement("addButton")).click();
  }

  async goToArchivedTab() {
    await (await this.getElement("archivedTab")).click();
  }

  async openMenu() {
    await driver.touchAction({
      action: "tap",
      x: 1346,
      y: 686,
    });
  }

  async deleteArchivedList() {
    await (await this.getElement("deleteMenuButton")).click();
    await (await this.getElement("deleteConfirmButton")).click();
  }

  async noCurrentListMsgIsDisplayed() {
    return await (await this.getElement("noCurrentListMsg")).isDisplayed();
  }
}

module.exports = new ShoppingListScreen();
