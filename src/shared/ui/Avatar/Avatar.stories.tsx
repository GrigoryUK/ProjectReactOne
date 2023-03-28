import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImg from '../../assets/avatar.png'

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
