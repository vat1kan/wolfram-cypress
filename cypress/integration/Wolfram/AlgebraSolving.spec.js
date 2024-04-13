context('AlgebraSolving', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.wolframalpha.com/')
    })
    it('simple equation solving', ()=>{
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("x+3=5")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(2).click()
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(5).should('have.text','x = 2')

        cy.log("Check plot is exist")
        cy.get('div[class = "_3fR4"]')
        .should('exist')
    })
    it('system of linearequations solving', ()=>{

        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("6x-4y=12, 5x+4y=32")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(1).click()
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(5).should('have.text','x = 4, y = 3')

    })
    it('partial fractions', ()=>{
        
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("partial fractions (x^2-4)/(x^4-x)")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(1).click()
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(5).should('have.text','(x^2 - 4)/(x^4 - x) = (-3 x - 1)/(x^2 + x + 1) - 1/(x - 1) + 4/x')
    })

    it('simplify the root expression', ()=>{
        
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("1/(1+sqrt(2))")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(2).click()
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(6).should('have.text','sqrt(2) - 1')
    })
    it('simplify power expression', ()=>{
        
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("simplify x^5-20x^4+163x^3-676x^2+1424x-1209")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(1).click()
        cy.get('svg[class = "_1bUR"]').eq(3).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(5).should('have.text','(x - 4)^5 + 3 (x - 4)^3 + 7')
    })
    it('matrix determinant', ()=>{
        
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type('{{4,1,2},{2,-1,1},{3,1,2}}')
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(4).click()
        cy.get('svg[class = "_1bUR"]').eq(3).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(6).should('have.text','-3')
    })
})