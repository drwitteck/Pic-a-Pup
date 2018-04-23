// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default Dashboard e2e tests': function (browser) {
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
      .assert.containsText('div', 'Pic-a-Pup Dashboard')
      .assert.containsText('div', 'Overview')
      .assert.containsText('div', 'Features')
      .assert.containsText('div', 'See what you could do, Pic-a-Fam!')
      .assert.containsText('div', 'Pic-a-Breed')
      .assert.containsText('div', 'Pic-a-Park')
      .assert.containsText('div', 'Pic-a-Services')
      .end()
  }
}
