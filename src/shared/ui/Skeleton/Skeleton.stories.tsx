import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    border: '0.5em',
    width: '100%',
    height: 200,
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    border: '0.5em',
    width: '100%',
    height: 200,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});

Circle.args = {
    border: '50%',
    height: 100,
    width: 100,
};

export const CircleDark = Template.bind({});

CircleDark.args = {
    border: '50%',
    height: 100,
    width: 100,
};

CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
