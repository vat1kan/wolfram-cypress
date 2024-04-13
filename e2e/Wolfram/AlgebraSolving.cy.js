context('AlgebraSolving', ()=>{
    beforeEach(()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.visit(data.main_url)  
        })
    })

    it('simple equation solving', ()=>{
        cy.fixture('Cypress.json').then(data =>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.equation)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(2).click()
            cy.get('svg[class = "_1bUR"]').eq(4).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(5).should('have.text',data.eq_result)
    
            cy.log("Check plot is exist")
            cy.get('div[class = "_3fR4"]')
            .should('exist')
        })
    })

    it('system of linear equations solving', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.system)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(1).click()
            cy.get('svg[class = "_1bUR"]').eq(4).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(5).should('have.text',data.sys_result)  
        })
    })

    it('partial fractions', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.fraction)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(1).click()
            cy.get('svg[class = "_1bUR"]').eq(4).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(5).should('have.text',data.partion_fractions)  
        })
    })

    it('simplify the root expression', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.root)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(2).click()
            cy.get('svg[class = "_1bUR"]').eq(4).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(6).should('have.text',data.root_solve)  
        })
    })

    it('simplify power expression', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.power)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(1).click()
            cy.get('svg[class = "_1bUR"]').eq(3).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(5).should('have.text',data.power_solve)  
        })
    })
})