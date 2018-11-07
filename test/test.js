//const assert = require('assert');
const data = require('../data/data.js').indexPage;
const locator = require('../data/locator.js');

describe('Testing Search functionality works as intended', function () {
    it('Inputting valid sku', function(){
        browser.url('/');
        browser.waitForExist(locator.indexPage.searchField);
        console.log(data.validSku);
        browser.setValue(locator.indexPage.searchField,data.validSku);
        browser.submitForm(locator.indexPage.searchField);
        browser.pause(5000)
    })
});