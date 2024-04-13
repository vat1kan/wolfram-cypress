context('Navigation',()=>{
    beforeEach(()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.visit(data.main_url)
        })
    })

    it('Upgrade to pro button testing',()=>{
        cy.get('button[class = "_1w_c _33TR _1axH"]').eq(0).click()

        cy.get('ul[class = "_1bOe"]').should('exist')

        cy.get('a[class="_1w_c _1rgD _3S9k"]').eq(1).click()

        cy.location('pathname').should('include', '/pro')
    })

    it('Web-app button testing',()=>{
        cy.get('button[class = "_1w_c _33TR _1axH"]').eq(1).click()

        cy.get('ul[class = "_1bOe"]').should('exist')

        cy.get('a[class="_1w_c _33TR _ii3I"]').eq(0).click()

        cy.location('pathname').should('include', '/web-apps')
    })

    it('Problem generator button testing',()=>{
        cy.get('button[class = "_1w_c _33TR _1axH"]').eq(1).click()

        cy.get('ul[class = "_1bOe"]').should('exist')

        cy.get('a[class="_1w_c _33TR _ii3I"]').eq(1).click()

        cy.location('pathname').should('include', '/problem-generator/')
    })

    it('Mobile Apps button testing',()=>{
        cy.get('button[class = "_1w_c _33TR _1axH"]').eq(1).click()

        cy.get('ul[class = "_1bOe"]').should('exist')

        cy.get('a[class="_1w_c _33TR _ii3I"]').eq(2).click()

        cy.location('pathname').should('include', '/mobile/')
    })
    
    it('Tour button testing',()=>{
        cy.get('a[class = "_1w_c _33TR _1axH"]').click()

        cy.location('pathname').should('include', '/tour')
    })


})