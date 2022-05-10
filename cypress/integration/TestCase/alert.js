
describe('Alert App', () => {

    it('Alert scenario', () => {
        cy.viewport(1366, 768)
        cy.visit('https://nxtgenaiacademy.com/alertandpopup/')
        cy.get("button[name='alertbox']").click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })

    })

    it('Confirmation scenario', () => {
        cy.viewport(1366, 768)
        cy.visit('https://nxtgenaiacademy.com/alertandpopup/')
        cy.get("button[name='confirmalertbox']").click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Confirm pop up with OK and Cancel button')
        })

    })

    

})

