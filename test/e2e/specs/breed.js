// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer + '/signin')
      // .setValue('input[name=email]', 'pls@work.com')
      // .setValue('input[name=password]', '123123')
      .url(devServer + '/breed')
      .waitForElementVisible('container', 5000)
      .assert.containsText('div', 'Upload Your Pup')
      .assert.containsText('div', 'Photo Guidelines')
      .assert.containsText('div', 'Quick Simple Steps To Get The Best Results')
      .assert.containsText('div', 'Step 3')
      .assert.elementPresent('.dropbox')
      .assert.elementPresent('.container')
      .assert.elementPresent('.input-file')
      .end()
  }
}
