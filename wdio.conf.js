const path = require("path");
exports.config = {
  runner: "local",
  port: 4723,
  specs: ["./test/specs/**/*.js"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      "appium:platformName": "android",
      "appium:deviceName": "emulator-5554",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(process.cwd(), "./app/fastshopping.apk"),
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["appium"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
