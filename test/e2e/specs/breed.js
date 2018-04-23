// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default Breed e2e tests': function (browser) {
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
      .click('a[href="/breed"]', function (result) {
        console.log('Breed Navigation Menu Click Result:' + result)
      })
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
