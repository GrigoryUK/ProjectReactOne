import { screen } from '@testing-library/react';

import { Navbar } from './Navbar';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('Navbar', () => {
    test('with only first param', () => {
        componentRender(<Navbar />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
