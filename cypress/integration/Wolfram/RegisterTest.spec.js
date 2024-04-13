context('Register account page test', ()=>{
    beforeEach(()=>{
        cy.visit('https://account.wolfram.com/login/create')

    })
    it('incorrect email input form', () =>{
        cy.on('uncaught:exception', () => {
              return false
            })
        cy.log("Type invalid email")
        cy.get('input[id = "email"]').click()
        .type('invalid_mail/com')
        .should('have.value','invalid_mail/com')
        
        cy.log("Expected error message")
        cy.get('button[id = "create-id-btn"]').click()
        cy.get('div[class = "alert alert-danger"]')
        .should('exist')

    })
    it('correct email input form', () =>{
        cy.on('uncaught:exception', () => {
            return false
          });
        cy.log("Type correct mail")
        cy.get('input[id = "email"]').click()
        .type('test@mail.com')
        .should('have.value','test@mail.com')

        cy.log("Expected that error message doesnt exist")
        cy.get('button[id = "create-id-btn"]').click()
        cy.contains('div[class = "alert alert-danger"]').should('not.exist')
    })
    it('incorrect name input form', () =>{
        cy.on('uncaught:exception', () => {
              return false
            })
        cy.log("Type invalid first name")
        cy.get('input[id = "firstName"]').click()
        .type('N4M3')
        .should('have.value','N4M3')

        cy.log("Expected error message")
        cy.get('button[id = "create-id-btn"]').click()
        cy.get('div[class = "alert alert-danger"]')
        .should('exist')

    })
    it('correct name input form', () =>{
        cy.on('uncaught:exception', () => {
            return false
          });
        cy.log("Type correct first name")
        cy.get('input[id = "firstName"]').click()
        .type('Name')
        .should('have.value','Name')

        cy.log("Expected error message")
        cy.get('button[id = "create-id-btn"]').click()
        cy.contains('div[class = "alert alert-danger"]').should('not.exist')
    })
    it('incorrect lastname input form', () =>{
        cy.on('uncaught:exception', () => {
              return false
            })
        cy.log("Type invalid last name")
        cy.get('input[id = "lastName"]').click()
        .type('l4stn4m3')
        .should('have.value','l4stn4m3')

        cy.log("Expected error message")
        cy.get('button[id = "create-id-btn"]').click()
        cy.get('div[class = "alert alert-danger"]')
        .should('exist')

    })
    it('correct lastname input form', () =>{
        cy.on('uncaught:exception', () => {
            return false
          });
        cy.log("Type correct first name")
        cy.get('input[id = "lastName"]').click()
        .type('Lastname')
        .should('have.value','Lastname')

        cy.log("Expected error message doesnt exist")
        cy.get('button[id = "create-id-btn"]').click()
        cy.contains('div[class = "alert alert-danger"]').should('not.exist')
    })
    it('incorrect password input form', () =>{
        cy.on('uncaught:exception', () => {
              return false
            })
        cy.log("Type invalid password(less than 8 symols)")
        cy.get('input[id = "password"]').click()
        .type('pa33')
        .should('have.value','pa33')

        cy.log("Expected error message")
        cy.get('button[id = "create-id-btn"]').click()
        cy.get('div[class = "alert alert-danger"]')
        .should('exist')

    })
    it('correct password input form', () =>{
        cy.on('uncaught:exception', () => {
            return false
          });
        cy.log("Type correct password(8 symbols)")
        cy.get('input[id = "password"]').click()
        .type('p4ssw0rd')
        .should('have.value','p4ssw0rd')

        cy.log("Expected error message doenst exist")
        cy.get('button[id = "create-id-btn"]').click()
        cy.contains('div[class = "alert alert-danger"]').should('not.exist')
    })
    it('incorrect password input form', () =>{
        cy.on('uncaught:exception', () => {
              return false
            })
        cy.log("Type incorrect password")
        cy.get('input[id = "passwordConfirm"]').click()
        .type('pa33')
        .should('have.value','pa33')

        cy.log("Expected error message")
        cy.get('button[id = "create-id-btn"]').click()
        cy.get('div[class = "alert alert-danger"]')
        .should('exist')

    })
    it('correct password confirm input form', () =>{
        cy.on('uncaught:exception', () => {
            return false
          });

        cy.log("Type correct password")
        cy.get('input[id = "passwordConfirm"]').click()
        .type('p4ssw0rd')
        .should('have.value','p4ssw0rd')

        cy.log("Expected error message doesnt exist")
        cy.get('button[id = "create-id-btn"]').click()
        cy.contains('div[class = "alert alert-danger"]').should('not.exist')
    })
    it('checkbox check', () =>{
        cy.on('uncaught:exception', () => {
              return false
            })
        cy.get('input[id = "accountAgreement1"]')
        .should('value','true')
        cy.get('button[id = "create-id-btn"]').click()
    })

})