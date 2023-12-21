class WDIO {
  androidId(id) {
    return `android:id/${id}`;
  }
  /**
   * [Android] Function to get the element by resourceId
   * @param  {string} id
   */
  androidUISelectorResourceId(id) {
    return `android=new UiSelector().resourceId("${this.androidId(id)}")`;
  }

  /**
   * [Android] Function to get the element by class name
   * @param  {string} id
   */
  androidUISelectorClassName(selector) {
    return `android=new UiSelector().className("${selector}")`;
  }

  /**
   * [Android] Function to get the element by text
   * @param  {string} id
   */
  androidUISelectorText(text) {
    return `android=new UiSelector().text("${text}")`;
  }

  /**
   * [Android] Function to get the element by text
   * @param  {string} id
   */
  androidUISelectorXPath(selector) {
    return selector;
  }

  /**
   * [Android] Function to get the element by accessibilityId
   * @param  {string} id
   */
  androidUISelectorAccessibilityId(id) {
    return `~${id}`;
  }
}

module.exports = new WDIO();
