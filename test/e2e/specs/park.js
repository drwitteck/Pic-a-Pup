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
      .setValue('input[aria-label=E-mail]', 'pls@work.com')
      .setValue('input[aria-label=Password]', '123123')
      .click('button', function (result) {
        console.log('Sign In Button Click Result:' + result)
      })
      .waitForElementVisible('.parallax', 5000)
      .assert.containsText('div.toolbar__title', 'Pic-a-Pup Dashboard')
    // .url(devServer + '/breed')
      .waitForElementVisible('.container', 5000)
      .click('a[href="/park"]', function (result) {
        console.log('Breed Navigation Menu Click Result:' + result)
      })
      .assert.containsText('div', 'Pic-a-Park')
      .assert.containsText('div', 'map')
      .assert.containsText('div', 'Enter an address')
      .assert.containsText('div', 'Locations')
      .assert.elementPresent('.input-group__input')
      .end()
  }
}
