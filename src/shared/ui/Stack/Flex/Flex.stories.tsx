import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Flex } from './Flex'

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({})

Row.args = {
  children: (
      <>

      </>
  )
}

export const RowGap = Template.bind({})

RowGap.args = {
  gap: '16',
  children: (
        <>

        </>
  )
}
export const Column = Template.bind({})

Column.args = {
  direction: 'column',
  children: (
      <>

      </>
  )
}

export const ColumnGap = Template.bind({})

ColumnGap.args = {
  direction: 'column',
  gap: '16',
  children: (
        <>

        </>
  )
}
