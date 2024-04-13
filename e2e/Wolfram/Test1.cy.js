context('Wolfram Testing', () => {
    beforeEach(() => {
      cy.log('Visit WolframAlpha')
      cy.fixture('Cypress.json').then(data =>{
        cy.visit(data.main_url)
      })
    })
    it('Simple example ', () => {
      cy.fixture('Cypress.json').then(data =>{
        cy.log('Navigation to Elementary Math')
        cy.get('li[class = "_me8w"] a[class = "_1w_c _yeEl _3GLY"]').click()
  
        cy.log('Do basic arithmetic')
        cy.get('a[class = "_1w_c _yoe4 _1OQ2 _3zTk"]').eq(0).click()
  
        cy.log('Result check')
        cy.get('section[class = "_gtUC _3WIS"]').eq(1).click()

        cy.log('Getiint step-by-step solution')
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.get('span[class = ""]').eq(5).should('have.text', data.test1_result)

      })   
    })  
})

