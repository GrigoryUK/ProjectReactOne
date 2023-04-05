let profileId = '';
describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('profile');

        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль загрузился', () => {
        cy.getByTestId('ProfileCard.firstname').should(
            'have.value',
            'Admin12123ewr',
        );
    });
    it('Профиль редактируется', () => {
        const name = 'new';
        const lastname = 'last';
        cy.updateProfile(name, lastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', name);
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastname);
    });
});

export {};
