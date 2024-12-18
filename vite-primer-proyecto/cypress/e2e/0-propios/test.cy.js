describe('Test de prueba', () => {
    it('Test de prueba', () => {
        cy.visit('https://ohpanel.jdev.com.ar/')
        cy.get('input[name="email"]').type('joaquin.mateos@jdev.com.ar', {delay: 50})
        cy.get('input[name="password"]').type('12312', {delay: 50})
        cy.get('button[type="submit"]').click()

        cy.contains('div', 'Credenciales inválidas').should('be.visible')
    })
})