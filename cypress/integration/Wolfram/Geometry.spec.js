context('Geometry', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.wolframalpha.com/')
    })
    it('cylinder plots building', ()=>{
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("cylinder")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Check the graph")
        cy.get('div[class = "_3fR4"]').should('exist')
    })
    it('a triangle with given side lengths', ()=>{
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("5, 12, 13 triangle")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Check the graph")
        cy.get('div[class = "_3fR4"]').should('exist')
    })
    it('line through two dots', ()=>{
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("line through (1,2) and (2,1)")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Check the graph")
        cy.get('div[class = "_3fR4"]').should('exist')
    })
})