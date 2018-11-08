const chai = require('chai');
const data = require('../data/data.js').storeLocatorPage;
const locator = require('../data/locator.js');

describe('Store locator functionality:', function () {
    it(`Selecting ${data.testState1} should give ${data.state1Stores} stores result`, function(){
        browser.url('https://www.westelm.com/customer-service/store-locator.html?cm_re=GlobalLinks-_-Footer-_-FindAStore#viewStoreList');
        browser.click(locator.overlayPage.closeButton);
        browser.waitForVisible(locator.storeLocatorPage.allStoresButton);
        browser.click(locator.storeLocatorPage.allStoresButton);
        browser.waitForVisible(locator.storeLocatorPage.stateSelector);
        browser.selectByVisibleText(locator.storeLocatorPage.stateSelector, data.testState1);
        let arrOfStores = $$(data.storeTitle).length - 5;
        chai.assert.equal(arrOfStores, data.state1Stores,'Wrong count of stores');
    });

    it(`Selecting ${data.testState2} should give ${data.state2Stores} stores result`, function(){
        browser.selectByVisibleText(locator.storeLocatorPage.stateSelector, data.testState2);
        let arrOfStores = $$(data.storeTitle).length - 5;
        chai.assert.equal(arrOfStores, data.state2Stores,'Wrong count of stores');
    });
});