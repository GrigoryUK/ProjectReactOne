import { createSelector } from '@reduxjs/toolkit'

import { SidebarItemType } from '../types/sidebar'

import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import articleIcon from '@/shared/assets/icons/article.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'

export const getSidebarItems = createSelector(

  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [

      {
        path: getRouteMain(),
        Icon: HomeIcon,
        text: 'Главная'
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О нас'
      }

    ]
    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true
        },
        {
          path: getRouteArticles(),
          Icon: articleIcon,
          text: 'Статьи',
          authOnly: true
        }
      )
    }

    return sidebarItemsList
  }

)
