exports.config = {
  user: process.env.SAUCELABS_USERNAME,
  key: process.env.SAUCELABS_ACCESS_KEY,
  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  baseUrl: "wd/hub",

  services: [
    [
      "sauce",
      {
        sauceConnect: true,
      },
    ],
  ],

  capabilities: [
    {
      platformName: "Android",
      "appium:app": "storage:filename=fastshopping.apk",
      "appium:deviceName": "Android GoogleAPI Emulator",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      "appium:noReset": true,
      "appium:newCommandTimeout": 90,
      "appium:commandTimeouts": "120000",
      "sauce:options": {
        build: "appium-build-MX8AJ",
        name: "Applaudo-Appium",
        deviceOrientation: "PORTRAIT",
        timeouts: { script: 1200000, pageLoad: 400000, implicit: 5000 },
      },
    },
  ],

  maxInstances: 10,
  specs: ["./test/specs/**/*.js"],
  exclude: [],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
