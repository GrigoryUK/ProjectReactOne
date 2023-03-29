import React, { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUserName'
import { useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Profile } from 'entities/Profile'
import { Text } from 'shared/ui/Text/Text'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { HStack } from 'shared/ui/Stack'
import { NotificationButton } from 'features/notificationButton'
import { AvatarDropdown } from 'features/avatarDropdown'

interface NavbarProps {
    data?: Profile
  className?: string
}

export const Navbar = memo(({ className, data }: NavbarProps) => {
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onCloseModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  if (authData) {
    return (
              <header data-testid='navbar'
                   className={classNames(cls.Navbar, {}, [className])}
              >
                  <AvatarDropdown/>
                  <div className={cls.Navbar__switcher}>
                      <ThemeSwitcher />
                      <LangSwitcher className={cls.LangSwitcher} />
                      <NotificationButton/>
                  </div>
              </header>
    )
  }
  return (
        <header data-testid='navbar'
            className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.Navbar__logo}>
                {t('Logo')}
            </div>
            <div className={cls.Navbar__switcher}>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </header>
  )
})
