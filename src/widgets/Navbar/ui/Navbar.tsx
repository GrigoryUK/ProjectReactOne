import React, { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUserName'
import { useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Profile } from 'entities/Profile'
import { Text } from 'shared/ui/Text/Text'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'

interface NavbarProps {
    data?: Profile
  className?: string
}

export const Navbar = memo(({ className, data }: NavbarProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const isAdminPanelAvailable = isAdmin || isManager

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    const avatar = (
          <div className={cls.Navbar__link}>
              <Avatar size={30} src={authData.avatar}/>
              <Text text={authData.username}/>
          </div>
    )
    return (
              <header data-testid='navbar'
                   className={classNames(cls.Navbar, {}, [className])}>
                  <div className={cls.left__row}>
                      <Dropdown className={cls.dropdown} items={[
                        ...(isAdminPanelAvailable
                          ? [{
                              content: t('Админ панель'),
                              href: RoutePath.admin_panel
                            }]
                          : []),
                        {
                          content: t('Profile'),
                          href: `${RoutePath.profile}${authData.id}`
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
                  </div>
                  <div className={cls.Navbar__switcher}>
                      <Button theme={ButtonTheme.OUTLINE} onClick={onLogout}>
                          {t('go out')}
                      </Button>
                      <ThemeSwitcher />
                      <LangSwitcher />
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

                <Button theme={ButtonTheme.OUTLINE} onClick={onCloseModal}>
                    {t('sign in')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </header>
  )
})
