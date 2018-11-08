const chai = require('chai');
const data = require('../data/data.js').indexPage;
const locator = require('../data/locator.js');

describe('Testing Search functionality works as intended', function () {
    it('Right page opened', function(){
        this.timeout(50000);
        browser.url('/');
        browser.setValue(locator.indexPage.searchField, data.validSku);
        browser.submitForm(locator.indexPage.searchField);
        let pageUrl = browser.getUrl();
        let l = data.validSku.length;
        let skuInUrl = pageUrl.slice(-l);
        chai.assert.equal(skuInUrl, data.validSku,'You are at the wrong page');
    });

    it('Img is visible', function() {
        let imgIsVisisble = browser.isVisible(locator.productPage.imgViewer);
        chai.assert.isTrue(imgIsVisisble,'Image is NOT visible');
    })
});