import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import cls from './AvatarDropdown.module.scss'

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { getRouteAdmin, getRouteArticlesCreate, getRouteProfile } from '@/shared/const/router'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Dropdown'
import { Text } from '@/shared/ui/Text'

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const isAdminPanelAvailable = isAdmin || isManager

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  const avatar = (
    <div className={cls.avatar}>
      <Avatar size={30} src={authData.avatar}/>
      <Text text={authData.username}/>
    </div>
  )
  return (
    <Dropdown items={[
      ...(isAdminPanelAvailable
        ? [{
            content: t('Админ панель'),
            href: getRouteAdmin()
          }]
        : []),
      {
        content: t('Profile'),
        href: getRouteProfile(authData.id)
      },
      {
        content: t('Создать статью'),
        href: getRouteArticlesCreate()
      },
      {
        content: t('go out'),
        onClick: onLogout
      }
    ]} trigger={avatar}/>
  )
})
