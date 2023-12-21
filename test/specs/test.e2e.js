const HomeScreen = require("../screenObjects/home.screen");
const ShoppingListScreen = require("../screenObjects/shoppingList.screen");

describe("Android e2e", () => {
  it("should create a new shopping list called [My shopping list]", async () => {
    await HomeScreen.openShoppingListScreen("No list selected");
    await ShoppingListScreen.createNewShoppingList("29");
  });

  it("should add new items to shopping list", async () => {
    const shoppingList = ["29", "30", "31", "32", "33", "34"];
    for (const e of shoppingList) {
      await HomeScreen.addItem(e);
    }
  });

  it("should edit each shopping list item", async () => {
    const editShoppingList = [
      { item: "a", newValue: "40" },
      { item: "b", newValue: "41" },
      { item: "c", newValue: "42" },
      { item: "d", newValue: "43" },
      { item: "e", newValue: "44" },
      { item: "f", newValue: "45" },
    ];
    for (const e of editShoppingList) {
      await HomeScreen.editItem(e.item, e.newValue);
    }
  });

  it("should remove 2 items from shopping list", async () => {
    const removedItems = ["al", "bm"];
    for (const e of removedItems) {
      const itemIsDisplayed = await HomeScreen.removeItem(e);
      await expect(itemIsDisplayed).toBe(false);
      const removeMsgIsDisplayed = await HomeScreen.removeMsgIsDisplayed();
      await expect(removeMsgIsDisplayed).toBe(true);
    }
  });

  it("should check all the items from shopping list", async () => {
    const actualItems = ["fq", "ep", "do", "cn"];
    for (const e of actualItems) {
      const itemIsChecked = await HomeScreen.checkBoxItem(e);
      await expect(itemIsChecked).toBe("true");
    }
  });

  it("should archive all the items from shopping list", async () => {
    await HomeScreen.archiveItems();
    const archiveListMsgIsDisplayed =
      await HomeScreen.archiveListMsgIsDisplayed();
    await expect(archiveListMsgIsDisplayed).toBe(true);
  });

  it("should delete the archived list", async () => {
    await HomeScreen.openShoppingListScreen("No list selected");
    const noCurrentListIsDisplayed =
      await ShoppingListScreen.noCurrentListMsgIsDisplayed();
    await expect(noCurrentListIsDisplayed).toBe(true);
    await ShoppingListScreen.goToArchivedTab();
    await ShoppingListScreen.openMenu();
    await ShoppingListScreen.deleteArchivedList();
    const emptyListMsgIsDisplayed = await (
      await ShoppingListScreen.getElement("noListMsg")
    ).isDisplayed();
    await expect(emptyListMsgIsDisplayed).toBe(true);
  });
});
