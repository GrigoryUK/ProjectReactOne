import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LoginModal } from './LoginModal'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Primary = Template.bind({})

Primary.args = {
  isOpen: true
}
Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: '123' }
})]

export const Error = Template.bind({})
Error.args = {
  isOpen: true
}
Error.decorators = [StoreDecorator({
  loginForm: { username: '123', password: '123', error: 'Error' }
})]

export const Loading = Template.bind({})
Loading.args = {
  isOpen: true
}
Loading.decorators = [StoreDecorator({
  loginForm: { isLoading: true }
})]
