// test suite name

/// <reference types="cypress"/>
describe('Tutorialspoint Test', function () {
   // Test case
   it('Scenario 1', function () {
      // test step for URL launching
      cy.viewport(1366, 768)
      cy.visit("https://www.nykaafashion.com/");
      cy.wait(200)
      
      //alias create in cypress
      cy.get("div[class='css-1xh7gv9'] a:visible").as('menulocator')


      cy.get('@menulocator').should('have.length', '6')
      cy.get('@menulocator').eq(1).contains('Men')
       //log method to print output  with then method 
      cy.wait(2000)
      cy.get("div[class='css-r5u4mn'] span").then(function (ele) {
         cy.log('banner textName'+ele.text()).should('have.text','Download the Nykaa Fashion app and get ₹150 off*. Use code: NF150')
      })
      cy.get('@menulocator').each(($el, index, $list) => {

         const headervalue = $el.find("span").text()
         cy.log(' Name: ' + headervalue)
         if (headervalue.includes('Men')) {
            cy.wrap($el).find('span').click()
         }
      })


      /*
      cy.get('button[class="cp-header  css-1skuidv"] div').each(($el, index, $list) => {

         const headervalue = $el.text()
         cy.log(' Name: ' + headervalue)
         if (headervalue.includes('Watches')) {
            cy.wrap($el).click()
         }
      })*/
      
      
      

       



   });
});