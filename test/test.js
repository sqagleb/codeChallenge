const chai = require('chai');
const data = require('../data/data.js').indexPage;
const locator = require('../data/locator.js');

describe('Testing Search functionality works as intended', function () {
    this.timeout(50000);
    browser.url('/');
    browser.waitForVisible(locator.indexPage.searchField, 2000);
    browser.setValue(locator.indexPage.searchField,data.validSku);
    browser.submitForm(locator.indexPage.searchField);
    browser.waitForExist(locator.productPage.imgViewer);
    it('Inputting valid sku', function(){
        let imgViewerIsVisible = browser.isVisible(locator.productPage.imgViewer);
        // let test = browser.getText(locator.productPage.productName);
        // console.log(test);
        chai.assert.isTrue(imgViewerIsVisible,'ImgViewer is NOT visible');
    })
});