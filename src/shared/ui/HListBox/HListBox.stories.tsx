import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { HListBox } from './HListBox';

export default {
    title: 'shared/HListBox',
    component: HListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HListBox>;

const Template: ComponentStory<typeof HListBox> = (args) => (
    <HListBox {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
