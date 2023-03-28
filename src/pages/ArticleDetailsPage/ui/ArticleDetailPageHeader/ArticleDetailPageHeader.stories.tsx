import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleDetailPageHeader } from './ArticleDetailPageHeader'

export default {
  title: 'pages/ArticleDetailPage/ArticleDetailPageHeader',
  component: ArticleDetailPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleDetailPageHeader>

const Template: ComponentStory<typeof ArticleDetailPageHeader> = (args) => <ArticleDetailPageHeader {...args} />

export const Primary = Template.bind({})

Primary.args = {}
