import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}

Outlined.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlinedDark = Template.bind({})
OutlinedDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Collapse = Template.bind({})
Collapse.args = {
  children: '>',
  theme: ButtonTheme.COLLAPSE
}
Collapse.decorators = [ThemeDecorator(Theme.LIGHT)]
export const CollapseDark = Template.bind({})
CollapseDark.args = {
  children: '>',
  theme: ButtonTheme.COLLAPSE
}
CollapseDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlinedSizeM = Template.bind({})
OutlinedSizeM.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M
}

export const OutlinedSizeL = Template.bind({})
OutlinedSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L
}

export const OutlinedSizeX = Template.bind({})
OutlinedSizeX.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.X
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M,
  disabled: true
}
