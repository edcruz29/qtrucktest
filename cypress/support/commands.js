
//Login
Cypress.Commands.add('login', (user)=>{
    cy.visit('/')

    cy.get('input[name=instagram]').type(user.instagram)
    cy.get('input[name=password]').type(user.password)

    cy.contains('button', 'Entrar').click()
  })
  Cypress.Commands.add('vazios',()=>{
    cy.visit('/')
    cy.contains('button', 'Entrar').click()
  })

  Cypress.Commands.add('modalHaveText', (text)=>{
    

    cy.get('.swal2-html-container')
    .should('be.visible')
    .should('have.text',text)
  })

  Cypress.Commands.add('loggedUsers', (name)=>{
    
    cy.get('p.logged-user')
    .should('be.visible')
    .should('have.text', `Olá, ${name}`)
   
  })

  Cypress.Commands.add('senhaObrigatoria', (user)=>{
    cy.visit('/')

    cy.get('input[name=instagram]').type(user.instagram)

    cy.contains('button', 'Entrar').click()
  })

  Cypress.Commands.add('instagramObrigatorio', (user)=>{
  

    cy.get('input[name=password]').type(user.password)
    cy.contains('button', 'Entrar').click()
  })


//CADASTRO 
  Cypress.Commands.add('cadastrar', (user)=>{

    cy.visit('/signup')

    cy.get('input[name=name]').type(user.name)
    cy.get('input[name=instagram]').type(user.instagram)
    cy.get('input[name=password]').type(user.password)

    cy.contains('button', 'Cadastrar').click()

  })