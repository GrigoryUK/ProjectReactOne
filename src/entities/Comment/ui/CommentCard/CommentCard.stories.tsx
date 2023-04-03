import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { CommentCard } from './CommentCard'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  comment: {
    id: '1',
    text: 'hello',
    user: { id: '1', username: 'huy' }
  }
}

export const isLoading = Template.bind({})

isLoading.args = {
  isLoading: true
}
