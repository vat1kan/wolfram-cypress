context('Analysis', ()=>{
    beforeEach(()=>{
        cy.log('Visit WolframAplha')
        cy.fixture('Cypress.json').then(data =>{
            cy.visit(data.main_url)
        })
    })
    
    it('indefinite integral solution', ()=>{
        cy.fixture('Cypress.json').then(data =>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.ind_integ)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
            cy.get('svg[class = "_1bUR"]').eq(4).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(5).should('have.text',data.integ_wrong)
        })
    })

    it('definite integral solution', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.def_int)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
            cy.get('svg[class = "_1bUR"]').eq(4).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(5).should('have.text',data.def_result)
        })
    })
    // testing of derivativing of a function
    it('the derivative of a function', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.der_func)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
            cy.get('svg[class = "_1bUR"]').eq(4).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(5).should('have.text',data.der_result)
        })
    })

    it('solution of higher derivatives', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.high_der)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
            cy.get('svg[class = "_1bUR"]').eq(4).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(5).should('have.text',data.high_result)
        })
    })

    it('solution of a limit', ()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.log("Testing form and typing equation in it")
            cy.get('div[class = "_2S7m"]').click()
            .type(data.limit)
            
            cy.log("Get solving button click")
            cy.get('button[type = "submit"]').click()
            cy.wait(3000)
            
            cy.log("Get a step-by-step solution")
            cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
            cy.get('svg[class = "_1bUR"]').eq(4).click()
    
            cy.log("Check the result")
            cy.get('span[class = ""]').eq(6).should('have.text',data.lim_result)
        })
    })
})