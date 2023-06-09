import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...(args as typeof ProfilePage)} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                lastname: '123',
                first: '123',
                country: Country.Belarus,
                currency: Currency.RUB,
                city: '123',
                age: 22,
            },
        },
    }),
];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
