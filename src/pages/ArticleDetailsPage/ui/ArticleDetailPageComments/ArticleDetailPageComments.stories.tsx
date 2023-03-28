import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleDetailPageComments } from './ArticleDetailPageComments'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailPageComments',
  component: ArticleDetailPageComments,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleDetailPageComments>

const Template: ComponentStory<typeof ArticleDetailPageComments> = (args) => <ArticleDetailPageComments {...args} />

export const Primary = Template.bind({})

Primary.args = {}
