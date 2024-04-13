context('Sign In page test', () => {
    beforeEach(() => {
      cy.fixture('Cypress.json').then(data=>{
        cy.visit(data.auth_url)
      })
    })
    it('invalid email', () => {
      cy.log("Trying to continue with an empty input form")
      cy.get('button[class = "submit-btn btn-primary"]').click()

      cy.log("Cheching for an error message")
      cy.get('div[class = "alert alert-danger"]').should('exist') 
    })
    it('tooltip check', () =>{
      cy.log("Checking for an info by clicking on icon.")
      cy.get('span[class = "icon icon-question-mark"]').click()
      cy.get('span[class = "tooltiptext tooltip-bottom"]')
      .should('exist')
    })
    it('email writing', () => {
      cy.fixture('Cypress.json').then(data =>{
        cy.log("Checking an input form for typing")
        cy.get('input[type = "email"]')
        .type(data.test_mail)
        .should('have.value',data.test_mail)
      })
    })
})