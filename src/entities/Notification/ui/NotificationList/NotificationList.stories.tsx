import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { NotificationList } from './NotificationList'

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Primary = Template.bind({})

Primary.args = {}
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'string',
          description: 'string'
        },
        {
          id: '2',
          title: 'string',
          description: 'string'
        },
        {
          id: '3',
          title: 'string',
          description: 'string'
        }
      ]
    }
  ]
}
