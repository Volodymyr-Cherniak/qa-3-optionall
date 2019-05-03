import { assert } from 'chai';

describe('Login', function () {

        it('login check', function () {
            browser.url('/');
            $('#email').addValue('testreacttest@gmail.com');
            browser.pause(1000);
            $('#pass').addValue('testTest');
            browser.pause(1000);
            $('#login').click();
            browser.pause(1000);
            $('.text-left').click();
            $('#new_bug').waitForDisplayed(20000);
            assert.isTrue($('#new_bug').isDisplayed());
        });
        it('email field-placeholder check', function () {
            browser.url('/');
            $('#logout').click();
            $('#email').getAttribute('placeholder');
            browser.pause(17000);
            assert.isTrue('placeholder'.isDisplayed());

        });

});
