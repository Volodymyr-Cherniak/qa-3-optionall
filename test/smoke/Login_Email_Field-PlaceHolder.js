describe('Login', function () {

    describe('Email', function () {

        it('Place Holder', function () {
             browser.url('/');
             let input = $('#email');
             let plhldr = $$('#placeholder')[0];
             console.log(plhldr);
            browser.pause(7000);
            browser.isElementDisplayed(plhldr);
            assert.equal(plhldr, true );
             //let elem1
        //     input.addValue('j'.repeat(maxLenght));
        //     let actual = input.getValue().length;
        //     input.clearValue();
        //     assert.equal(actual, maxLenght);
        // })
        //
        // it('Max Characters + 1', function () {
        //     let input = $('#email');
        //     input.addValue('j'.repeat(maxLenght + 1));
        //     let actual = input.getValue().length;
        //     assert.equal(actual, maxLenght);
        // })

        // it('login check', function () {
        //     browser.url('/');
        //     let input = $('#email');
        //     input.addValue('vovastalker26@gmail.com');
        //     //browser.pause(100);
        //     let input2 = $('#pass');
        //     input2.addValue('strellok');
        //     let btnLogin = $('#login');
        //     //browser.pause(1000);
        //     btnLogin.click();
        //     //browser.pause(1000)
        //     let leftUpFField = $('.text-left');
        //     leftUpFField.click();
        //     browser.pause(7000);
        // })

       // it('login check', function () {


        })
    })

});


