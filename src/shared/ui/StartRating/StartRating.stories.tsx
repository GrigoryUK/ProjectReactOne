import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StartRating } from './StartRating'

export default {
  title: 'shared/StartRating',
  component: StartRating,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof StartRating>

const Template: ComponentStory<typeof StartRating> = (args) => <StartRating {...args} />

export const Primary = Template.bind({})

Primary.args = {}
