const WDIO = require("./wdio");

const SELECTORS = {
  createListButton: (value) => WDIO.androidUISelectorAccessibilityId(value),
  addItem: (value) => `//android.widget.Button[@index="${value}"]`,
  addSomeItemsLabel: WDIO.androidUISelectorAccessibilityId(
    "Add some items to your list!"
  ),
  addItemLabel: WDIO.androidUISelectorAccessibilityId("Add item"),
  inputItem:
    'android=new UiSelector().resourceId("android:id/content").childSelector(UiSelector().className("android.widget.EditText"))',
  addButton: WDIO.androidUISelectorAccessibilityId("ADD"),
  editButton: WDIO.androidUISelectorAccessibilityId("EDIT"),
  saveButton: WDIO.androidUISelectorAccessibilityId("SAVE"),
  removeButton: WDIO.androidUISelectorAccessibilityId("REMOVE"),
  removeMsg: WDIO.androidUISelectorAccessibilityId(
    "Item has been removed from the list."
  ),
  item: (value) => WDIO.androidUISelectorAccessibilityId(value),
  itemCheckbox: (value) =>
    WDIO.androidUISelectorXPath(
      `//android.view.View[@content-desc="${value}"]/android.widget.CheckBox`
    ),
  archiveButton: WDIO.androidUISelectorAccessibilityId("ARCHIVE"),
};

class HomeScreen {
  async getElement(selectorKey) {
    return await $(SELECTORS[selectorKey]);
  }

  async openShoppingListScreen(value) {
    await (await $(SELECTORS.createListButton(value))).click();
  }

  async addItem(itemValue) {
    let value;
    const addSomeItemsIsDisplayed = await (
      await $(SELECTORS["addSomeItemsLabel"])
    ).isDisplayed();
    addSomeItemsIsDisplayed ? (value = 4) : (value = 3);

    await (await $(SELECTORS.addItem(value))).click();
    await driver.sendKeyEvent(itemValue);
    await (await this.getElement("addButton")).click();
  }

  async editItem(id, newValue) {
    await (await $(SELECTORS.item(id))).click();
    await (await this.getElement("editButton")).click();
    await driver.sendKeyEvent(newValue);
    await driver.hideKeyboard();
    await (await this.getElement("saveButton")).click();
  }

  async removeItem(id) {
    await (await $(SELECTORS.item(id))).click();
    await (await this.getElement("removeButton")).click();
  }

  async checkBoxItem(id) {
    await (await $(SELECTORS.itemCheckbox(id))).click();
  }

  async archiveItems() {
    await (await this.getElement("archiveButton")).click();
  }
}

module.exports = new HomeScreen();