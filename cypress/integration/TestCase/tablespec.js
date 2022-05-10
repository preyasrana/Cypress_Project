describe('Table Spec App', () => {

    it('tablespec scenario', () => {

        cy.viewport(1366, 768)
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get("table[name='BookTable']").contains('td', 'Learn Java').should('be.visible')


        cy.get("table[name='BookTable'] tr td:nth-child(2)").each(($e1,index,$list) => {

            const text = $e1.text()

            if(text.includes("Amod"))
            {
                cy.get("table[name='BookTable'] tr td:nth-child(1)").eq(index).then(function(bname)
                {
                      const bookname = bname.text()
                      expect(bookname).to.equal("Master In Java")
                })
            }

        })

    })

})