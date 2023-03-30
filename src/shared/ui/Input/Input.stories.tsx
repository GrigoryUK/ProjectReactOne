import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input, InputTheme } from './Input'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})

Primary.args = {
  placeholder: 'placeholder',
  theme: InputTheme.PRIMARY
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  placeholder: 'placeholder',
  theme: InputTheme.PRIMARY
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const Clear = Template.bind({})
Clear.args = {
  placeholder: 'placeholder',
  theme: InputTheme.CLEAR
}

export const ClearDark = Template.bind({})
ClearDark.args = {
  placeholder: 'placeholder',
  theme: InputTheme.CLEAR
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]
