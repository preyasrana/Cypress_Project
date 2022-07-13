// test suite name


describe('Tutorialspoint Test', function () {
   // Test case
   it('Scenario 1', function () {
      // test step for URL launching
      cy.viewport(1366, 768)
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.wait(200)

      cy.get('div.products div.product').each(($el, index, $list) => {

         const headervalue = $el.find('h4').text()

         cy.log(' Name: ' + headervalue)
         if (headervalue.includes('Brocolli - 1 Kg')) {

            cy.wrap($el).find('button').click()
         }
      });

      cy.get('a.cart-icon').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()










   });
});