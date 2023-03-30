import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useState } from 'react'
import { Popups } from '@/shared/ui/Popups/Popups'
import { Icon } from '@/shared/ui/Icon/Icon'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { NotificationList } from '@/entities/Notification'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const {
    className
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <div role={'button'} onClick={onOpenDrawer} className={cls.notification}>
      <Icon Svg={NotificationIcon} inverted/>
    </div>
  )
  return (
    <div>

        <BrowserView>
          <div className={classNames(cls.NotificationButton, {}, [className])}>
          <Popups trigger={trigger}>
            <NotificationList />
          </Popups>
          </div>
        </BrowserView>

        <MobileView>
          <div className={classNames(cls.NotificationButton, {}, [className])}>
          {trigger}
            <AnimationProvider>
              <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                <NotificationList />
              </Drawer>
            </AnimationProvider>
          </div>
        </MobileView>

    </div>
  )
})
