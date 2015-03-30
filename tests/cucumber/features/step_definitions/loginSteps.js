var assert = require('assert');

module.exports = function () {

  var helper = this;

  this.Given(/^I am signed out$/, function (callback) {
    helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl + "sign-out").
      waitForExist('.account-link', 1000).
      waitForVisible('.account-link', 1000).
      call(callback);
  });

  this.Given(/^I am on the home page$/, function (callback) {
    helper.world.browser.
      url(helper.world.cucumber.mirror.rootUrl).
      call(callback);
  });

  this.Then(/^I should see Welcome to Meteor$/, function (callback) {
    helper.world.browser.
      getText('h1', function(error, text) {
        assert.equal(text, 'Welcome to Meteor!');
      }).    
      call(callback);
    });

  this.When(/^I click on sign in link$/, function (callback) {
    helper.world.browser.
      // saveScreenshot(process.env.PWD + '/auth1.png').
      waitForExist('.sign-up', 7000).
      waitForVisible('.sign-up').
      click('.sign-up').
      call(callback);
  });


};