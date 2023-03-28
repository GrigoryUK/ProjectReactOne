
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator'
import { addDecorator } from '@storybook/react'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenceDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(StoreDecorator({}))
