// eslint-disable-next-line ug-fsd-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Story } from '@storybook/react'
import { Theme } from '@/shared/const/theme'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => {
  return (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent/>
      </div>
    </ThemeProvider>
  )
}
