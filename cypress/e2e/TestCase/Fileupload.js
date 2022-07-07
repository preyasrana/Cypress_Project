describe('File upload App', () => {

    it('file upload scenario', () => {
        cy.viewport(1366, 768)
        cy.visit('http://automationpractice.com/index.php?controller=contact')

        const youtFixturepath = 'zymr-inc-vector-logo.png'
        cy.get('input#fileUpload', { timeout: 10000 }).attachFile(youtFixturepath)

    })

    it('Drag & Drop file upload scenario', () => {
        cy.viewport(1366, 768)
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')

        const youtFixturepath = 'zymr-inc-vector-logo.png'
        cy.get('#file', { timeout: 10000 }).attachFile(youtFixturepath)
        cy.get('div.box__success').should('contain.text', 'Done! ')
    })

    it('Multiple file upload scenario', () => {
        cy.viewport(1366, 768)
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const file1 = 'zymr-inc-vector-logo.png'
        const file2 = 'Artboard.png'
        const file3 = 'nature.jpeg'
        const file4 = 'sea.jpeg'

        cy.get('#filesToUpload')
            .attachFile(file1)
            .attachFile(file2)
            .attachFile(file3)
            .attachFile(file4)
        cy.get('p:nth-child(6) > strong:nth-child(1)').should('contain.text', 'Files You Selected:')
    })


})