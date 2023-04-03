import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Modal } from './Modal'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />
export const ModalLight = Template.bind({})
ModalLight.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores at blanditiis dicta distinctio, esse fugiat\n' +
        'nemo nostrum obcaecati optio pariatur, placeat quae quas recusandae repellat sed similique soluta voluptatem.'

}
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ModalDark = Template.bind({})
ModalDark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores at blanditiis dicta distinctio, esse fugiat\n' +
      'nemo nostrum obcaecati optio pariatur, placeat quae quas recusandae repellat sed similique soluta voluptatem.'

}
ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
