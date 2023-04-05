import { Story } from '@storybook/react';

// eslint-disable-next-line ug-fsd-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => {
    return (StoryComponent: Story) => (
        <ThemeProvider initialTheme={theme}>
            <StoryComponent />
        </ThemeProvider>
    );
};
