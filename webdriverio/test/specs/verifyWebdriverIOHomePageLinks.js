
describe('Verify whether user is able to navigate to ' +
    'all links from WebdriverIO Home Page ', () => {

    it('User should be able to launch WebdriverIO ' +
        'Home Page', () => {
        browser.url('https://webdriver.io/');
        const title = browser.getTitle();
        browser.pause(1000);
        assert.equal(title, 'WebdriverIO · ' +
            'Next-gen WebDriver test ' +
            'framework for Node.js',
            "title is not 'WebdriverIO · " +
            "Next-gen WebDriver test framework " +
            "for Node.js'");
    });

    it('User should be able to navigate to Get Started ' +
        'Page of ' +
        'WebdriverIO website', () => {
        browser.url('https://webdriver.io/');
        const element = $('//*[@href="/docs/gettingstarted.' +
            'html"]');
        element.click();
        browser.pause(1000);
        const title = browser.getTitle();
        expect(title).to.be.
        equal('Getting Started · ' +
            'WebdriverIO',
            "title is not ''Getting Started · WebdriverIO'");

    });

});