describe('Login application flow', () => {
  /**
   * Skenario: login berhasil
   * - pengguna membuka halaman login dan mengisi kredensial valid;
   * - API login dan profil mengembalikan respons sukses;
   * - aplikasi mengarahkan pengguna ke beranda dan menampilkan identitasnya.
   */
  it('should log in and redirect the user to the home page', () => {
    cy.intercept('POST', '**/v1/login', { statusCode: 200, body: { status: 'success', data: { token: 'e2e-token' } } }).as('login');
    cy.intercept('GET', '**/v1/users/me', { statusCode: 200, body: { status: 'success', data: { user: { id: 'user-e2e', name: 'Reza E2E', email: 'reza@example.com', avatar: 'https://example.com/avatar.png' } } } }).as('profile');
    cy.intercept('GET', '**/v1/threads', { statusCode: 200, body: { status: 'success', data: { threads: [] } } });
    cy.intercept('GET', '**/v1/users', { statusCode: 200, body: { status: 'success', data: { users: [] } } });
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type('reza@example.com');
    cy.get('[data-testid="password-input"]').type('rahasia123');
    cy.get('[data-testid="login-button"]').click();
    cy.wait('@login');
    cy.wait('@profile');
    cy.location('pathname').should('eq', '/');
    cy.get('img[alt="Reza E2E"]').should('be.visible');
  });
});
