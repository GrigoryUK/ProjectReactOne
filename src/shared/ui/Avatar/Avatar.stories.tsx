import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import AvatarImg from '../../assets/avatar.png'

import { Avatar } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  src: AvatarImg,
  size: 150
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  src: AvatarImg,
  size: 50
}
