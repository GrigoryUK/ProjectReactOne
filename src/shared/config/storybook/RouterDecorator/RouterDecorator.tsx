import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

export const RouterDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
            <StoryComponent />
    </BrowserRouter>
)
