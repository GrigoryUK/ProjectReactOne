import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    comments: [
        {
            id: '1',
            text: 'hello',
            user: { id: '1', username: 'huy' },
        },
        {
            id: '2',
            text: 'hello2',
            user: { id: '2', username: 'huysdf' },
        },
    ],
};

export const IsLoading = Template.bind({});

IsLoading.args = {
    comments: [
        {
            id: '1',
            text: 'hello',
            user: { id: '1', username: 'huy' },
        },
        {
            id: '2',
            text: 'hello2',
            user: { id: '2', username: 'huysdf' },
        },
    ],
    isLoading: true,
};
