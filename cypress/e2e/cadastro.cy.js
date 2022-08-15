describe('cadastro',()=>{


    it('deve cadastrar com sucesso', () => {

        const user ={
            name:"Teste3",
            instagram:"@teste3",
            password:"novoteste2"
        }
       
        cy.cadastrar(user)
        cy.modalHaveText("Agora você pode recomendar e/ou avaliar Food trucks.")
    });
    
    it('Não deve permitir cadastro de usuário duplicado', () => {

        const user ={
            name:"Teste3",
            instagram:"@teste3",
            password:"novoteste2"
        }

        cy.cadastrar(user)
        cy.modalHaveText("Instagram já cadastrado!")
    });
    it('nome obrigatório', () => {
        cy.visit('/signup')

        
        cy.get('input[name=instagram]').type("@KarineEd")
        cy.get('input[name=password]').type("pwn12345")

        cy.contains('button', 'Cadastrar').click()
        
        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text',"Por favor, informe o seu nome completo!")

    });
    it('instagram obrigatório', () => {
        cy.visit('/signup')

        cy.get('input[name=name]').type('Karine')
        
        cy.get('input[name=password]').type("pwn12345")

        cy.contains('button', 'Cadastrar').click()
        
        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', "Por favor, informe o seu código do Instagram!")

    });
    it('senha obrigatória', () => {
        cy.visit('/signup')

        cy.get('input[name=name]').type('Karine')
        cy.get('input[name=instagram]').type("@KarineEd")
        

        cy.contains('button', 'Cadastrar').click()
        
        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', "Por favor, informe a sua senha secreta!")
    });

    
    it('campos obrigatórios', () => {
        cy.visit('/signup')

        cy.contains('button', 'Cadastrar').click()
        
        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text',"Por favor, preencha todos os campos!")
        
    });
   /* it('formato correto instagram', () => {
        cy.visit('/signup')

        cy.get('input[name=name]').type('Karine')
        cy.get('input[name=instagram]').type("KarineEd")
        cy.get('input[name=password]').type("pwn12345")

        cy.contains('button', 'Cadastrar').click()
        
    });
    it('senha menor que 6 digitos', () => {
        cy.visit('/signup')

        cy.get('input[name=name]').type('Karine')
        cy.get('input[name=instagram]').type("KarineEd")
        cy.get('input[name=password]').type("p")

        cy.contains('button', 'Cadastrar').click()
        
    });*/

})