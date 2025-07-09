export class BoardPage {
  createBoard(name) {
    cy.get('[data-cy=board-name-input]').type(`${name}{enter}`);
  }

  verifyBoardExists(name) {
    cy.contains('[data-cy=board-title]', name).should('be.visible');
  }
}
