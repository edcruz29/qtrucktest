class MapPage{

    loggedUser(name) {
    cy.get('p.logged-user')
    .should('be.visible')
    .should('have.text', `Olá, ${name}`)
    
    }

}
export default new MapPage()