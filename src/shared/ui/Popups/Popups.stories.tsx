import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Popups } from './Popups'

export default {
  title: 'shared/Popups',
  component: Popups,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Popups>

const Template: ComponentStory<typeof Popups> = (args) => <Popups {...args} />

export const Primary = Template.bind({})

Primary.args = {}
