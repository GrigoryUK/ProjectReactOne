import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'
import { Popups } from 'shared/ui/Popups/Popups'
import { Icon } from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { NotificationList } from 'entities/Notification'

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.NotificationButton, {}, [className])}>
      <Popups className={cls.box} trigger={(
        <div className={cls.notification}>
          <Icon Svg={NotificationIcon} inverted/>
        </div>
      )}>
        <NotificationList />
      </Popups>
    </div>
  )
})
