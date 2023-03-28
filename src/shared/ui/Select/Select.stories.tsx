import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Укажите что-то',
  options: [
    { value: '123', content: 'Первый пункт' },
    { value: '12233', content: 'Первый ыва' },
    { value: '1223233', content: 'Первый вывф' }
  ]
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  label: 'Укажите что-то',
  options: [
    { value: '123', content: 'Первый пункт' },
    { value: '12233', content: 'Первый ыва' },
    { value: '1223233', content: 'Первый вывф' }
  ]
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
