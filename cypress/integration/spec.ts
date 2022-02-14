describe('Task Tracker test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
  });

  it('Clicks the green add button and the form shows up', () => {
    cy.get('[data-test-id="btn-add-task"]').click();
    cy.get('[data-test-id="add-task-form"]').should('be.visible')
  });

  it('Has certain inputs avavailble for user to use', () => {
    cy.get('[data-test-id="input-task"]').should('be.visible')
    cy.get('[data-test-id="input-time"]').should('be.visible')
    cy.get('[data-test-id="input-reminder"]').should('be.visible')
    cy.get('[data-test-id="input-save-task"]').should('be.visible')
  })

  it('Has a route to about page', () => {
    cy.intercept('GET', 'https://localhost:4200/about');
  })

  it('Clicks the about link and shows certain information and the route back to homepage', () => {
    cy.get('[data-test-id="about-link"]').click();
    cy.contains('Task Tracker');
    cy.contains('Version: 1.0.0');
  })

  it('Clicks the home link and back to the home page', () => {
    cy.get('[data-test-id="home-page-link"]').click();
    cy.get('[data-test-id="btn-add-task"]').contains('Add');
  })

  it('Create a task with task input, time input and check reminder', () => {
    cy.get('[data-test-id="btn-add-task"]').click();
    cy.get('[data-test-id="input-task"]').type('Going to have a DATE');
    cy.get('[data-test-id="input-time"]').type('2022-02-14');
    cy.get('[data-test-id="input-reminder"]').check();
    cy.get('[data-test-id="input-save-task"]').click();

    cy.contains('Going to have a DATE');
    cy.contains('2022-02-14');
  })

  it('Double clicks the card to cancel the reminder and double clicks again to set the reminder', () => {
    cy.get('[data-test-id="task-card"]').contains('Going to have a DATE').dblclick();
    cy.get('[data-test-id="task-card"]').contains('Going to have a DATE').should('not.have.class', '.task');
    cy.get('[data-test-id="task-card"]').dblclick();
    cy.get('[data-test-id="task-card"]').should('have.class', 'task');
  })

  it('Deletes the task', () => {
    cy.get('[data-test-id="task-card"]').get(`[data-test-id="delete-task"]`).click();
    cy.get('[data-test-id="task-card"]').should('not.exist');
  })
})
