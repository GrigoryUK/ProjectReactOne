
import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getUserAuthData } from '@/entities/User'
import { useSelector } from 'react-redux'
import { SidebarItemType } from '../../model/types/sidebar'

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }
  return (
      <AppLink
          className={classNames(cls.item, { [cls.collapsed]: collapsed })}
          theme={AppLinkTheme.SECONDARY}
          to={item.path}

      >
          <item.Icon className={cls.icon}/>
          <span>
              {item.text}
          </span>
      </AppLink>
  )
})