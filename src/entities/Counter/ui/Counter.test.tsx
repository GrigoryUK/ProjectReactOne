import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './Counter';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
    test('with only first param', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('btn-increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('btn-decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
