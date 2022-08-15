describe('Login', () => {

  
  it('deve logar com sucesso', () => {

    const user={
      instagram:"@edubehemoth",
      password:"cDz#2020"
    }
    const name="Eduardo"
    cy.login(user)
    cy.loggedUsers(name)
  })
  it('não deve logar com senha inválida', () => {

    const user={
      instagram:"@edubehemoth",
      password:"cDz#2022"
    }
    const text="Credenciais inválidas, tente novamente!"
    

    cy.login(user)
    cy.modalHaveText(text)

  });

  it('não deve logar com instagram inexistente', () => {

    const user={
      instagram:"@behemothedu",
      password:"cDz#2022"
    }
    const text="Credenciais inválidas, tente novamente!"
    cy.login(user)

    cy.modalHaveText(text)

  });

  it('não deve logar com instagram fora do padrão', () => {
    const user={
      instagram:"edubehemoth",
      password:"cDz#2022"
    }
   const  text="Credenciais inválidas, tente novamente!"
    cy.login(user)
    cy.modalHaveText(text)

  });

  it('instagram obrigatório', () => {

    const user={
      password:"cDz#2022"
    }
    const  text="Por favor, informe o seu código do Instagram!"
    cy.instagramObrigatorio(user)
    cy.modalHaveText(text)
    
  });

  it('senha obrigatória', () => {

    const user={
      instagram:"@behemothedu"
    }
    const  text="Por favor, informe a sua senha secreta!"
    cy.senhaObrigatoria(user)
    cy.modalHaveText(text)
    
  });

  it('campos nulos', () => {
    const  text="Por favor, informe suas credenciais!"
    cy.vazios()
    
    cy.modalHaveText(text)

  });

})