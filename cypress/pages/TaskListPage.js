export class TaskListPage {
  addList(name) {
    cy.get("div[class='create-board hover:bg-gray7'] h1").click();
    cy.get('[data-cy=new-list-input]').type(name);
    cy.get("div[class='create-board hover:bg-gray7'] h1").click();
  }

  verifyListCount(expected) {
    cy.get('[data-cy=list-name]').should('have.length', expected);
  }

  deleteList(name) {
    cy.contains('[data-cy=list-name]', name)
      .parents('[data-cy=list-card]')
      .within(() => {
        cy.get('[data-cy=delete-list-btn]').click();
      });
  }
}
