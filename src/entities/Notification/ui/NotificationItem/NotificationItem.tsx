import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationItem.module.scss'
import { memo } from 'react'
import type { Notification } from '../../model/types/notification'
import { Card, CardTheme } from '@/shared/ui/Card/Card'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import { Link } from 'react-router-dom'

interface NotificationItemProps {
  className?: string;
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const {
    className,
    item
  } = props

  const content = (
    <Card theme={CardTheme.OUTLINED_MESSAGE} className={classNames(cls.NotificationItem, {}, [className])}>
      <Text size={TextSize.S} title={item.title} text={item.description}/>
    </Card>
  )

  if (item.href) {
    return (
      <a className={cls.link} target='_blank' href={item.href} rel="noreferrer">
        {content}
      </a>
    )
  }
  return content
})
