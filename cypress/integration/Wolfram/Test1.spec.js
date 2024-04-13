context('Wolfram Testing', () => {
    beforeEach(() => {
      cy.log('Visit WolframAlpha')
      cy.fixture('CypressData').then(data =>{
        cy.visit(data.main-url)
      })
    })
    it('Simple example ', () => {
      cy.fixture('CypressData').then(data =>{
        cy.log('Navigation to Elementary Math')
        cy.get('li[class = "_me8w"] a[class = "_1w_c _yeEl _3GLY"]').click()
  
        cy.log('Do basic arithmetic')
        cy.get('a[class = "_1w_c _yoe4 _1OQ2 _3zTk"]').eq(0).click()
  
        cy.log('Result check')
        cy.get('section[class = "_gtUC _3WIS"]').find('div[class="_3fR4"]').should(data.result)  
      })   
    })  
})

