context('Geometry', ()=>{
    beforeEach(()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.visit(data.main_url)
        })
    })
    it('cylinder plots building', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.cylinder)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Check the graph")
            cy.get('div[class = "_3fR4"]').should('exist')  
        })
    })

    it('a triangle with given side lengths', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.triangle)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3200)
            
            cy.log("Check the graph")
            cy.get('div[class="_3fR4"]').should('exist')  
        })
    })

    it('line through two dots', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.line)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Check the graph")
            cy.get('div[class = "_3fR4"]').should('exist')  
        })
    })
})