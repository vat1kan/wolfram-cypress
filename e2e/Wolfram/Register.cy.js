context('Register account page test', ()=>{
    beforeEach(()=>{
        cy.fixture('Cypress.json').then(data=>{
            cy.visit(data.register_url)
        })
    })

    it('incorrect email input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              })
          cy.log("Type invalid email")
          cy.get('input[id = "email"]').click()
          .type(data.invalid_mail)
          .should('have.value','invalid_mail/com')
          
          cy.log("Expected error message")
          cy.get('button[id = "create-id-btn"]').click()
          cy.get('div[class = "alert alert-danger"]')
          .should('exist')
        })
    })

    it('correct email input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              });
            cy.log("Type correct mail")
            cy.get('input[id = "email"]').click()
            .type(data.test_mail)
            .should('have.value','test@mail.com')
    
            cy.log("Expected that error message doesnt exist")
            cy.get('button[id = "create-id-btn"]').click()
            cy.contains('div[class = "alert alert-danger"]').should('not.exist')
        })
    })

    it('incorrect name input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              })
          cy.log("Type invalid first name")
          cy.get('input[id = "firstName"]').click()
          .type(data.incorr_name)
          .should('have.value',data.incorr_name)
  
          cy.log("Expected error message")
          cy.get('button[id = "create-id-btn"]').click()
          cy.get('div[class = "alert alert-danger"]')
          .should('exist')  
        })
    })

    it('correct name input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              });
            cy.log("Type correct first name")
            cy.get('input[id = "firstName"]').click()
            .type(data.corr_name)
            .should('have.value',data.corr_name)
    
            cy.log("Expected error message")
            cy.get('button[id = "create-id-btn"]').click()
            cy.contains('div[class = "alert alert-danger"]').should('not.exist')        
        })
    })

    it('incorrect lastname input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              })
          cy.log("Type invalid last name")
          cy.get('input[id = "lastName"]').click()
          .type(data.incorr_lastname)
          .should('have.value',data.incorr_lastname)
  
          cy.log("Expected error message")
          cy.get('button[id = "create-id-btn"]').click()
          cy.get('div[class = "alert alert-danger"]')
          .should('exist')  
        })
    })

    it('correct lastname input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              });
            cy.log("Type correct first name")
            cy.get('input[id = "lastName"]').click()
            .type(data.corr_lastname)
            .should('have.value',data.corr_lastname)
    
            cy.log("Expected error message doesnt exist")
            cy.get('button[id = "create-id-btn"]').click()
            cy.contains('div[class = "alert alert-danger"]').should('not.exist')  
        })
    })

    it('incorrect password input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              })
          cy.log("Type invalid password(less than 8 symols)")
          cy.get('input[id = "password"]').click()
          .type(data.incorr_pass)
          .should('have.value',data.incorr_pass)
  
          cy.log("Expected error message")
          cy.get('button[id = "create-id-btn"]').click()
          cy.get('div[class = "alert alert-danger"]')
          .should('exist')  
        })
    })

    it('correct password input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              });
            cy.log("Type correct password(8 symbols)")
            cy.get('input[id = "password"]').click()
            .type(data.true_pass)
            .should('have.value',data.true_pass)
    
            cy.log("Expected error message doenst exist")
            cy.get('button[id = "create-id-btn"]').click()
            cy.contains('div[class = "alert alert-danger"]').should('not.exist')  
        })
    })
    it('incorrect password input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              })
          cy.log("Type incorrect password")
          cy.get('input[id = "passwordConfirm"]').click()
          .type(data.incorr_pass)
          .should('have.value',data.incorr_pass)
  
          cy.log("Expected error message")
          cy.get('button[id = "create-id-btn"]').click()
          cy.get('div[class = "alert alert-danger"]')
          .should('exist')  
        })
    })

    it('correct password confirm input form', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              });
    
            cy.log("Type correct password")
            cy.get('input[id = "passwordConfirm"]').click()
            .type(data.true_pass)
            .should('have.value',data.true_pass)
    
            cy.log("Expected error message doesnt exist")
            cy.get('button[id = "create-id-btn"]').click()
            cy.contains('div[class = "alert alert-danger"]').should('not.exist')  
        })
    })
    it('checkbox check', () =>{
        cy.fixture('Cypress.json').then(data=>{
            cy.on('uncaught:exception', () => {
                return false
              })
          cy.get('input[id = "accountAgreement1"]')
          .should('value','true')
          cy.get('button[id = "create-id-btn"]').click()  
        })
    })

})