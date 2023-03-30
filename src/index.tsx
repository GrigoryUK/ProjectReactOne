import { createRoot } from 'react-dom/client'
import App from './app/App'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import '@/app/styles/index.scss'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Error')
}

const root = createRoot(container)

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)