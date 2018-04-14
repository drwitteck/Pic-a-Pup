// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#logo', 5000)
      .assert.elementPresent('.title')
      .assert.containsText('span', 'Pic-a-Pup')
      .assert.elementCount('img', 1)
      .end()
  }
}
