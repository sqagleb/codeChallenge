const chai = require('chai');
const data = require('../data/data.js').storeLocatorPage;
const locator = require('../data/locator.js');

describe('Store locator functionality:', function () {
    it(`Selecting ${data.testState1} should give 2 stores result`, function(){
        this.timeout(50000);
        browser.url('https://www.westelm.com/customer-service/store-locator.html?cm_re=GlobalLinks-_-Footer-_-FindAStore#viewStoreList');
        // browser.pause(7000);
        browser.click(locator.overlayPage.closeButton);
        browser.waitForVisible(locator.storeLocatorPage.allStoresButton);
        browser.click(locator.storeLocatorPage.allStoresButton);
        browser.waitForVisible(locator.storeLocatorPage.stateSelector);
        browser.selectByVisibleText(locator.storeLocatorPage.stateSelector, data.testState1);
        browser.pause(3000);
        let arrOfStores = $$(data.storeTitle).length - 5;
        // chai.assert.equal(skuInUrl, data.validSku,'You are at the wrong page');
    });

    // it('Image should be visible', function() {
    //     let imgIsVisisble = browser.isVisible(locator.productPage.imgViewer);
    //     chai.assert.isTrue(imgIsVisisble,'Image is NOT visible');
    // })
});