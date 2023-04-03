import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import avatar from '../../../../shared/assets/avatar.png'

import { ProfileCard } from './ProfileCard'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    lastname: '123',
    first: '123',
    country: Country.Belarus,
    currency: Currency.RUB,
    city: '123',
    age: 22,
    avatar

  }
}

export const Error = Template.bind({})
Error.args = {
  error: 'true'
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}
