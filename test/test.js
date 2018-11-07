//const assert = require('assert');
const data = require('../data/data').indexPage;
const locator = require('../data/locators');

describe('Testing Search functionality works as intended', function () {
    it('Inputting valid sku', function(){
        browser.url('/');
        browser.waitForExist(locator.indexPage.searchField);
        browser.setValue(locator.indexPage.searchField,data.indexPage.validSku);
        browser.pause(5000)
    })
});