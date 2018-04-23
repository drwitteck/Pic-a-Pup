// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default sign-up e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer + '/signup')
      .waitForElementVisible('label', 5000)
      .assert.containsText('label', 'Name')
      .assert.containsText('div', 'Enter your name')
      .assert.containsText('div', 'Enter your email')
      .assert.containsText('div', 'Enter your password and confirm your password')
      .assert.containsText('div', 'Please Confirm Your Information')
      .assert.elementPresent('.stepper__content')
      .assert.elementPresent('.stepper__wrapper')
      .assert.elementPresent('.input-group__input')
      .assert.elementPresent('.input-group__details')
      .end()
  }
}
