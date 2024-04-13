context('Analysis', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.wolframalpha.com/')
    })
    
    it('indefinite integral solution', ()=>{
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("integrate x^2 sin x dx")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(5).should('have.text','integral x^2 sin(x) dx = 2 x sin(x) - (x^2 - 2) cos(x) + constant')
    })

    it('definite integral solution', ()=>{
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("integrate sin x dx from x=0 to pi")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(5).should('have.text','integral_0^π sin(x) dx = 2')
    })

    it('the derivative of a function', ()=>{
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("derivative of x^2 sin x")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(5).should('have.text','d/dx(x^2 sin(x)) = x (2 sin(x) + x cos(x))')
    })

    it('solution of higher derivatives', ()=>{
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("second derivative of sin(2x)")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(5).should('have.text','d^2/dx^2(sin(2 x)) = -4 sin(2 x)')
    })

    it('solution of a limit', ()=>{
        cy.log("Testing form and typing equation in it")
        cy.get('div[class = "_2S7m"]').click()
        .type("lim (sin x - x)/x^3 as x->0")
        
        cy.log("Get solving button click")
        cy.get('button[type = "submit"]').click()
        cy.wait(3000)
        
        cy.log("Get a step-by-step solution")
        cy.get('section[class = "_gtUC _3WIS"]').eq(0).click()
        cy.get('svg[class = "_1bUR"]').eq(4).click()

        cy.log("Check the result")
        cy.get('span[class = ""]').eq(6).should('have.text','lim_(x->0) (sin(x) - x)/x^3 = -1/6')
    })
})