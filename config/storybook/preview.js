
import { addDecorator } from '@storybook/react'

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenceDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/shared/const/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'fullscreen'
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(StoreDecorator({}))
