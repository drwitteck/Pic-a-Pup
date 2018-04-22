// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
/*
module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer + '/park')
      .waitForElementVisible('button', 50000)
      .assert.containsText('div', 'Parks')
      .assert.containsText('div', 'Find Parks')
      .assert.containsText('div', 'Enter an address')
      .assert.containsText('div', 'Locations')
      .assert.elementPresent('.input-group__input')
      .assert.elementPresent('input-group__details')
      .end()
  }
}
*/
