const chai = require('chai');
const data = require('../data/data.js').indexPage;
const locator = require('../data/locator.js');

describe('Search functionality for valid SKU:', function () {
    it('Product page should be opened', function(){
        this.timeout(50000);
        browser.url('/');
        browser.click(locator.overlayPage.closeButton);
        browser.setValue(locator.indexPage.searchField, data.validSku);
        browser.submitForm(locator.indexPage.searchField);
        let pageUrl = browser.getUrl();
        let l = data.validSku.length;
        let skuInUrl = pageUrl.slice(-l);
        chai.assert.equal(skuInUrl, data.validSku,'You are at the wrong page');
    });

    it('Image should be visible', function() {
        let imgIsVisisble = browser.isVisible(locator.productPage.imgViewer);
        chai.assert.isTrue(imgIsVisisble,'Image is NOT visible');
    })
});

describe('Search functionality for INVALID SKU:', function () {
    it('Search page should be opened', function () {
        this.timeout(50000);
        browser.url('/');
        browser.setValue(locator.indexPage.searchField, data.invalidSku);
        browser.submitForm(locator.indexPage.searchField);
        browser.waitForText(locator.searchPage.srMessage, 3000);
        let wordsFieldIsVisisble = browser.isVisible(locator.searchPage.wordsField);
        chai.assert.isTrue(wordsFieldIsVisisble,'Words field is NOT visible');
    });

    it('Search result message should be visible', function () {
        let messageIsVisisble = browser.isVisible(locator.searchPage.srMessage);
        chai.assert.isTrue(messageIsVisisble, 'Message is NOT visible');
    });

});