export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: 'asdfs',
        },
        body: {
            id: '1',
            first: 'Admin12123ewr',
            lastname: 'Usoltsev',
            age: 22234,
            currency: 'EUR',
            country: 'Russia',
            city: 'Ekaterinburg',
            username: 'admin',
            avatar: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/07/Cat-Virus-Exe-Funny-Pics-123-62c2f23a1a130__700.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
