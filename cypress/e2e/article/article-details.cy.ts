let currentArticleId = ''
describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      currentArticleId = article.id
      cy.log(JSON.stringify(article))
      cy.visit(`articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })
  it.skip('И видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })
  it.skip('И видит список рекоммендаций', () => {
    cy.getByTestId('ArticleRecommendationList').should('exist')
  })
  it.skip('И оставляет комментарий (Пример заскипанного теста)', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('text')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })
  it('И ставит оценку', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })
})

export {}
