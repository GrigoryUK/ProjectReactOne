/// <reference types="cypress" />

import { selectByTestId } from '../../helpers/selectByTestId';
describe('Роутинг', () => {
    describe('Пользователь авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Попытка перехода без авторизации', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Попытка перехода на несуществующию страницу', () => {
            cy.visit('/sdfds');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь  не авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });
        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Переход открывает страницу со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});

export {};
