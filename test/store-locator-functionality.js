const chai = require('chai');
const data = require('../data/data.js').indexPage;
const locator = require('../data/locator.js');

describe('Store locator functionality:', function () {
    it('Selecting Arizona should give 2 stores result', function(){
        this.timeout(50000);
        browser.url('https://www.westelm.com/customer-service/store-locator.html?cm_re=GlobalLinks-_-Footer-_-FindAStore#viewStoreList');
        browser.pause(7000);
        //browser.waitForVisible(locator.overlayPage.closeButton);
        browser.click(locator.overlayPage.closeButton);
        //browser.click(locator.indexPage.storeButton);
        browser.waitForVisible(locator.storeLocatorPage.stateSelector);
        // browser.setValue(locator.indexPage.searchField, data.validSku);
        // browser.submitForm(locator.indexPage.searchField);
        // let pageUrl = browser.getUrl();
        // let l = data.validSku.length;
        // let skuInUrl = pageUrl.slice(-l);
        // chai.assert.equal(skuInUrl, data.validSku,'You are at the wrong page');
    });

    // it('Image should be visible', function() {
    //     let imgIsVisisble = browser.isVisible(locator.productPage.imgViewer);
    //     chai.assert.isTrue(imgIsVisisble,'Image is NOT visible');
    // })
});