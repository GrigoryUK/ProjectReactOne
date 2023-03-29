import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AvatarDropdown.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'

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

  const avatar = (
    <div className={cls.avatar}>
      <Avatar size={30} src={authData?.avatar}/>
      <Text text={authData?.username}/>
    </div>
  )
  return (
    <Dropdown items={[
      ...(isAdminPanelAvailable
        ? [{
            content: t('Админ панель'),
            href: RoutePath.admin_panel
          }]
        : []),
      {
        content: t('Profile'),
        href: `${RoutePath.profile}${authData?.id}`
      },
      {
        content: t('Создать статью'),
        href: RoutePath.articles_create
      },
      {
        content: t('go out'),
        onClick: onLogout
      }
    ]} trigger={avatar}/>
  )
})
