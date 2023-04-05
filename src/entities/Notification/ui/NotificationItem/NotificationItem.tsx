import { memo } from 'react';

import type { Notification } from '../../model/types/notification';

import cls from './NotificationItem.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text, TextSize } from '@/shared/ui/Text';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED_MESSAGE}
            className={classNames(cls.NotificationItem, {}, [className])}>
            <Text
                size={TextSize.S}
                title={item.title}
                text={item.description}
            />
        </Card>
    );

    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer">
                {content}
            </a>
        );
    }
    return content;
});
