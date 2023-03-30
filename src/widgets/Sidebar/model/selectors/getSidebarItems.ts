import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import HomeIcon from '@/shared/assets/icons/home.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import articleIcon from '@/shared/assets/icons/article.svg'
import { SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(

  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [

      {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'Главная'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О нас'
      }

    ]
    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true
        },
        {
          path: RoutePath.articles,
          Icon: articleIcon,
          text: 'Статьи',
          authOnly: true
        }
      )
    }

    return sidebarItemsList
  }

)
