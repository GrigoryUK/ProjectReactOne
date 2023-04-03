import { screen } from '@testing-library/react'

import AppRouter from './AppRouter'

import { UserRole } from '@/entities/User'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('AppRouter.test', () => {
  test('Страница должна отрендериться', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteAbout()
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Страница не найдена', async () => {
    componentRender(<AppRouter/>, {
      route: '/testssfd'
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Редирект неавторизованного пользователя', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteProfile('1')
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ когда пользователь зарегестрировался', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          initialization: true,
          authData: {}
        }
      }
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ к закрытой странице запрещен (отсутствует роль)', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          initialization: true,
          authData: {}
        }
      }
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ к закрытой странице разрешен (есть роль)', async () => {
    componentRender(<AppRouter/>, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          initialization: true,
          authData: {
            roles: [UserRole.ADMIN]
          }
        }
      }
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
