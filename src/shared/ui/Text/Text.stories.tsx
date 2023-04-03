import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Header',
  text: 'Text text text text'
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Header',
  text: 'Text text text text'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryError = Template.bind({})

PrimaryError.args = {
  title: 'Header',
  text: 'Text text text text',
  theme: TextTheme.ERROR
}

export const PrimaryErrorDark = Template.bind({})

PrimaryErrorDark.args = {
  title: 'Header',
  text: 'Text text text text',
  theme: TextTheme.ERROR
}

PrimaryErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Text text text text'
}

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Text text text text'
}

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Header'
}

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Header'
}

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeM = Template.bind({})

SizeM.args = {
  title: 'Header',
  text: 'Text text text text',
  size: TextSize.M
}

export const SizeL = Template.bind({})

SizeL.args = {
  title: 'Header',
  text: 'Text text text text',
  size: TextSize.L
}
