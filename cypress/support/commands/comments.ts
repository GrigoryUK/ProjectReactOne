export const addComment = (text: string) => {
  cy.getByTestId('AddCommentForm.Input').clear().type(text)
  cy.getByTestId('AddCommentForm.Button').click()
}

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
